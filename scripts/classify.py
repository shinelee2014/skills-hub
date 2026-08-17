import json
import sys

# Set output encoding
sys.stdout.reconfigure(encoding='utf-8')

CATEGORIES = [
    {
        'id': 'design',
        'name': '视觉设计',
        'icon': '🎨',
        'keywords': [
            'image', 'photo', 'design', 'poster', 'cover', 'visual', 'comic', 'diagram', 'infographic', 
            'canvas', 'illustration', 'figure', 'anime', 'imax', 'portrait', 'watermark', 'color', 
            'taste', 'art', 'infograph', 'j-cover', 'j-idol', 'j-poses', 'mecha', 'card', 'material', 
            'guizang', 'ian-xiaohei', 'mondo', 'photo-restoration', 'gemini-watermark', 'brand-guidelines',
            'algorithmic-art', 'brandkit', 'pretty-mermaid', 'beautiful-mermaid', 'any2card', 'jakub-better-ui',
            'jakub-better-interface', 'jakub-better-layout', 'jakub-better-typography', 'jakub-better-colors',
            'minimalist-ui', 'industrial-brutalist-ui', 'high-end-visual-design', 'design-taste-frontend',
            'stitch-design-taste', 'theme-factory', 'info-card-designer', 'rn-cover', 'rn-dot-cover',
            'smart-illustrator', 'ui-ux-pro-max'
        ]
    },
    {
        'id': 'dev',
        'name': '编程开发',
        'icon': '💻',
        'keywords': [
            'code', 'git', 'debug', 'test', 'review', 'refactor', 'plan', 'api', 'react', 'python', 
            'beam', 'worktree', 'frontend', 'mcp-builder', 'karpathy', 'dispatching', 'executing', 
            'finishing', 'verification', 'webapp', 'deploy', 'systematic-debugging', 'test-driven',
            'writing-plans', 'requesting-code-review', 'receiving-code-review', 'using-git-worktrees',
            'subagent-driven', 'full-output', 'image-to-code', 'codebase-to-course', 'ml-best-practices',
            'playwright', 'webapp-testing', 'claude-api', 'redesign-existing-projects', 'web-artifacts-builder',
            'web-design-guidelines', 'web-performance-seo', 'managing-python-dependencies', 'python-performance-optimization'
        ]
    },
    {
        'id': 'agent',
        'name': 'Agent系统',
        'icon': '🤖',
        'keywords': [
            'skill', 'superpower', 'agent', 'clawd', 'moltbook', 'workflow', 'dbs', 'find-skills', 
            'crawler', 'auto', 'customization', 'evolution', 'repair', 'creator', 'agy-customizations',
            'skill-creator', 'skill-manager', 'skill-repair', 'skill-evolution-manager', 'using-superpowers',
            'writing-skills', 'proactive-agent', 'dbs-chatroom', 'dbs-agent-migration', 'dbs-decision',
            'dbs-action', 'dbs-content', 'dbs-learning', 'dbs-goal', 'dbs-diagnosis', 'dbs-restore',
            'dbs-save', 'dbs-hook', 'dbs-slowisfast', 'dbs-spread', 'self-improvement', 'skills-updater'
        ]
    },
    {
        'id': 'video',
        'name': '音视频剪辑',
        'icon': '📹',
        'keywords': [
            'video', 'audio', 'remotion', 'hyperframes', 'tts', 'subtitles', 'koubo', 'videocut', 
            'talking-head', 'clipper', 'yt-dlp', 'youtube', 'speech', 'motion', 'captions', 
            'media-downloader', 'pr-to-video', 'avatar', 'videocut-skills', 'ai-jian-koubo',
            'chengfeng-videocut', 'manimate', 'slack-gif-creator', 'editorial-collage-motion',
            'embedded-captions', 'faceless-explainer', 'heygen-digital-avatar', 'motion-graphics',
            'openmontage-cinematography', 'product-launch-video', 'ra-audio-to-subtitles',
            'ra-local-talking-head-cut', 'ra-video-download', 'ra-video-production-director',
            'ra-video-title', 'ra-video-wash-pipeline', 'rn-bw-text-opener', 'rn-dark-saas-video',
            'rn-motion-director', 'rn-motion-replica', 'rn-replica-qc', 'video-use', 'website-to-video',
            'edge-tts', 'youtube-clipper-skill'
        ]
    },
    {
        'id': 'writing',
        'name': '写作转化',
        'icon': '✍️',
        'keywords': [
            'write', 'writing', 'plain', 'word', 'article', 'copywriting', 'formatter', 'markdown', 
            'translate', 'polisher', 'xray', 'summary', 'x-article', 'post-to', 'wechat', 'weibo', 
            'xhs', 'universal-converter', 'ljg-plain', 'ljg-word', 'ljg-writes', 'ljg-xray-article',
            'baoyu-format-markdown', 'baoyu-article-illustrator', 'baoyu-post-to-x', 'baoyu-post-to-wechat',
            'baoyu-post-to-weibo', 'baoyu-translate', 'chinese-copywriting-formatter', 'doc-coauthoring',
            'transcript-polisher', 'translate-polisher', 'ra-人话', 'ra-洗稿', 'ra-公众号提取',
            'ra-逐字稿提取', 'x-article-publisher', 'dbs-xhs-title', 'xhs-article-to-images'
        ]
    },
    {
        'id': 'ppt',
        'name': 'PPT演示',
        'icon': '📊',
        'keywords': [
            'ppt', 'slides', 'slideshow', 'presentation', 'cyber-ppt', 'dashiai-ppt', 'baoyu-slide-deck',
            'ai-ppt-toolkit', 'frontend-slides', 'html-ppt-skill', 'nano-banana', 'ppt-agent',
            'ppt-agent-workflow', 'ppt-as-code', 'ppt-master', 'slides-skill', 'ultimate-ppt-master', 'pptx'
        ]
    },
    {
        'id': 'knowledge',
        'name': '知识大脑',
        'icon': '🧠',
        'keywords': [
            'obsidian', 'second-brain', 'base', 'wiki', 'notebooklm', 'doc', 'digest', 'notes',
            'obsidian-bases', 'obsidian-markdown', 'obsidian-helper', 'project-to-obsidian',
            'second-brain-maintainer', 'notebooklm-plugin', 'notebooklm-py', 'qiaomu-anything-to-notebooklm',
            'doc-sync-tool', 'graphify', 'json-canvas', 'docx', 'pdf', 'xlsx', 'paddleocr-skill'
        ]
    },
    {
        'id': 'search',
        'name': '搜索研究',
        'icon': '🔍',
        'keywords': [
            'search', 'last30days', 'exa', 'tavily', 'news', 'arxiv', 'literature', 'blogwatcher', 
            'clawfeed', 'scraper', 'reader', 'x-reader', 'daily-news', 'browser', 'agent-browser',
            'dev-browser', 'chrome-cdp', 'multi-search-engine', 'news-summary', 'news-aggregator-skill',
            'ak-rss-digest', 'literature-search-arxiv', 'literature-search-europepmc', 'literature-search-biorxiv',
            'literature-search-openalex', 'x-reader-analyzer', 'x-reader-video', 'ljg-x-download',
            'google-official-seo-guide', 'predictingthepast', 'web-scraper', 'actionbook', 'agnxi-search'
        ]
    },
    {
        'id': 'data',
        'name': '数据与云',
        'icon': '☁️',
        'keywords': [
            'bigquery', 'gcp', 'dataform', 'composer', 'dataflow', 'dbt', 'sql', 'spark', 'gcloud', 
            'autocleaning', 'data-autocleaning', 'developing-with-bigquery', 'gcloud-auth',
            'gcp-composer', 'gcp-dataflow', 'gcp-data-pipelines', 'gcp-pipeline', 'discovering-gcp-data-assets',
            'a-share-analyzer', 'building-data-apps', 'exploratory-data-analysis', 'uv', 'database',
            'chembl', 'clinvar', 'gtex', 'protein', 'pubchem', 'string-database', 'uniprot', 'pdb',
            'genomics', 'opentargets', 'science', 'ncbi', 'alphafold', 'blast', 'pymol', 'reactome',
            'quickgo', 'human-protein-atlas', 'embl-ebi', 'encode-ccres', 'ensembl', 'gnomad', 'jaspar'
        ]
    }
]

