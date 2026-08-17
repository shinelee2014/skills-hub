import { memo } from 'react'
import { Sparkles, X, Copy } from 'lucide-react'
import { toast } from 'sonner'
import type { TFunction } from 'i18next'

export type SkillBundle = {
  id: string
  name: string
  icon: string
  summary: string
  skills: string[]
  recommendedPrompt: string
}

export const CURATED_BUNDLES: SkillBundle[] = [
  {
    id: 'ppt-production',
    name: '咨询级 PPT 汇报全流程套件',
    icon: '💼',
    summary: '从 SCR 逻辑分析、结构化大纲到高清信息图与咨询风 PPTX 原生生成。',
    skills: ['CyberPPT', 'smart-illustrator', 'theme-factory', 'slideshow'],
    recommendedPrompt: '使用 @CyberPPT 和 @smart-illustrator 规范，为以下内容制作一份麦肯锡咨询风格的汇报 PPTX：\n[输入主题/材料]',
  },
  {
    id: 'video-cutting',
    name: '自媒体音视频剪辑与动画套件',
    icon: '🎬',
    summary: '视频去口误、字幕毫秒对齐、全网视频嗅探及 Remotion 动态代码渲染。',
    skills: ['ai-jian-koubo', 'ra-人话', 'remotion-official', 'yt-dlp-skill-new'],
    recommendedPrompt: '使用 @ai-jian-koubo 识别口误生成剪辑清单，并应用 @ra-人话 润色口播文案，最后用 @remotion-official 进行动态视觉呈现：\n[输入视频/文案]',
  },
  {
    id: 'engineering-dev',
    name: '工程架构与测试重构套件',
    icon: '💻',
    summary: '严格遵循 Karpathy 规范、TDD 测试驱动开发、Git Worktree 隔离与 MCP 构建。',
    skills: ['test-driven-development', 'karpathy-guidelines', 'mcp-builder', 'using-git-worktrees'],
    recommendedPrompt: '遵循 @karpathy-guidelines 极简与验证规范，使用 @test-driven-development 测试驱动方式实现以下功能：\n[输入开发任务]',
  },
  {
    id: 'second-brain',
    name: '第二大脑与维基沉淀套件',
    icon: '🧠',
    summary: 'Obsidian 深度整合、原子知识卡片提取、NotebookLM 知识库自动同步。',
    skills: ['second-brain-maintainer', 'obsidian-markdown', 'notebooklm-plugin'],
    recommendedPrompt: '调用 @second-brain-maintainer 规范，将以下文章提炼为 Obsidian 原子知识卡片并归档至 entities/concepts：\n[输入文章]',
  },
  {
    id: 'viral-writing',
    name: '深度洞察与爆款写作套件',
    icon: '✍️',
    summary: '李继刚认知原子、白话解构、跨平台自媒体排版与多格式转换。',
    skills: ['ljg-plain', 'ljg-word', 'chinese-copywriting-formatter', 'universal-converter'],
    recommendedPrompt: '使用 @ljg-plain 和 @ljg-word 进行第一性原理深度拆解，并调用 @chinese-copywriting-formatter 规范排版：\n[输入主题]',
  },
  {
    id: 'intel-search',
    name: '深度搜索与情报嗅探套件',
    icon: '🔍',
    summary: '近 30 天社交媒体情绪追踪、全网多源搜索引擎、学术 arXiv 检索与万能解析。',
    skills: ['last30days', 'tavily-search', 'literature-search-arxiv', 'x-reader'],
    recommendedPrompt: '组合调用 @last30days 和 @tavily-search 检索过去 30 天关于以下话题的真实讨论与前沿动态：\n[输入研究课题]',
  },
]

type SkillBundlesModalProps = {
  open: boolean
  onClose: () => void
  onApplyBundleFilter: (skillNames: string[]) => void
  t: TFunction
}

const SkillBundlesModal = ({
  open,
  onClose,
  onApplyBundleFilter,
  t: _t,
}: SkillBundlesModalProps) => {
  if (!open) return null

  const handleCopyPrompt = async (prompt: string, title: string) => {
    try {
      await navigator.clipboard.writeText(prompt)
      toast.success(`已复制「${title}」组合 Prompt 指令`)
    } catch {
      toast.error('复制失败')
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        style={{ maxWidth: 840, width: '92%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Sparkles size={20} className="text-amber-500" />
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
              AI 场景技能组合套件 (Skill Bundles)
            </h3>
          </div>
          <button type="button" className="btn-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto', padding: '20px 24px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 0, marginBottom: 20 }}>
            精选官方工作流组合，从“单点找工具”升级为“成套解决方案”。点击可一键筛选套件技能或复制组合调用 Prompt。
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: 16,
            }}
          >
            {CURATED_BUNDLES.map((bundle) => (
              <div
                key={bundle.id}
                style={{
                  border: '1px solid var(--border-color, #e5e7eb)',
                  borderRadius: 12,
                  padding: 16,
                  background: 'var(--bg-surface, #ffffff)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 24 }}>{bundle.icon}</span>
                    <div>
                      <h4 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{bundle.name}</h4>
                      <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--text-secondary)' }}>
                        {bundle.summary}
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '4px 0' }}>
                  {bundle.skills.map((skillName) => (
                    <span
                      key={skillName}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 6,
                        background: 'var(--bg-tag, rgba(37, 99, 235, 0.08))',
                        color: 'var(--accent-primary, #2563eb)',
                        border: '1px solid rgba(37, 99, 235, 0.2)',
                      }}
                    >
                      {skillName}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', paddingTop: 8 }}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ flex: 1, fontSize: 12, height: 32 }}
                    onClick={() => {
                      onApplyBundleFilter(bundle.skills)
                      onClose()
                      toast.success(`已筛选套件「${bundle.name}」中的 ${bundle.skills.length} 个技能`)
                    }}
                  >
                    一键筛选技能 ({bundle.skills.length})
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ fontSize: 12, height: 32, display: 'flex', alignItems: 'center', gap: 4 }}
                    onClick={() => handleCopyPrompt(bundle.recommendedPrompt, bundle.name)}
                  >
                    <Copy size={13} />
                    复制 Prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(SkillBundlesModal)
