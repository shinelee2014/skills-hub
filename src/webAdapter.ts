import rawFeaturedSkills from '../featured-skills.json'
import rawInitialSkills from './initial-managed-skills.json'
import rawLocalSkillsCache from './local_skills_cache.json'

const LOCAL_SKILLS_CACHE: Record<string, string> = rawLocalSkillsCache as Record<string, string>
import type {
  AutoUpdateConfigDto,
  FeaturedSkillDto,
  InstallResultDto,
  ManagedSkill,
  OnlineSkillDto,
  SkillFileEntry,
  TagWithCountDto,
  ToolConfigDto,
  ToolInfoDto,
  ToolStatusDto,
} from './components/skills/types'

export const IS_TAURI =
  typeof window !== 'undefined' &&
  Boolean(
    (window as { __TAURI__?: unknown }).__TAURI__ ||
      (window as { __TAURI_INTERNALS__?: unknown }).__TAURI_INTERNALS__,
  )

export const BUILTIN_TOOLS: ToolInfoDto[] = [
  {
    key: 'cursor',
    label: 'Cursor',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.cursor/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'claude_code',
    label: 'Claude Code',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.claude/skills',
    project_skills_dir: '.claude/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'codex',
    label: 'Codex',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.codex/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'opencode',
    label: 'OpenCode',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.config/opencode/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'antigravity',
    label: 'Antigravity',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.gemini/config/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'amp',
    label: 'Amp',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.config/agents/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'kimi_cli',
    label: 'Kimi Code CLI',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.config/agents/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'augment',
    label: 'Augment',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.augment/skills',
    project_skills_dir: '.augment/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'openclaw',
    label: 'OpenClaw',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.openclaw/skills',
    project_skills_dir: 'skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'copaw',
    label: 'Copaw',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.copaw/skill_pool',
    project_skills_dir: '.copaw/skill_pool',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'cline',
    label: 'Cline',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.agents/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'codebuddy',
    label: 'CodeBuddy',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.codebuddy/skills',
    project_skills_dir: '.codebuddy/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'codewhale',
    label: 'CodeWhale',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.codewhale/skills',
    project_skills_dir: '.codewhale/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'workbuddy',
    label: 'WorkBuddy',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.workbuddy/skills',
    project_skills_dir: '.workbuddy/skills',
    supports_project_scope: false,
    sync_mode: 'auto',
  },
  {
    key: 'command_code',
    label: 'Command Code',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.commandcode/skills',
    project_skills_dir: '.commandcode/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'continue',
    label: 'Continue',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.continue/skills',
    project_skills_dir: '.continue/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'crush',
    label: 'Crush',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.config/crush/skills',
    project_skills_dir: '.crush/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'junie',
    label: 'Junie',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.junie/skills',
    project_skills_dir: '.junie/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'iflow_cli',
    label: 'iFlow CLI',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.iflow/skills',
    project_skills_dir: '.iflow/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'kiro_cli',
    label: 'Kiro CLI',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.kiro/skills',
    project_skills_dir: '.kiro/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'kode',
    label: 'Kode',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.kode/skills',
    project_skills_dir: '.kode/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'mcpjam',
    label: 'MCPJam',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.mcpjam/skills',
    project_skills_dir: '.mcpjam/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'mistral_vibe',
    label: 'Mistral Vibe',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.vibe/skills',
    project_skills_dir: '.vibe/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'mux',
    label: 'Mux',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.mux/skills',
    project_skills_dir: '.mux/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'openclaude',
    label: 'OpenClaude IDE',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.openclaude/skills',
    project_skills_dir: '.openclaude/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'openhands',
    label: 'OpenHands',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.openhands/skills',
    project_skills_dir: '.openhands/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'pi',
    label: 'Pi',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.pi/agent/skills',
    project_skills_dir: '.pi/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'qoder',
    label: 'Qoder',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.qoder/skills',
    project_skills_dir: '.qoder/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'qoderwork',
    label: 'QoderWork',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.qoderwork/skills',
    project_skills_dir: '.qoderwork/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'qwen_code',
    label: 'Qwen Code',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.qwen/skills',
    project_skills_dir: '.qwen/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'trae',
    label: 'Trae',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.trae/skills',
    project_skills_dir: '.trae/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'trae_cn',
    label: 'Trae CN',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.trae-cn/skills',
    project_skills_dir: '.trae/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'zencoder',
    label: 'Zencoder',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.zencoder/skills',
    project_skills_dir: '.zencoder/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'neovate',
    label: 'Neovate',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.neovate/skills',
    project_skills_dir: '.neovate/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'pochi',
    label: 'Pochi',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.pochi/skills',
    project_skills_dir: '.pochi/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'adal',
    label: 'AdaL',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.adal/skills',
    project_skills_dir: '.adal/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'kilo_code',
    label: 'Kilo Code',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.kilocode/skills',
    project_skills_dir: '.kilocode/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'roo_code',
    label: 'Roo Code',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.roo/skills',
    project_skills_dir: '.roo/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'goose',
    label: 'Goose',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.config/goose/skills',
    project_skills_dir: '.goose/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'gemini_cli',
    label: 'Gemini CLI',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.gemini/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'github_copilot',
    label: 'GitHub Copilot',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.copilot/skills',
    project_skills_dir: '.agents/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'clawdbot',
    label: 'Clawdbot',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.clawdbot/skills',
    project_skills_dir: '.clawdbot/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'droid',
    label: 'Droid',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.factory/skills',
    project_skills_dir: '.factory/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'windsurf',
    label: 'Windsurf',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.codeium/windsurf/skills',
    project_skills_dir: '.windsurf/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'moltbot',
    label: 'MoltBot',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.moltbot/skills',
    project_skills_dir: '.moltbot/skills',
    supports_project_scope: true,
    sync_mode: 'auto',
  },
  {
    key: 'hermes_agent',
    label: 'Hermes Agent',
    avatar: null,
    installed: true,
    enabled: true,
    is_custom: false,
    skills_dir: '.hermes/skills',
    project_skills_dir: '.hermes/skills',
    supports_project_scope: false,
    sync_mode: 'auto',
  },
]

