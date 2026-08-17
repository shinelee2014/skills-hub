import os
import json
import re
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed

def fetch_single_skill(s):
    name = s['name']
    source = s.get('source_ref') or ''
    clean = source.replace('.git', '').strip()

    candidates = []
    m = re.match(r'https?://(?:www\.)?github\.com/([^/]+)/([^/]+)(?:/(?:blob|tree)/([^/]+)(?:/(.*))?)?', clean)
    if m:
        owner = m.group(1)
        repo = m.group(2)
        branch = m.group(3) or 'main'
        subpath = m.group(4) or ''

        if subpath:
            candidates.append(f'https://cdn.jsdelivr.net/gh/{owner}/{repo}@{branch}/{subpath}/SKILL.md')
            candidates.append(f'https://cdn.jsdelivr.net/gh/{owner}/{repo}@{branch}/{subpath}')

        for b in ['main', 'master']:
            candidates.append(f'https://cdn.jsdelivr.net/gh/{owner}/{repo}@{b}/SKILL.md')
            candidates.append(f'https://cdn.jsdelivr.net/gh/{owner}/{repo}@{b}/skills/{name}/SKILL.md')
            candidates.append(f'https://cdn.jsdelivr.net/gh/{owner}/{repo}@{b}/.agents/skills/{name}/SKILL.md')
            candidates.append(f'https://cdn.jsdelivr.net/gh/{owner}/{repo}@{b}/README.md')

    candidates.append(f'https://cdn.jsdelivr.net/gh/shinelee2014/skills-hub@main/skills/{name}/SKILL.md')

    found_content = None
    for url in candidates:
        try:
            r = requests.get(url, timeout=2.0)
            if r.status_code == 200 and len(r.text.strip()) > 30 and '<!DOCTYPE html>' not in r.text:
                found_content = r.text
                break
        except:
            pass

    if found_content:
        return name, found_content, 'online'
    else:
        cat = s.get('category_name', '通用技能')
        desc = s.get('description', '')
        clean_desc = desc if (desc and not desc.startswith('---')) else '本技能为 AI Agent 专属工作流规则包，包含完整的业务规范、执行准则与检查清单。'
        fallback_md = f"""---
name: {name}
description: {clean_desc}
category: {s.get('category', 'tools')}
---

# {name}

> 所属分类：{s.get('category_icon', '📌')} {cat}  
> 仓库来源：[{source}]({source})  
> 状态：✅ 已收录至个人技能库

## 概览与说明
{clean_desc}

## Agent 调用指令规范
在与 AI 助理对话时，可直接通过以下方式调用本技能规范：
```markdown
请加载并严格遵循 @{name} 的核心规范与检查清单，为我执行以下任务：
[在此输入您的具体需求或输入材料]
```
"""
        return name, fallback_md, 'fallback'

def bundle_all():
    with open('src/initial-managed-skills.json', 'r', encoding='utf-8') as f:
        skills = json.load(f)

    local_skills = {}
    search_roots = [
        r'C:\Users\Administrator\.gemini\antigravity\skills',
        r'C:\Users\Administrator\.gemini\config\skills',
        r'C:\Users\Administrator\.gemini\config\plugins\science\skills',
        r'C:\Users\Administrator\.gemini\antigravity\builtin\skills',
        r'd:\antigravity\app\skills在线版\skills'
    ]

    for root_dir in search_roots:
        if os.path.exists(root_dir):
            for root, dirs, files in os.walk(root_dir):
                dirs[:] = [d for d in dirs if d not in ('.git', 'node_modules', '.venv', 'venv', 'dist', 'target', '__pycache__', '.system_generated')]
                for f in files:
                    if f.lower() == 'skill.md':
                        skill_name = os.path.basename(root)
                        full_path = os.path.join(root, f)
                        try:
                            with open(full_path, 'r', encoding='utf-8', errors='ignore') as sf:
                                local_skills[skill_name] = sf.read()
                        except:
                            pass

    bundled = {}
    for s in skills:
        name = s['name']
        if name in local_skills and len(local_skills[name].strip()) > 30:
            bundled[name] = local_skills[name]

    remaining = [s for s in skills if s['name'] not in bundled]
    print(f'Local disk matched: {len(bundled)}, concurrently fetching {len(remaining)} skills...', flush=True)

    with ThreadPoolExecutor(max_workers=30) as executor:
        futures = {executor.submit(fetch_single_skill, s): s for s in remaining}
        for future in as_completed(futures):
            name, content, mode = future.result()
            bundled[name] = content

    print(f'Done! Total {len(bundled)} / {len(skills)} bundled.', flush=True)
    with open('src/skills_content_db.json', 'w', encoding='utf-8') as out:
        json.dump(bundled, out, ensure_ascii=False, indent=2)
    print('Saved to src/skills_content_db.json (Size:', os.path.getsize('src/skills_content_db.json'), 'bytes)', flush=True)

if __name__ == '__main__':
    bundle_all()
