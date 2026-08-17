import { memo, type PointerEvent } from 'react'
import {
  CircleCheck,
  ChevronLeft,
  Cloud,
  Compass,
  Download,
  Github,
  Layers3,
  LoaderCircle,
  RefreshCw,
  Settings,
  Sparkles,
  Tag,
  Wrench,
} from 'lucide-react'
import type { TFunction } from 'i18next'

type ManagementTab = 'tags' | 'tools' | 'updates'

type HeaderProps = {
  activeView: 'myskills' | 'explore' | 'detail' | 'settings' | 'manage'
  managementTab: ManagementTab
  skillCount: number
  tagCount: number
  toolCount: number
  updateCount: number
  appVersion: string
  updateAvailableVersion: string | null
  updateChecking: boolean
  updateInstalling: boolean
  updateDone: boolean
  collapsed: boolean
  gistConnected?: boolean
  gistLastSyncedAt?: string | null
  cloudSyncing?: boolean
  onToggleCollapsed: () => void
  onOpenSettings: () => void
  onOpenBundles?: () => void
  onOpenUpdate: () => void
  onViewChange: (view: 'myskills' | 'explore' | 'manage') => void
  onManagementTabChange: (tab: ManagementTab) => void
  t: TFunction
}

const isTauri =
  typeof window !== 'undefined' &&
  Boolean(
    (window as { __TAURI__?: unknown }).__TAURI__ ||
      (window as { __TAURI_INTERNALS__?: unknown }).__TAURI_INTERNALS__,
  )

const startWindowDrag = (event: PointerEvent<HTMLElement>) => {
  if (!isTauri) return
  if (event.button !== 0 || !event.isPrimary) return
  const target = event.target as HTMLElement
  if (target.closest('button, input, select, textarea, a, [role="button"]')) return
  event.preventDefault()
  void import('@tauri-apps/api/window')
    .then(({ getCurrentWindow }) => getCurrentWindow().startDragging())
    .catch(() => undefined)
}