const STORAGE_KEYS = {
  SKILLS: 'skills-hub-web-managed-skills',
  TAGS: 'skills-hub-web-tags',
}

const DEFAULT_INITIAL_TAGS: TagWithCountDto[] = [
  { id: 1, name: 'agent-skills', skill_count: 0, updated_at: Date.now() },
  { id: 2, name: 'frontend', skill_count: 0, updated_at: Date.now() },
  { id: 3, name: 'code-review', skill_count: 0, updated_at: Date.now() },
  { id: 4, name: 'multimedia', skill_count: 0, updated_at: Date.now() },
]

const CURRENT_DATA_VERSION = 'v4_flowchart_tagged_skills'
const VERSION_KEY = 'skills_hub_web_data_version'

export function getWebFeaturedSkills(): FeaturedSkillDto[] {
  const data = rawFeaturedSkills as { skills: FeaturedSkillDto[] }
  return data.skills || []
}

export function getWebManagedSkills(): ManagedSkill[] {
  if (typeof window === 'undefined') return []
  const initial = (rawInitialSkills as unknown as ManagedSkill[]) || []

  try {
    const version = window.localStorage.getItem(VERSION_KEY)
    const raw = window.localStorage.getItem(STORAGE_KEYS.SKILLS)

    // Version migration: merge latest tags (including '流程图') and categories from initial dataset
    if (version !== CURRENT_DATA_VERSION) {
      let currentSkills: ManagedSkill[] = []
      if (raw) {
        try {
          const parsed = JSON.parse(raw)
          if (Array.isArray(parsed) && parsed.length > 0) {
            currentSkills = parsed
          }
        } catch {
          // ignore
        }
      }

      if (currentSkills.length > 0) {
        const initialMap = new Map(initial.map((s) => [s.name, s]))
        const merged = currentSkills.map((s) => {
          const init = initialMap.get(s.name)
          if (!init) return s

          // Merge tags: ensure initial tags (e.g. 流程图) are included
          const existingTagNames = new Set((s.tags || []).map((t) => (typeof t === 'string' ? t : t.name)))
          const mergedTags = [...(s.tags || [])]
          for (const initTag of init.tags || []) {
            const initTagName = typeof initTag === 'string' ? initTag : initTag.name
            if (initTagName && !existingTagNames.has(initTagName)) {
              mergedTags.push(initTag)
              existingTagNames.add(initTagName)
            }
          }

          return {
            ...s,
            category: init.category || s.category,
            category_name: init.category_name || s.category_name,
            category_icon: init.category_icon || s.category_icon,
            tags: mergedTags,
          }
        })
        saveWebManagedSkills(merged)
        window.localStorage.setItem(VERSION_KEY, CURRENT_DATA_VERSION)
        return merged
      } else {
        saveWebManagedSkills(initial)
        window.localStorage.setItem(VERSION_KEY, CURRENT_DATA_VERSION)
        return initial
      }
    }

    if (raw) {
      const parsed = JSON.parse(raw) as ManagedSkill[]
      if (Array.isArray(parsed) && parsed.length >= 285) {
        return parsed
      }
    }
  } catch {
    // ignore
  }

  saveWebManagedSkills(initial)
  try {
    window.localStorage.setItem(VERSION_KEY, CURRENT_DATA_VERSION)
  } catch {
    // ignore
  }
  return initial
}

let autoGistSyncTimer: number | null = null

export function triggerAutoGistSync(): void {
  if (typeof window === 'undefined') return
  const token = getWebGithubToken() || getGistSyncMeta().token
  if (!token) return

  if (autoGistSyncTimer) {
    window.clearTimeout(autoGistSyncTimer)
  }
  autoGistSyncTimer = window.setTimeout(() => {
    pushToGist(token)
      .then((res) => {
        console.log('✅ Auto-synced skills to private Gist:', res.gistUrl)
      })
      .catch((err) => {
        console.warn('⚠️ Auto-sync to Gist error:', err)
      })
  }, 600)
}