with open('d:/antigravity/app/skills在线版/src/initial-managed-skills.json', 'r', encoding='utf-8') as f:
    skills = json.load(f)

# Ensure claude-api is present
if not any(s['name'] == 'claude-api' for s in skills):
    skills.append({
        'id': 'web-skill-claude-api',
        'name': 'claude-api',
        'description': 'Claude Code official skill for Claude API interactions and completions.',
        'source_type': 'git',
        'source_ref': 'https://github.com/anthropics/skills',
        'central_path': '~/.skillshub/skills/claude-api',
        'created_at': 1771146193000,
        'updated_at': 1771146193000,
        'last_sync_at': 1771146193000,
        'enabled': True,
        'status': 'healthy',
        'tags': [],
        'targets': [
            {'tool': 'antigravity', 'scope': 'global', 'mode': 'symlink', 'status': 'synced', 'target_path': '~/.antigravity/skills/claude-api', 'synced_at': 1771146193000},
            {'tool': 'claude-code', 'scope': 'global', 'mode': 'symlink', 'status': 'synced', 'target_path': '~/.claude/skills/claude-api', 'synced_at': 1771146193000},
            {'tool': 'cursor', 'scope': 'global', 'mode': 'symlink', 'status': 'synced', 'target_path': '~/.cursor/skills/claude-api', 'synced_at': 1771146193000}
        ]
    })

counts = {}
for idx, s in enumerate(skills):
    name = s.get('name', '').lower()
    desc = s.get('description', '').lower()
    combined = f'{name} {desc}'

    best_cat = None
    best_score = 0

    for cat in CATEGORIES:
        score = 0
        for kw in cat['keywords']:
            kw_l = kw.lower()
            if kw_l == name:
                score += 10
            elif kw_l in name:
                score += 5
            elif f' {kw_l} ' in f' {combined} ':
                score += 2
            elif kw_l in desc:
                score += 1
        if score > best_score:
            best_score = score
            best_cat = cat

    if not best_cat or best_score == 0:
        if any(w in combined for w in ['chat', 'prompt', 'guide', 'session']):
            best_cat = next(c for c in CATEGORIES if c['id'] == 'agent')
        else:
            best_cat = next(c for c in CATEGORIES if c['id'] == 'dev')

    s['category'] = best_cat['id']
    s['category_name'] = best_cat['name']
    s['category_icon'] = best_cat['icon']
    
    # Standard tag format
    tag_name = f"{best_cat['icon']} {best_cat['name']}"
    s['tags'] = [{'id': idx + 1, 'name': tag_name}]
    counts[best_cat['name']] = counts.get(best_cat['name'], 0) + 1

with open('d:/antigravity/app/skills在线版/src/initial-managed-skills.json', 'w', encoding='utf-8') as f:
    json.dump(skills, f, ensure_ascii=False, indent=2)

print('Success! Total skills categorized:', len(skills))
for cat_name, count in counts.items():
    print(f'- {cat_name}: {count}')
