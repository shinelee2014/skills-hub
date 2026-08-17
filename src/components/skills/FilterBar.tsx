import { memo, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpDown, Check, CheckSquare, ChevronDown, LayoutGrid, List, RotateCcw, Search, Tags, X } from 'lucide-react'
import type { TFunction } from 'i18next'
import type { TagWithCountDto } from './types'

type FilterBarProps = {
  sortBy: 'updated' | 'name'
  searchQuery: string
  scopeFilter: 'all' | 'global' | 'project'
  tags: TagWithCountDto[]
  selectedTagIds: number[]
  includeUntagged: boolean
  untaggedCount: number
  totalCount: number
  bulkMode: boolean
  bulkSelectedCount: number
  viewMode: 'list' | 'cards'
  onSortChange: (value: 'updated' | 'name') => void
  onSearchChange: (value: string) => void
  onScopeFilterChange: (value: 'all' | 'global' | 'project') => void
  onToggleTag: (tagId: number) => void
  onToggleUntagged: () => void
  onClearTags: () => void
  onManageTags: () => void
  onToggleBulkMode: () => void
  onViewModeChange: (value: 'list' | 'cards') => void
  t: TFunction
}

const FilterBar = ({
  sortBy,
  searchQuery,
  scopeFilter,
  tags,
  selectedTagIds,
  includeUntagged,
  untaggedCount,
  totalCount,
  bulkMode,
  bulkSelectedCount,
  viewMode,
  onSortChange,
  onSearchChange,
  onScopeFilterChange,
  onToggleTag,
  onToggleUntagged,
  onClearTags,
  onManageTags,
  onToggleBulkMode,
  onViewModeChange,
  t,
}: FilterBarProps) => {
  const [tagMenuOpen, setTagMenuOpen] = useState(false)
  const [tagQuery, setTagQuery] = useState('')
  const tagMenuRef = useRef<HTMLDivElement | null>(null)
  const scopeOptions: { value: 'all' | 'global' | 'project'; label: string }[] = [
    { value: 'all', label: t('scope.all') },
    { value: 'global', label: t('scope.global') },
    { value: 'project', label: t('scope.project') },
  ]
  const selectedTagSet = useMemo(() => new Set(selectedTagIds), [selectedTagIds])
  const selectedCount = selectedTagIds.length + (includeUntagged ? 1 : 0)
  const filteredTags = useMemo(() => {
    const query = tagQuery.trim().toLowerCase()
    if (!query) return tags
    return tags.filter((tag) => tag.name.toLowerCase().includes(query))
  }, [tagQuery, tags])

  useEffect(() => {
    if (!tagMenuOpen) return
    const handlePointerDown = (event: MouseEvent) => {
      if (!tagMenuRef.current?.contains(event.target as Node)) {
        setTagMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [tagMenuOpen])

  const [localSearch, setLocalSearch] = useState(searchQuery)

  useEffect(() => {
    setLocalSearch(searchQuery)
  }, [searchQuery])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearch !== searchQuery) {
        onSearchChange(localSearch)
      }
    }, 150)
    return () => clearTimeout(timer)
  }, [localSearch, onSearchChange, searchQuery])

  return (
    <div className="filter-bar">
      <div className="filter-title">
        {t('allSkills')}（{totalCount}）
      </div>
      <div className="filter-actions">
        <button className="btn btn-secondary sort-btn" type="button">
          {scopeOptions.find((option) => option.value === scopeFilter)?.label ?? t('scope.all')}
          <ChevronDown size={12} />
          <select
            aria-label={t('scope.filterLabel')}
            value={scopeFilter}
            onChange={(event) =>
              onScopeFilterChange(event.target.value as 'all' | 'global' | 'project')
            }
          >
            {scopeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </button>
        <button className="btn btn-secondary sort-btn" type="button">
          <ArrowUpDown size={14} />
          {sortBy === 'updated' ? t('sort.updated') : t('sort.name')}
          <select
            aria-label={t('sort.label')}
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value as 'updated' | 'name')}
          >
            <option value="updated">{t('sort.updated')}</option>
            <option value="name">{t('sort.name')}</option>
          </select>
        </button>
        <button
          className={`btn btn-secondary bulk-btn${bulkMode ? ' active' : ''}`}
          type="button"
          onClick={onToggleBulkMode}
          aria-pressed={bulkMode}
        >
          <CheckSquare size={14} />
          {bulkMode && bulkSelectedCount > 0
            ? t('bulk.selectedCount', { count: bulkSelectedCount })
            : t('bulk.toggleMode')}
        </button>
        <div className="tag-filter-container" ref={tagMenuRef}>
          <div className="tag-filter-btn-group" style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
            <button
              className={`btn btn-secondary tag-filter-btn${selectedCount > 0 ? ' active' : ''}`}
              type="button"
              onClick={() => setTagMenuOpen((prev) => !prev)}
              aria-expanded={tagMenuOpen}
              style={selectedCount > 0 ? { paddingRight: 28 } : undefined}
            >
              <Tags size={14} />
              <span>
                {selectedCount > 0
                  ? t('tagsSelected', { count: selectedCount })
                  : t('tags')}
              </span>
              <ChevronDown size={12} />
            </button>
            {selectedCount > 0 && (
              <button
                type="button"
                className="tag-filter-clear-pill"
                onClick={(e) => {
                  e.stopPropagation()
                  onClearTags()
                  setTagMenuOpen(false)
                }}
                title={t('clearAll') || '清除筛选，恢复默认状态'}
                aria-label="Clear tag filter"
                style={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(128,128,128,0.25)',
                  border: 'none',
                  borderRadius: '50%',
                  width: 16,
                  height: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  padding: 0,
                  color: 'inherit',
                }}
              >
                <X size={11} />
              </button>
            )}
          </div>
          {tagMenuOpen ? (
            <div className="tag-filter-menu">
              <div className="tag-filter-head">
                <span>{t('tags')}</span>
                <span>{t('matchAny')}</span>
              </div>
              <div className="tag-filter-search">
                <Search size={15} />
                <input
                  value={tagQuery}
                  onChange={(event) => setTagQuery(event.target.value)}
                  placeholder={t('searchTags')}
                />
              </div>
              <div className="tag-filter-options">
                {selectedCount > 0 && (
                  <button
                    className="tag-filter-option reset-option"
                    type="button"
                    onClick={() => {
                      onClearTags()
                      setTagMenuOpen(false)
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      color: 'var(--accent-primary, #3b82f6)',
                      fontWeight: 600,
                      padding: '8px 12px',
                      borderBottom: '1px solid var(--border-subtle, rgba(128,128,128,0.15))',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    <RotateCcw size={13} />
                    <span>恢复默认（清除所有标签筛选）</span>
                  </button>
                )}
                <button
                  className={`tag-filter-option${includeUntagged ? ' selected' : ''}`}
                  type="button"
                  onClick={onToggleUntagged}
                >
                  <span className="tag-check">{includeUntagged ? <Check size={14} /> : null}</span>
                  <span>{t('untagged')}</span>
                  <span className="tag-count">{untaggedCount}</span>
                </button>
                {filteredTags.map((tag) => {
                  const selected = selectedTagSet.has(tag.id)
                  return (
                    <button
                      key={tag.id}
                      className={`tag-filter-option${selected ? ' selected' : ''}`}
                      type="button"
                      onClick={() => onToggleTag(tag.id)}
                    >
                      <span className="tag-check">{selected ? <Check size={14} /> : null}</span>
                      <span>{tag.name}</span>
                      <span className="tag-count">{tag.skill_count}</span>
                    </button>
                  )
                })}
              </div>
              <div className="tag-filter-footer">
                <button type="button" onClick={onClearTags} disabled={selectedCount === 0}>
                  {t('clearAll')}
                </button>
                <button type="button" onClick={onManageTags}>
                  {t('manageTags')}
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="view-mode-toggle" role="group" aria-label={t('viewMode.label')}>
          <button
            className={viewMode === 'list' ? 'active' : ''}
            type="button"
            onClick={() => onViewModeChange('list')}
            aria-label={t('viewMode.list')}
            title={t('viewMode.list')}
            aria-pressed={viewMode === 'list'}
          >
            <List size={15} />
          </button>
          <button
            className={viewMode === 'cards' ? 'active' : ''}
            type="button"
            onClick={() => onViewModeChange('cards')}
            aria-label={t('viewMode.cards')}
            title={t('viewMode.cards')}
            aria-pressed={viewMode === 'cards'}
          >
            <LayoutGrid size={15} />
          </button>
        </div>
        <div className="search-container">
          <Search size={16} className="search-icon-abs" />
          <input
            className="search-input"
            value={localSearch}
            onChange={(event) => setLocalSearch(event.target.value)}
            placeholder={t('searchPlaceholder')}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(FilterBar)