export function saveWebManagedSkills(skills: ManagedSkill[], skipAutoSync = false): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills))
    window.localStorage.setItem(VERSION_KEY, CURRENT_DATA_VERSION)
    if (!skipAutoSync) {
      triggerAutoGistSync()
    }
  } catch {
    // ignore
  }
}

export function getWebTags(): TagWithCountDto[] {
  const managed = getWebManagedSkills()

  // 1. Count live usage of tag names across all skills & index explicit IDs
  const skillCountMap = new Map<string, number>()
  const tagIdMap = new Map<string, number>()
  for (const s of managed) {
    if (Array.isArray(s.tags)) {
      for (const t of s.tags) {
        const tagName = typeof t === 'string' ? t : (t as { name?: string })?.name
        const tagId = typeof t === 'object' && t?.id ? Number(t.id) : undefined
        if (tagName && tagName.trim()) {
          const clean = tagName.trim()
          skillCountMap.set(clean, (skillCountMap.get(clean) || 0) + 1)
          if (tagId && !tagIdMap.has(clean)) {
            tagIdMap.set(clean, tagId)
          }
        }
      }
    }
  }

  // 2. Read stored custom tags from localStorage
  let storedTags: TagWithCountDto[] = []
  if (typeof window !== 'undefined') {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEYS.TAGS)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) {
          storedTags = parsed
            .map((item, idx) => {
              const name = String(item.name || '').trim()
              const explicitId = tagIdMap.get(name)
              const id = explicitId || Number(item.id) || Date.now() + idx
              return {
                id,
                name,
                skill_count: skillCountMap.get(name) || 0,
                updated_at: item.updated_at || Date.now(),
              }
            })
            .filter((t) => t.name.length > 0)
        }
      }
    } catch {
      // ignore
    }
  }

  // 3. Merge with any tags currently attached to skills
  const existingNames = new Set(storedTags.map((t) => t.name.toLowerCase()))
  const mergedTags = [...storedTags]
  let nextId = storedTags.reduce((max, t) => Math.max(max, t.id || 0), 100) + 1

  for (const [tagName, count] of skillCountMap.entries()) {
    if (!existingNames.has(tagName.toLowerCase())) {
      const explicitId = tagIdMap.get(tagName)
      mergedTags.push({
        id: explicitId || nextId++,
        name: tagName,
        skill_count: count,
        updated_at: Date.now(),
      })
      existingNames.add(tagName.toLowerCase())
    }
  }

  if (mergedTags.length === 0) {
    return DEFAULT_INITIAL_TAGS
  }

  return mergedTags.map((t) => ({
    ...t,
    skill_count: skillCountMap.get(t.name) || 0,
  }))
}

export function saveWebTags(tags: TagWithCountDto[]): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEYS.TAGS, JSON.stringify(tags))
    triggerAutoGistSync()
  } catch {
    // ignore
  }
}

export function getWebToolStatus(): ToolStatusDto {
  return {
    tools: BUILTIN_TOOLS,
    installed: BUILTIN_TOOLS.map((t) => t.key),
    newly_installed: [],
  }
}

export function getWebToolConfig(): ToolConfigDto {
  return {
    disabled_builtin_tools: [],
    custom_tools: [],
  }
}

export function getWebAutoUpdateConfig(): AutoUpdateConfigDto {
  return {
    enabled: false,
    interval_hours: 24,
    schedule_type: 'daily',
    interval_value: 24,
    interval_unit: 'hours',
    daily_time: '03:00',
    local_skill_count: 0,
    protected_local_skill_count: 0,
    task_registered: false,
    task_status_detail: 'Web 在线体验模式 (自动同步可在桌面版运行)',
    last_run_at: Date.now(),
    last_started_at: Date.now(),
    last_finished_at: Date.now(),
    last_status: 'idle',
    last_error: null,
    last_checked: 0,
    last_updated: 0,
    last_failed: 0,
    progress: {
      total: 0,
      succeeded: [],
      failed: [],
      running: null,
      pending: [],
    },
  }
}

export async function searchWebSkills(query: string): Promise<OnlineSkillDto[]> {
  const q = query.trim().toLowerCase()
  if (!q) return []
  const featured = getWebFeaturedSkills()
  const matched = featured
    .filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q),
    )
    .map((s) => ({
      name: s.name,
      installs: s.downloads || s.stars || 100,
      source: s.source_url.replace('https://github.com/', ''),
      source_url: s.source_url,
    }))

  return matched
}

