import { memo } from 'react'
import type { SkillCategory } from './types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  { id: 'all', name: '全部', icon: '✨' },
  { id: 'starred', name: '常用', icon: '⭐️' },
  { id: 'design', name: '视觉设计', icon: '🎨' },
  { id: 'agent', name: 'Agent系统', icon: '🤖' },
  { id: 'dev', name: '编程开发', icon: '💻' },
  { id: 'writing', name: '写作转化', icon: '✍️' },
  { id: 'video', name: '音视频剪辑', icon: '📹' },
  { id: 'search', name: '搜索研究', icon: '🔍' },
  { id: 'data', name: '数据与云', icon: '☁️' },
  { id: 'knowledge', name: '知识大脑', icon: '🧠' },
  { id: 'ppt', name: 'PPT演示', icon: '📊' },
]

type CategoryPillsProps = {
  selectedCategory: string
  onSelectCategory: (categoryId: string) => void
  categoryCounts: Record<string, number>
  totalCount: number
}

const CategoryPills = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  totalCount,
}: CategoryPillsProps) => {
  return (
    <div className="category-pills-container" role="tablist" aria-label="用途分类">
      <div className="category-pills-scroll">
        {SKILL_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id
          const count = cat.id === 'all' ? totalCount : (categoryCounts[cat.id] || 0)
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`category-pill${isSelected ? ' active' : ''}`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <span className="category-pill-icon">{cat.icon}</span>
              <span className="category-pill-name">{cat.name}</span>
              <span className="category-pill-count">{count}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default memo(CategoryPills)
