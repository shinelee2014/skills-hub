import json
import os
import requests

def main():
    with open('src/initial-managed-skills.json', 'r', encoding='utf-8') as f:
        skills = json.load(f)

    flowchart_names = {
        'academic-diagram-expert',
        'beautiful-mermaid',
        'pretty-mermaid-skills',
        'baoyu-diagram',
        'diagram',
        'archify',
        'json-canvas',
        'antv-infographic',
        'antv-infographic-syntax',
        'baoyu-infographic',
        'baoyu-image-cards',
        'fireworks-tech-graph',
        'graphify',
        'manimate',
        'visual-explainer',
        'infographic-generator',
        'ian-xiaohei-illustrations',
        'ink-theater-engine'
    }

    tag_obj = {'id': 101, 'name': '流程图'}

    tagged_count = 0
    for s in skills:
        if s['name'] in flowchart_names:
            tags = s.get('tags', [])
            if not any(t.get('name') == '流程图' for t in tags):
                tags.append(tag_obj)
                s['tags'] = tags
                tagged_count += 1

    print(f'Successfully tagged {tagged_count} skills with "流程图" tag!')

    with open('src/initial-managed-skills.json', 'w', encoding='utf-8') as f:
        json.dump(skills, f, ensure_ascii=False, indent=2)

    # Also update gist if token is available
    token = os.environ.get('GITHUB_TOKEN')
    gist_id = '74538bb53b396d36843619631b6d58e1'
    if token:
        try:
            payload = {
                'description': 'Skills Hub - 私有备份 (包含 286 个技能与流程图标签)',
                'files': {
                    'skills-hub-sync.json': {
                        'content': json.dumps({
                            'version': '1.0.0',
                            'exported_at': '2026-08-17T12:50:00Z',
                            'managed_skills': skills,
                            'tags': [{'name': '流程图', 'skill_count': len(flowchart_names)}],
                            'tools': []
                        }, ensure_ascii=False, indent=2)
                    }
                }
            }
            res = requests.patch(
                f'https://api.github.com/gists/{gist_id}',
                headers={
                    'Authorization': f'token {token}',
                    'Accept': 'application/vnd.github.v3+json'
                },
                json=payload,
                timeout=10
            )
            print(f'Gist sync status: {res.status_code}')
        except Exception as e:
            print(f'Gist sync failed: {e}')

if __name__ == '__main__':
    main()