function getGithubRawAndCdnCandidates(sourceUrl: string, file: string = 'SKILL.md', skillName: string = ''): string[] {
  const candidates: string[] = []
  if (!sourceUrl || !sourceUrl.includes('github.com')) return candidates

  const clean = sourceUrl.replace(/\.git$/, '').trim()

  // Pattern 1: https://github.com/owner/repo/blob/branch/path or /tree/branch/path
  const branchPathMatch = clean.match(/^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+)\/(?:blob|tree)\/([^/]+)(?:\/(.*))?$/)
  if (branchPathMatch) {
    const owner = branchPathMatch[1]
    const repo = branchPathMatch[2]
    const branch = branchPathMatch[3]
    const subpath = branchPathMatch[4] ? branchPathMatch[4].replace(/\/+$/, '') : ''
    const fullPath = subpath ? `${subpath}/${file}` : file

    candidates.push(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${fullPath}`)
    candidates.push(`https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${fullPath}`)
    return candidates
  }

  // Pattern 2: https://github.com/owner/repo
  const repoMatch = clean.match(/^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+)(?:\/.*)?$/)
  if (repoMatch) {
    const owner = repoMatch[1]
    const repo = repoMatch[2]
    for (const b of ['main', 'master']) {
      // 1. Direct root
      candidates.push(`https://raw.githubusercontent.com/${owner}/${repo}/${b}/${file}`)
      candidates.push(`https://cdn.jsdelivr.net/gh/${owner}/${repo}@${b}/${file}`)

      // 2. Monorepo subfolders (e.g. skills/writing-plans/SKILL.md or writing-plans/SKILL.md)
      if (skillName) {
        candidates.push(`https://raw.githubusercontent.com/${owner}/${repo}/${b}/skills/${skillName}/${file}`)
        candidates.push(`https://cdn.jsdelivr.net/gh/${owner}/${repo}@${b}/skills/${skillName}/${file}`)
        candidates.push(`https://raw.githubusercontent.com/${owner}/${repo}/${b}/${skillName}/${file}`)
        candidates.push(`https://cdn.jsdelivr.net/gh/${owner}/${repo}@${b}/${skillName}/${file}`)
        candidates.push(`https://raw.githubusercontent.com/${owner}/${repo}/${b}/.agents/skills/${skillName}/${file}`)
        candidates.push(`https://cdn.jsdelivr.net/gh/${owner}/${repo}@${b}/.agents/skills/${skillName}/${file}`)
      }
    }
  }

  return candidates
}

export async function fetchWebSkillFiles(_skill: ManagedSkill): Promise<SkillFileEntry[]> {
  return [
    { path: 'SKILL.md', size: 1024 },
    { path: 'README.md', size: 512 },
  ]
}

export async function fetchWebSkillContent(
  skill: ManagedSkill,
  filePath: string,
): Promise<string> {
  const file = filePath.split('/').pop() || 'SKILL.md'

  // 0. Instant offline cache for local / bundled skills
  if (file === 'SKILL.md' && LOCAL_SKILLS_CACHE[skill.name]) {
    return LOCAL_SKILLS_CACHE[skill.name]
  }

  const candidateUrls: string[] = []

  // 1. Upstream source URL candidates (Raw + jsDelivr CDN)
  const sourceUrl = skill.source_ref || ''
  if (sourceUrl && sourceUrl.includes('github.com')) {
    candidateUrls.push(...getGithubRawAndCdnCandidates(sourceUrl, file, skill.name))
  }

  // 2. Personal repository candidates for custom / local skills
  candidateUrls.push(
    `https://raw.githubusercontent.com/shinelee2014/skills-hub/main/skills/${encodeURIComponent(skill.name)}/${file}`,
    `https://cdn.jsdelivr.net/gh/shinelee2014/skills-hub@main/skills/${encodeURIComponent(skill.name)}/${file}`,
    `https://raw.githubusercontent.com/shinelee2014/skills-hub/main/skills/${encodeURIComponent(skill.name)}/SKILL.md`,
    `https://cdn.jsdelivr.net/gh/shinelee2014/skills-hub@main/skills/${encodeURIComponent(skill.name)}/SKILL.md`
  )

  for (const url of candidateUrls) {
    try {
      const res = await fetch(url)
      if (res.ok) {
        const text = await res.text()
        if (text && text.trim().length > 0 && !text.includes('<!DOCTYPE html>')) {
          return text
        }
      }
    } catch {
      // try next candidate
    }
  }

  const categoryBadge = skill.category_name ? `${skill.category_icon || '🏷️'} ${skill.category_name}` : '通用'
  const tagList = skill.tags?.map((t) => `\`${t.name}\``).join(' ') || ''

  return `---
name: ${skill.name}
description: ${skill.description || 'AI Agent Skill'}
category: ${skill.category || 'general'}
---

# ${skill.category_icon || '⚡'} ${skill.name}

> ${skill.description || 'AI 智能体专属技能，提供自动化指令与工作流支持。'}

### 📌 技能属性
- **所属分类**：${categoryBadge}
- **标签属性**：${tagList || '无'}
- **仓库来源**：[${skill.source_ref || skill.name}](${skill.source_ref || '#'})
- **存储路径**：\`${skill.central_path}\`

---

### 🚀 Agent 提示词调用规范

在与 AI 助理对话时，可直接通过以下方式调用本技能规范：

\`\`\`markdown
请加载并严格遵循 @${skill.name} 的核心规范与检查清单，为我执行以下任务：
[在此输入您的具体需求或输入材料]
\`\`\`

---

### 💻 客户端安装与同步命令

\`\`\`bash
# 1. Antigravity / Gemini CLI 一键安装
npx -y skills add ${skill.source_ref || skill.name}

# 2. Claude Code CLI 安装
claude skill add ${skill.source_ref || skill.name}

# 3. 本地 Git 源码克隆
git clone ${skill.source_ref || 'https://github.com/shinelee2014/skills-hub'}
\`\`\`
`
}

