import { memo, useState, useEffect, useCallback } from 'react'
import { MessageCircle } from 'lucide-react'
import type { TFunction } from 'i18next'
import type { ManagedSkill, OnboardingPlan, ToolOption } from './types'
import SkillCard from './SkillCard'

const PAGE_SIZE = 40

type GithubInfo = {
  label: string
  href: string
}

type SkillsListProps = {
  plan: OnboardingPlan | null
  visibleSkills: ManagedSkill[]
  installedTools: ToolOption[]
  loading: boolean
  bulkMode: boolean
  selectedSkillIds: string[]
  viewMode: 'list' | 'cards'
  getGithubInfo: (url: string | null | undefined) => GithubInfo | null
  getSkillSourceLabel: (skill: ManagedSkill) => string
  formatRelative: (ms: number | null | undefined) => string
  onReviewImport: () => void
  onUpdateSkill: (skill: ManagedSkill) => void
  onDeleteSkill: (skillId: string) => void
  onToggleSkillEnabled: (skill: ManagedSkill) => void
  onToggleTool: (skill: ManagedSkill, toolId: string) => void
  onToggleStar?: (skill: ManagedSkill) => void
  onOpenScope: (skill: ManagedSkill) => void
  onOpenDetail: (skill: ManagedSkill) => void
  onEditTags: (skill: ManagedSkill) => void
  onToggleBulkSelection: (skillId: string) => void
  getSkillScope: (skill: ManagedSkill) => 'global' | 'project'
  getSkillProjects: (skill: ManagedSkill) => string[]
  t: TFunction
}

const SkillsList = ({
  plan,
  visibleSkills,
  installedTools,
  loading,
  bulkMode,
  selectedSkillIds,
  viewMode,
  getGithubInfo,
  getSkillSourceLabel,
  formatRelative,
  onReviewImport,
  onUpdateSkill,
  onDeleteSkill,
  onToggleSkillEnabled,
  onToggleTool,
  onToggleStar,
  onOpenScope,
  onOpenDetail,
  onEditTags,
  onToggleBulkSelection,
  getSkillScope,
  getSkillProjects,
  t,
}: SkillsListProps) => {
  const selectedSkillSet = new Set(selectedSkillIds)
  const [displayCount, setDisplayCount] = useState(PAGE_SIZE)

  useEffect(() => {
    setDisplayCount(PAGE_SIZE)
  }, [visibleSkills])

  const handleScroll = useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const target = event.currentTarget
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 350) {
        setDisplayCount((prev) => (prev < visibleSkills.length ? prev + PAGE_SIZE : prev))
      }
    },
    [visibleSkills.length],
  )

  const renderedSkills = visibleSkills.slice(0, displayCount)

  return (
    <div
      className="skills-list"
      role="region"
      tabIndex={0}
      aria-label={t('navMySkills')}
      onScroll={handleScroll}
    >
      {plan && plan.total_skills_found > 0 ? (
        <div className="discovered-banner">
          <div className="banner-left">
            <div className="banner-icon">
              <MessageCircle size={18} />
            </div>
            <div className="banner-content">
              <div className="banner-title">{t('discoveredTitle')}</div>
              <div className="banner-subtitle">
                {t('discoveredCount', { count: plan.total_skills_found })}
              </div>
            </div>
          </div>
          <button
            className="btn btn-warning"
            type="button"
            onClick={onReviewImport}
            disabled={loading}
          >
            {t('reviewImport')}
          </button>
        </div>
      ) : null}

      {visibleSkills.length === 0 ? (
        <div className="empty">{t('skillsEmpty')}</div>
      ) : (
        <>
          <div className={`skills-table ${viewMode}-view`}>
            {renderedSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                installedTools={installedTools}
                loading={loading}
                bulkMode={bulkMode}
                bulkSelected={selectedSkillSet.has(skill.id)}
                getGithubInfo={getGithubInfo}
                getSkillSourceLabel={getSkillSourceLabel}
                formatRelative={formatRelative}
                onUpdate={onUpdateSkill}
                onDelete={onDeleteSkill}
                onToggleEnabled={onToggleSkillEnabled}
                onToggleTool={onToggleTool}
                onToggleStar={onToggleStar}
                onOpenScope={onOpenScope}
                onOpenDetail={onOpenDetail}
                onEditTags={onEditTags}
                onToggleBulkSelection={onToggleBulkSelection}
                getSkillScope={getSkillScope}
                getSkillProjects={getSkillProjects}
                t={t}
              />
            ))}
          </div>

          {displayCount < visibleSkills.length && (
            <div style={{ textAlign: 'center', padding: '16px 0 24px' }}>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setDisplayCount((prev) => prev + PAGE_SIZE)}
              >
                {t('showMore') || '加载更多...'} ({displayCount} / {visibleSkills.length})
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default memo(SkillsList)
