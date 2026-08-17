import rawFeaturedSkills from '../featured-skills.json'
import rawInitialSkills from './initial-managed-skills.json'
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

export function getWebFeaturedSkills(): FeaturedSkillDto[] {
  const data = rawFeaturedSkills as { skills: FeaturedSkillDto[] }
  return data.skills || []
}

export function getWebManagedSkills(): ManagedSkill[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.SKILLS)
    if (raw) {
      const parsed = JSON.parse(raw) as ManagedSkill[]
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch {
    // ignore
  }
  const initial = (rawInitialSkills as unknown as ManagedSkill[]) || []
  saveWebManagedSkills(initial)
  return initial
}

export function saveWebManagedSkills(skills: ManagedSkill[]): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills))
  } catch {
    // ignore
  }
}

export function getWebTags(): TagWithCountDto[] {
  if (typeof window === 'undefined') return DEFAULT_INITIAL_TAGS
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.TAGS)
    if (raw) {
      const parsed = JSON.parse(raw) as TagWithCountDto[]
      const managed = getWebManagedSkills()
      return parsed.map((t) => ({
        ...t,
        skill_count: managed.filter((s) => s.tags?.some((st) => st.id === t.id)).length,
      }))
    }
  } catch {
    // ignore
  }
  return DEFAULT_INITIAL_TAGS
}

export function saveWebTags(tags: TagWithCountDto[]): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEYS.TAGS, JSON.stringify(tags))
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

function normalizeRawGithubUrl(url: string, file: string = 'SKILL.md'): string {
  let clean = url.replace(/\.git$/, '').trim()
  if (clean.includes('github.com')) {
    clean = clean.replace('github.com', 'raw.githubusercontent.com')
    clean = clean.replace('/tree/', '/')
    clean = clean.replace('/blob/', '/')
    return `${clean.replace(/\/+$/, '')}/${file}`
  }
  return ''
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
  const sourceUrl = skill.source_ref || ''
  if (sourceUrl) {
    const rawUrl = normalizeRawGithubUrl(sourceUrl, filePath)
    if (rawUrl) {
      try {
        const res = await fetch(rawUrl)
        if (res.ok) {
          return await res.text()
        }
      } catch {
        // fallback
      }
    }
  }

  return `---
name: ${skill.name}
description: ${skill.description || 'AI Agent Skill'}
---

# ${skill.name}

${skill.description || 'No description provided.'}

## Overview

This skill is managed in Skills Hub.

### Source
- Repository: [${skill.source_ref || skill.name}](${skill.source_ref || '#'})
- Central Path: \`${skill.central_path}\`

### Quick Install Commands

\`\`\`bash
# Antigravity / Gemini CLI
npx -y skills add ${skill.source_ref || skill.name}

# Claude Code
claude skill add ${skill.source_ref || skill.name}

# Cursor (.cursor/skills)
git clone ${skill.source_ref || 'https://github.com/...'} ~/.cursor/skills/${skill.name}
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

  const newSkill: ManagedSkill = {
    id: newId,
    name,
    description: `Installed from ${sourceUrl}`,
    source_type: 'git',
    source_ref: sourceUrl,
    central_path: `~/.skillshub/skills/${name}`,
    created_at: Date.now(),
    updated_at: Date.now(),
    last_sync_at: Date.now(),
    enabled: true,
    status: 'healthy',
    tags: skillTags,
    targets: syncTools.map((t) => ({
      tool: t,
      scope,
      mode: 'symlink',
      status: 'synced',
      target_path: `~/.${t}/skills/${name}`,
      synced_at: Date.now(),
    })),
  }

  saveWebManagedSkills([newSkill, ...currentSkills])
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
      const name = (args?.name as string) || ''
      const tags = getWebTags()
      const newTag: TagWithCountDto = {
        id: Date.now(),
        name,
        skill_count: 0,
        updated_at: Date.now(),
      }
      saveWebTags([...tags, newTag])
      return newTag as unknown as T
    }
    case 'rename_tag': {
      const id = args?.id as number
      const name = (args?.name as string) || ''
      const tags = getWebTags()
      const updated = tags.map((t) => (t.id === id ? { ...t, name, updated_at: Date.now() } : t))
      saveWebTags(updated)
      return null as unknown as T
    }
    case 'delete_tag': {
      const id = args?.id as number
      const tags = getWebTags()
      saveWebTags(tags.filter((t) => t.id !== id))
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
  const skills = Array.isArray(parsed.skills) ? parsed.skills : []
  const tags = Array.isArray(parsed.tags) ? parsed.tags : []

  saveWebManagedSkills(skills)
  saveWebTags(tags)
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