export function installWebSkill(
  name: string,
  sourceUrl: string,
  tagIds: number[],
  scope: 'global' | 'project',
  syncTools: string[],
): InstallResultDto {
  const currentSkills = getWebManagedSkills()
  const newId = `web-skill-${Date.now()}`
  const allTags = getWebTags()
  const skillTags = allTags.filter((t) => tagIds.includes(t.id))

  // Find summary from featured skills if available
  const featured = getWebFeaturedSkills().find(
    (f) => f.name.toLowerCase() === name.toLowerCase(),
  )
  const description = featured?.summary || `Installed from ${sourceUrl}`

  const newSkill: ManagedSkill = {
    id: newId,
    name,
    description,
    source_type: 'git',
    source_ref: sourceUrl,
    central_path: `~/.skillshub/skills/${name}`,
    created_at: Date.now(),
    updated_at: Date.now(),
    last_sync_at: Date.now(),
    enabled: true,
    status: 'healthy',
    tags: skillTags.length > 0 ? skillTags : [{ id: 1, name: 'Antigravity' }],
    targets: syncTools.map((t) => ({
      tool: t,
      scope,
      mode: 'symlink',
      status: 'synced',
      target_path: `~/.${t}/skills/${name}`,
      synced_at: Date.now(),
    })),
  }

  const filtered = currentSkills.filter((s) => s.name.toLowerCase() !== name.toLowerCase())
  saveWebManagedSkills([newSkill, ...filtered])
  return {
    skill_id: newId,
    name,
    central_path: newSkill.central_path,
    content_hash: 'web-hash',
  }
}