const Header = ({
  activeView,
  managementTab,
  skillCount,
  tagCount,
  toolCount,
  updateCount,
  appVersion,
  updateAvailableVersion,
  updateChecking,
  updateInstalling,
  updateDone,
  collapsed,
  gistConnected,
  gistLastSyncedAt,
  cloudSyncing,
  onToggleCollapsed,
  onOpenSettings,
  onOpenBundles,
  onOpenUpdate,
  onViewChange,
  onManagementTabChange,
  t,
}: HeaderProps) => (
  <>
    <div
      className="window-titlebar"
      data-tauri-drag-region
      onPointerDown={startWindowDrag}
    >
      {isTauri ? (
        <div className="traffic-lights" aria-hidden="true" data-tauri-drag-region>
          <span className="traffic-light red" data-tauri-drag-region />
          <span className="traffic-light yellow" data-tauri-drag-region />
          <span className="traffic-light green" data-tauri-drag-region />
        </div>
      ) : (
        <div className="web-status-badge" style={{ display: 'flex', alignItems: 'center', gap: 6, paddingLeft: 12 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
          <span style={{ fontSize: 12, fontWeight: 500, opacity: 0.85 }}>Online Web</span>
        </div>
      )}
      <strong data-tauri-drag-region style={{ marginLeft: isTauri ? undefined : 8 }}>{t('appName')}</strong>
      {appVersion ? (
        <div className="titlebar-version-status" data-tauri-drag-region>
          <span data-tauri-drag-region>v{appVersion}</span>
          {updateChecking ? (
            <LoaderCircle
              className="titlebar-update-spinner"
              size={13}
              aria-label={t('titlebarUpdate.checking')}
            />
          ) : updateAvailableVersion ? (
            <button
              className={`titlebar-update-action${updateDone ? ' done' : ''}`}
              type="button"
              disabled={updateInstalling}
              onClick={onOpenUpdate}
              aria-label={t(
                updateDone ? 'titlebarUpdate.installed' : 'titlebarUpdate.available',
                { version: updateAvailableVersion },
              )}
              title={t(
                updateDone ? 'titlebarUpdate.installed' : 'titlebarUpdate.available',
                { version: updateAvailableVersion },
              )}
            >
              {updateInstalling ? (
                <LoaderCircle className="titlebar-update-spinner" size={13} />
              ) : updateDone ? (
                <CircleCheck size={13} />
              ) : (
                <Download size={13} />
              )}
            </button>
          ) : null}
        </div>
      ) : null}

      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, paddingRight: 16 }}>
        {onOpenBundles && (
          <button
            type="button"
            onClick={onOpenBundles}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 12,
              fontWeight: 500,
              color: 'var(--accent-primary, #2563eb)',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.25)',
              borderRadius: 6,
              padding: '3px 10px',
              cursor: 'pointer',
            }}
          >
            <Sparkles size={13} className="text-amber-500" />
            <span>场景套件</span>
          </button>
        )}

        <button
          type="button"
          onClick={onOpenSettings}
          title={gistConnected ? `私有 Gist 已连接 (上次同步: ${gistLastSyncedAt ? new Date(gistLastSyncedAt).toLocaleTimeString() : '刚刚'})` : '点击配置 Gist 云端同步'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 12,
            color: gistConnected ? 'var(--text-secondary)' : 'var(--text-tertiary)',
            background: 'var(--bg-tag, rgba(128,128,128,0.12))',
            border: '1px solid var(--border-color, rgba(128,128,128,0.2))',
            borderRadius: 6,
            padding: '3px 8px',
            cursor: 'pointer',
          }}
        >
          {cloudSyncing ? (
            <>
              <RefreshCw size={13} className="animate-spin text-blue-500" style={{ animation: 'spin 1s linear infinite' }} />
              <span>云端同步中...</span>
            </>
          ) : (
            <>
              <Cloud size={13} color={gistConnected ? '#10b981' : 'currentColor'} />
              <span>{gistConnected ? '云端已同步' : '未连接云端'}</span>
            </>
          )}
        </button>

        {!isTauri && (
          <a
            href="https://github.com/shinelee2014/skills-hub"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 12,
              color: 'inherit',
              textDecoration: 'none',
              opacity: 0.85,
              padding: '3px 8px',
              borderRadius: 6,
              background: 'var(--bg-tag, rgba(128,128,128,0.12))',
              border: '1px solid var(--border-color, rgba(128,128,128,0.2))',
            }}
          >
            <Github size={13} />
            <span>GitHub 源码</span>
          </a>
        )}
      </div>
    </div>
    <aside className={`skills-sidebar${collapsed ? ' collapsed' : ''}`}>
      <div
        className="sidebar-brand"
        data-tauri-drag-region
        onPointerDown={startWindowDrag}
      >
        <div className="sidebar-logo" data-tauri-drag-region aria-hidden="true">
          <span className="sidebar-logo-mark" data-tauri-drag-region />
        </div>
        <div className="sidebar-brand-copy" data-tauri-drag-region>
          <strong data-tauri-drag-region>{t('appName')}</strong>
          <span data-tauri-drag-region>{t('workspaceSubtitle')}</span>
        </div>
        <button
          className="sidebar-collapse"
          type="button"
          onClick={onToggleCollapsed}
          aria-label={collapsed ? t('sidebar.expand') : t('sidebar.collapse')}
          title={collapsed ? t('sidebar.expand') : t('sidebar.collapse')}
        >
          <ChevronLeft size={collapsed ? 13 : 16} />
        </button>
      </div>

      <div className="sidebar-section-label">{t('workspace')}</div>
      <nav className="sidebar-nav" aria-label={t('workspace')}>
        <button
          className={activeView === 'myskills' || activeView === 'detail' ? 'active' : ''}
          type="button"
          onClick={() => onViewChange('myskills')}
          title={collapsed ? t('navMySkills') : undefined}
        >
          <Layers3 size={18} />
          <span>{t('navMySkills')}</span>
          <em>{skillCount}</em>
        </button>
        <button
          className={activeView === 'explore' ? 'active' : ''}
          type="button"
          onClick={() => onViewChange('explore')}
          title={collapsed ? t('addSkills') : undefined}
        >
          <Compass size={18} />
          <span>{t('addSkills')}</span>
        </button>
      </nav>

      <div className="sidebar-section-label">{t('navManageCenter')}</div>
      <nav className="sidebar-nav" aria-label={t('navManageCenter')}>
        <button
          className={activeView === 'manage' && managementTab === 'tags' ? 'active' : ''}
          type="button"
          onClick={() => onManagementTabChange('tags')}
          title={collapsed ? t('manageTabs.tags') : undefined}
        >
          <Tag size={18} />
          <span>{t('manageTabs.tags')}</span>
          <em>{tagCount}</em>
        </button>
        <button
          className={activeView === 'manage' && managementTab === 'tools' ? 'active' : ''}
          type="button"
          onClick={() => onManagementTabChange('tools')}
          title={collapsed ? t('manageTabs.tools') : undefined}
        >
          <Wrench size={18} />
          <span>{t('manageTabs.tools')}</span>
          <em>{toolCount}</em>
        </button>
        <button
          className={activeView === 'manage' && managementTab === 'updates' ? 'active' : ''}
          type="button"
          onClick={() => onManagementTabChange('updates')}
          title={collapsed ? t('manageTabs.updates') : undefined}
        >
          <RefreshCw size={18} />
          <span>{t('manageTabs.updates')}</span>
          <em>{updateCount}</em>
        </button>
      </nav>

      <div className="sidebar-spacer" />
      <button
        className={`sidebar-settings${activeView === 'settings' ? ' active' : ''}`}
        type="button"
        onClick={onOpenSettings}
        title={collapsed ? t('settings') : undefined}
      >
        <Settings size={18} />
        <span>{t('settings')}</span>
      </button>
    </aside>
  </>
)

export default memo(Header)
