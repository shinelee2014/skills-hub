import json
import re

def find_flowchart_skills():
    with open('src/initial-managed-skills.json', 'r', encoding='utf-8') as f:
        skills = json.load(f)

    with open('src/local_skills_cache.json', 'r', encoding='utf-8') as f:
        content_cache = json.load(f)

    flowchart_skills = []

    for s in skills:
        name = s['name']
        desc = s.get('description', '')
        content = content_cache.get(name, '')
        full_text = f"{name}\n{desc}\n{content}".lower()

        # Specific flowchart & diagram indicators
        primary_signals = [
            '流程图', '时序图', '架构图', '逻辑流程图', '思维导图', '拓扑图', '关系图',
            'flowchart', 'flow chart', 'sequence diagram', 'architecture diagram',
            'mermaid', 'mermaid.js', 'plantuml', 'graphviz', 'json canvas', '.canvas',
            'diagram', 'diagrams', 'infographic'
        ]

        matched = [sig for sig in primary_signals if sig in full_text]

        # Scoring
        score = 0
        if any(k in name.lower() for k in ['diagram', 'chart', 'mermaid', 'canvas', 'graphify', 'graph']):
            score += 10
        if any(k in desc.lower() for k in ['流程图', '架构图', '时序图', '思维导图', 'mermaid', 'diagram', 'flowchart']):
            score += 10
        if 'mermaid' in full_text:
            score += 5
        if '流程图' in full_text or 'flowchart' in full_text:
            score += 5
        if 'plantuml' in full_text or 'graphviz' in full_text or 'json canvas' in full_text:
            score += 5

        # Exclusions (e.g. general code test or stock data or PPT without diagram focus)
        if name in ['a-share-analyzer', 'baoyu-post-to-x', 'baoyu-compress-image', 'chembl-database']:
            score = 0

        if score >= 5:
            flowchart_skills.append({
                'skill': s,
                'name': name,
                'desc': desc,
                'category': s.get('category_name', ''),
                'score': score,
                'matched': matched
            })

    # Sort by score descending
    flowchart_skills.sort(key=lambda x: x['score'], reverse=True)

    print(f"Total flowchart / diagram skills found: {len(flowchart_skills)}")
    for i, item in enumerate(flowchart_skills, 1):
        print(f"{i:2d}. {item['name']:<32} | {item['category']:<8} | {item['desc'][:60]}")

    return flowchart_skills

if __name__ == '__main__':
    find_flowchart_skills()