export async function handleWebInvoke<T>(
  command: string,
  args?: Record<string, unknown>,
): Promise<T> {
  switch (command) {
    case 'get_featured_skills':
      return getWebFeaturedSkills() as unknown as T
    case 'get_managed_skills':
      return getWebManagedSkills() as unknown as T
    case 'get_tags':
    case 'get_all_tags':
      return getWebTags() as unknown as T
    case 'get_tool_status':
      return getWebToolStatus() as unknown as T
    case 'get_tool_config':
      return getWebToolConfig() as unknown as T
    case 'get_auto_update_config':
      return getWebAutoUpdateConfig() as unknown as T
    case 'get_central_repo_path':
      return '~/.skillshub/skills (Web LocalStorage)' as unknown as T
    case 'get_recent_projects':
      return ['~/projects/my-agent-app', '~/projects/nextjs-demo'] as unknown as T
    case 'get_git_cache_cleanup_days':
      return 30 as unknown as T
    case 'get_git_cache_ttl_secs':
      return 60 as unknown as T
    case 'get_github_token':
      return getWebGithubToken() as unknown as T
    case 'get_github_proxy_config':
      return { enabled: false, port: 7890, url: '', auto_detected: false } as unknown as T
    case 'get_onboarding_plan':
      return { total_tools_scanned: BUILTIN_TOOLS.length, total_skills_found: 0, groups: [] } as unknown as T
    case 'get_github_release_notes':
      return null as unknown as T
    case 'search_skills_online':
      return (await searchWebSkills((args?.query as string) || '')) as unknown as T
    case 'list_skill_files': {
      const skills = getWebManagedSkills()
      const featured = getWebFeaturedSkills()
      const targetSkill =
        skills.find((s) => s.central_path === args?.centralPath) ||
        featured.find((f) => f.name === (args?.centralPath as string)?.split('/')?.pop())
      const skillObj: ManagedSkill = targetSkill && 'targets' in targetSkill
        ? targetSkill
        : {
            id: 'temp',
            name: (args?.centralPath as string)?.split('/')?.pop() || 'skill',
            source_type: 'git',
            source_ref: targetSkill ? (targetSkill as FeaturedSkillDto).source_url : '',
            central_path: (args?.centralPath as string) || '',
            created_at: Date.now(),
            updated_at: Date.now(),
            enabled: true,
            status: 'healthy',
            tags: [],
            targets: [],
          }
      return (await fetchWebSkillFiles(skillObj)) as unknown as T
    }
    case 'read_skill_file': {
      const skills = getWebManagedSkills()
      const featured = getWebFeaturedSkills()
      const skillName = (args?.centralPath as string)?.split('/')?.pop() || ''
      const targetSkill =
        skills.find((s) => s.central_path === args?.centralPath || s.name === skillName) ||
        featured.find((f) => f.name === skillName)
      const skillObj: ManagedSkill = targetSkill && 'targets' in targetSkill
        ? targetSkill
        : {
            id: 'temp',
            name: skillName || 'skill',
            description: targetSkill ? (targetSkill as FeaturedSkillDto).summary : '',
            source_type: 'git',
            source_ref: targetSkill ? (targetSkill as FeaturedSkillDto).source_url : '',
            central_path: (args?.centralPath as string) || '',
            created_at: Date.now(),
            updated_at: Date.now(),
            enabled: true,
            status: 'healthy',
            tags: [],
            targets: [],
          }
      return (await fetchWebSkillContent(
        skillObj,
        (args?.filePath as string) || 'SKILL.md',
      )) as unknown as T
    }
    case 'list_git_skills_cmd': {
      const url = (args?.repoUrl as string) || ''
      const name = url.split('/').pop()?.replace(/\.git$/, '') || 'new-skill'
      return [
        {
          name,
          description: `Skill from ${url}`,
          subpath: '',
        },
      ] as unknown as T
    }
    case 'install_git_selection': {
      const url = (args?.repoUrl as string) || ''
      const name = (args?.name as string) || url.split('/').pop()?.replace(/\.git$/, '') || 'new-skill'
      return installWebSkill(name, url, [], 'global', ['cursor', 'claude_code', 'antigravity']) as unknown as T
    }
    case 'set_github_token': {
      const token = (args?.token as string) || ''
      saveWebGithubToken(token)
      return null as unknown as T
    }
    case 'sync_skill_to_tool':
    case 'unsync_skill_from_tool':
    case 'set_central_repo_path':
    case 'set_git_cache_cleanup_days':
    case 'set_git_cache_ttl_secs':
    case 'set_github_proxy_config':
    case 'set_tool_config':
    case 'set_auto_update_config':
    case 'trigger_auto_update_task_now_cmd':
    case 'clear_git_cache_now':
    case 'save_recent_project':
      return null as unknown as T
      return null as unknown as T
    case 'delete_managed_skill': {
      const skillId = args?.skillId as string
      const current = getWebManagedSkills()
      saveWebManagedSkills(current.filter((s) => s.id !== skillId))
      return null as unknown as T
    }
    case 'set_skill_enabled': {
      const skillId = args?.skillId as string
      const enabled = Boolean(args?.enabled)
      const current = getWebManagedSkills()
      saveWebManagedSkills(
        current.map((s) => (s.id === skillId ? { ...s, enabled } : s)),
      )
      return null as unknown as T
    }
    case 'create_tag': {
      const name = ((args?.name as string) || '').trim()
      if (!name) return null as unknown as T
      const tags = getWebTags()
      const existing = tags.find((t) => t.name.toLowerCase() === name.toLowerCase())
      if (existing) {
        return existing as unknown as T
      }
      const newTag: TagWithCountDto = {
        id: Date.now(),
        name,
        skill_count: 0,
        updated_at: Date.now(),
      }
      const updated = [...tags, newTag]
      saveWebTags(updated)
      return newTag as unknown as T
    }
    case 'rename_tag': {
      const tagId = Number(args?.tagId ?? args?.id)
      const name = ((args?.name as string) || '').trim()
      const tags = getWebTags()
      const targetTag = tags.find((t) => t.id === tagId)
      const oldName = targetTag?.name || ''
      const updatedTags = tags.map((t) =>
        t.id === tagId ? { ...t, name, updated_at: Date.now() } : t,
      )
      saveWebTags(updatedTags)

      if (oldName && name) {
        const skills = getWebManagedSkills()
        const updatedSkills = skills.map((s) => {
          if (Array.isArray(s.tags) && s.tags.some((t) => t.id === tagId || t.name === oldName)) {
            return {
              ...s,
              tags: s.tags.map((t) =>
                t.id === tagId || t.name === oldName ? { ...t, id: tagId, name } : t,
              ),
            }
          }
          return s
        })
        saveWebManagedSkills(updatedSkills)
      }
      return { id: tagId, name } as unknown as T
    }
    case 'delete_tag': {
      const tagId = Number(args?.tagId ?? args?.id)
      const tags = getWebTags()
      const targetTag = tags.find((t) => t.id === tagId)
      const tagName = targetTag?.name || ''
      saveWebTags(tags.filter((t) => t.id !== tagId))

      const skills = getWebManagedSkills()
      const updatedSkills = skills.map((s) => ({
        ...s,
        tags: Array.isArray(s.tags)
          ? s.tags.filter((t) => t.id !== tagId && t.name !== tagName)
          : [],
      }))
      saveWebManagedSkills(updatedSkills)
      return null as unknown as T
    }
    case 'set_skill_tags': {
      const skillId = args?.skillId as string
      const tagIds = (args?.tagIds as number[]) || []
      const tags = getWebTags()
      const skillTags = tags.filter((t) => tagIds.includes(t.id))
      const current = getWebManagedSkills()
      saveWebManagedSkills(
        current.map((s) => (s.id === skillId ? { ...s, tags: skillTags } : s)),
      )
      return null as unknown as T
    }
    default:
      console.warn(`[WebAdapter] Unhandled command: ${command}`, args)
      return null as unknown as T
  }
}

