---
name: ppt-agent
description: >
  PPT slide generation workflow: init → research → outline → design → delivery.
  Generates multi-agent PPT slide decks with high-quality SVG (Bento Grid) and HTML previews.
  Triggers: "PPT", "slides", "幻灯片", "做个PPT", "slide deck", "演示文稿", "做演示".
---

# PPT Agent

多智能体 PPT 幻灯片生成工作流，支持端到端从需求调研到最终 SVG/HTML 交付。

## 工作流程

1. **Init**: 初始化环境与运行目录。
2. **Requirement Research (Hard Stop)**: 背景搜索 + 用户确认需求。
3. **Material Collection (Parallel)**: 按章节并行深度搜索素材。
4. **Outline Planning (Hard Stop)**: 金字塔原理结构化大纲 + 用户审批。
5. **Planning Draft**: 每页生成简版 SVG 草略图。
6. **Design Draft + Gemini Review**: Bento Grid SVG 正式生成 + 质量循环审查。
7. **Delivery (Hard Stop)**: 最终 SVG 文件 + 交互式 HTML 预览页。

## 使用方法

### 基础生成

```bash
/ppt-agent:ppt <主题或需求描述>
```

### 进阶参数

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `--style` | business | 风格预设：business / tech / creative / minimal |
| `--brand-colors` | 无 | 品牌色彩 YAML 文件路径 |
| `--pages` | 10-15 | 目标页数范围 |

### 自定义品牌色彩

```yaml
brand:
  primary: "#FF6900"     # 主品牌色
  secondary: "#000000"   # 辅助品牌色
  logo_text: "Mi"        # 品牌标识
```

## 交付产物

所有产物保存在 `openspec/changes/<run_id>/output/` 下：

- `slide-{nn}.svg`: 最终设计的 SVG 幻灯片。
- `index.html`: 支持 Gallery/Scroll/Present 模式的交互式预览页。
- `speaker-notes.md`: 每一页的演讲者备注。

## 宿主支持

- Claude Code
- OpenCode (GPT-5.4 / MiniMax M2.5 / MiMo V2 Pro)
- Antigravity (Via command line integration)