const GITHUB_TOKEN_STORAGE_KEY = 'skills_hub_github_token'

export const getWebGithubToken = (): string => {
  if (typeof window === 'undefined') return ''
  try {
    const direct = window.localStorage.getItem(GITHUB_TOKEN_STORAGE_KEY)
    if (direct && direct.trim()) return direct.trim()
    const gist = getGistSyncMeta()
    if (gist.token && gist.token.trim()) return gist.token.trim()
  } catch {
    // ignore
  }
  return ''
}

export const saveWebGithubToken = (token: string) => {
  if (typeof window === 'undefined') return
  try {
    const clean = token ? token.trim() : ''
    window.localStorage.setItem(GITHUB_TOKEN_STORAGE_KEY, clean)
    saveGistSyncMeta({ token: clean })
  } catch {
    // ignore
  }
}

export type GistSyncMeta = {
  token: string
  gistId: string | null
  gistUrl: string | null
  lastSyncedAt: string | null
  autoSync: boolean
}

const GIST_SYNC_KEY = 'skills_hub_gist_sync'
const GIST_FILENAME = 'skills-hub-sync.json'

export const getGistSyncMeta = (): GistSyncMeta => {
  if (typeof window === 'undefined') {
    return { token: '', gistId: null, gistUrl: null, lastSyncedAt: null, autoSync: false }
  }
  try {
    const raw = window.localStorage.getItem(GIST_SYNC_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // ignore
  }
  return { token: '', gistId: null, gistUrl: null, lastSyncedAt: null, autoSync: false }
}

export const saveGistSyncMeta = (meta: Partial<GistSyncMeta>): GistSyncMeta => {
  const current = getGistSyncMeta()
  const next = { ...current, ...meta }
  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(GIST_SYNC_KEY, JSON.stringify(next))
    } catch {
      // ignore
    }
  }
  return next
}

export async function pushToGist(token: string): Promise<{ gistId: string; gistUrl: string; updatedAt: string }> {
  if (!token || !token.trim()) {
    throw new Error('GitHub Token 为空，请先填写 Token')
  }
  const cleanToken = token.trim()
  const skills = getWebManagedSkills()
  const tags = getWebTags()
  let skillScopeState: unknown = {}
  try {
    const rawScope = window.localStorage.getItem('skills_hub_skill_scope_state_v1')
    if (rawScope) skillScopeState = JSON.parse(rawScope)
  } catch {
    // ignore
  }

  const payload = {
    version: '1.0',
    synced_at: new Date().toISOString(),
    skills,
    managed_skills: skills,
    tags,
    skill_scope_state: skillScopeState,
  }

  const content = JSON.stringify(payload, null, 2)
  const meta = getGistSyncMeta()

  let gistId = meta.gistId
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${cleanToken}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
  }

  if (gistId) {
    try {
      const updateRes = await fetch(`https://api.github.com/gists/${gistId}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
          description: 'Skills Hub Cloud Sync (Private)',
          files: {
            [GIST_FILENAME]: {
              content,
            },
          },
        }),
      })
      if (updateRes.ok) {
        const data = await updateRes.json()
        const gistUrl = data.html_url || `https://gist.github.com/${gistId}`
        saveGistSyncMeta({
          token: cleanToken,
          gistId,
          gistUrl,
          lastSyncedAt: new Date().toISOString(),
        })
        return { gistId, gistUrl, updatedAt: new Date().toISOString() }
      }
    } catch {
      // fallback to search
    }
  }

  // Search existing Gists
  const listRes = await fetch('https://api.github.com/gists?per_page=100', { headers })
  if (!listRes.ok) {
    if (listRes.status === 401) {
      throw new Error('GitHub Token 无效或未勾选 gist 权限 (Bad credentials)')
    }
    const errJson = await listRes.json().catch(() => ({}))
    throw new Error(errJson.message || `GitHub API 请求失败: ${listRes.status}`)
  }

  const gists: Array<{ id: string; html_url: string; files: Record<string, unknown> }> = await listRes.json()
  const found = gists.find((g) => Boolean(g.files && g.files[GIST_FILENAME]))

  if (found) {
    gistId = found.id
    const updateRes = await fetch(`https://api.github.com/gists/${gistId}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        description: 'Skills Hub Cloud Sync (Private)',
        files: {
          [GIST_FILENAME]: {
            content,
          },
        },
      }),
    })
    if (!updateRes.ok) {
      const errJson = await updateRes.json().catch(() => ({}))
      throw new Error(errJson.message || `更新 Gist 失败: ${updateRes.status}`)
    }
    const data = await updateRes.json()
    const gistUrl = data.html_url || found.html_url
    saveGistSyncMeta({
      token: cleanToken,
      gistId,
      gistUrl,
      lastSyncedAt: new Date().toISOString(),
    })
    return { gistId, gistUrl, updatedAt: new Date().toISOString() }
  }

  // Create new private Gist
  const createRes = await fetch('https://api.github.com/gists', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      description: 'Skills Hub Cloud Sync (Private)',
      public: false,
      files: {
        [GIST_FILENAME]: {
          content,
        },
      },
    }),
  })

  if (!createRes.ok) {
    const errJson = await createRes.json().catch(() => ({}))
    throw new Error(errJson.message || `创建 Gist 失败: ${createRes.status}`)
  }

  const created = await createRes.json()
  saveGistSyncMeta({
    token: cleanToken,
    gistId: created.id,
    gistUrl: created.html_url,
    lastSyncedAt: new Date().toISOString(),
  })
  return { gistId: created.id, gistUrl: created.html_url, updatedAt: new Date().toISOString() }
}

export async function pullFromGist(token: string): Promise<{
  restoredSkillsCount: number
  restoredTagsCount: number
  gistUrl: string
}> {
  if (!token || !token.trim()) {
    throw new Error('GitHub Token 为空，请先填写 Token')
  }
  const cleanToken = token.trim()
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${cleanToken}`,
    'X-GitHub-Api-Version': '2022-11-28',
  }

  const meta = getGistSyncMeta()
  let rawContent: string | null = null
  let gistUrl = meta.gistUrl || ''

  if (meta.gistId) {
    const getRes = await fetch(`https://api.github.com/gists/${meta.gistId}?_t=${Date.now()}`, { headers }).catch(() => null)
    if (getRes && getRes.ok) {
      const data = await getRes.json()
      gistUrl = data.html_url
      if (data.files && data.files[GIST_FILENAME]) {
        const fileObj = data.files[GIST_FILENAME]
        if (fileObj.truncated && fileObj.raw_url) {
          const rawRes = await fetch(fileObj.raw_url).catch(() => null)
          if (rawRes && rawRes.ok) rawContent = await rawRes.text()
        } else if (fileObj.content) {
          rawContent = fileObj.content
        } else if (fileObj.raw_url) {
          const rawRes = await fetch(fileObj.raw_url).catch(() => null)
          if (rawRes && rawRes.ok) rawContent = await rawRes.text()
        }
      }
    }
  }

  if (!rawContent) {
    const listRes = await fetch(`https://api.github.com/gists?per_page=100&_t=${Date.now()}`, { headers })
    if (!listRes.ok) {
      if (listRes.status === 401) throw new Error('GitHub Token 无效或未勾选 gist 权限')
      throw new Error(`GitHub API 请求失败: ${listRes.status}`)
    }
    const gists: Array<{ id: string; html_url: string; files: Record<string, { content?: string; raw_url?: string; truncated?: boolean }> }> =
      await listRes.json()
    const found = gists.find((g) => Boolean(g.files && g.files[GIST_FILENAME]))
    if (!found) {
      throw new Error('未在您的 GitHub 账号中找到备份 Gist (skills-hub-sync.json)')
    }
    gistUrl = found.html_url
    saveGistSyncMeta({ gistId: found.id, gistUrl: found.html_url })
    const fileObj = found.files[GIST_FILENAME]
    if (fileObj.truncated && fileObj.raw_url) {
      const rawRes = await fetch(fileObj.raw_url).catch(() => null)
      if (rawRes && rawRes.ok) rawContent = await rawRes.text()
    } else if (fileObj.content) {
      rawContent = fileObj.content
    } else if (fileObj.raw_url) {
      const rawRes = await fetch(fileObj.raw_url).catch(() => null)
      if (rawRes && rawRes.ok) rawContent = await rawRes.text()
    }
  }

  if (!rawContent) {
    throw new Error('未能获取到 Gist 备份文件内容')
  }

  const parsed = JSON.parse(rawContent)
  const skills = Array.isArray(parsed.skills)
    ? parsed.skills
    : (Array.isArray(parsed.managed_skills) ? parsed.managed_skills : [])
  const tags = Array.isArray(parsed.tags) ? parsed.tags : []

  if (skills.length > 0) {
    saveWebManagedSkills(skills, true)
  }
  if (tags.length > 0) {
    saveWebTags(tags)
  }
  if (parsed.skill_scope_state && typeof window !== 'undefined') {
    window.localStorage.setItem('skills_hub_skill_scope_state_v1', JSON.stringify(parsed.skill_scope_state))
  }

  saveGistSyncMeta({
    token: cleanToken,
    lastSyncedAt: new Date().toISOString(),
  })

  return {
    restoredSkillsCount: skills.length,
    restoredTagsCount: tags.length,
    gistUrl,
  }
}


