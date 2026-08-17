---
name: ai-mobile-designer-local
description: 无需 API 的本地移动应用设计专家。使用内置图像生成和代码生成能力制作高保真 UI 原型。
---

# AI 移动应用本地设计专家 (Local Designer)

## 概述
这是一个完全本地运行的设计技能。它模拟了专业设计工具的工作流，通过 `generate_image` 工具生成视觉效果，并通过代码生成来实现界面原型。

## 核心功能
1. **UI 视觉稿生成**：利用 Agent 内置的图像生成能力，为用户创建极具视觉冲击力的移动端界面（Mockups）。
2. **多页面设计**：支持分页面设计（登录页、首页、设置页等），并能保持风格统一。
3. **前端代码转化**：能够根据生成的视觉稿，编写对应的 vanilla CSS/JS 或 React 局部原型。
4. **项目管理**：在用户当前工作目录的 `/designs/` 文件夹下按项目名称组织文件。

## 操作指南

### 1. 启动设计
当用户提出“设计一个健身 App”或“帮我画个登录页面”时：
- 先询问或确定 App 的**主色调**和**设计风格**（如：极简、暗黑模式、毛玻璃效果等）。
- 使用 `generate_image` 生成第一张核心视觉稿。

### 2. 图像生成提示词建议 (Prompts)
为了达到 Sleek 的高水准，请使用如下风格词：
> "Premium mobile app UI interface, [具体功能描述], high-fidelity mockup, modern design system, [风格关键词：如 Glassmorphism, Brutalist, Minimalist], vibrant gradient, clean typography, 8k resolution, professional UX/UI design."

### 3. 项目结构建议
为用户在本地创建如下结构：
- `/designs/[project_name]/mockups/` - 存放生成的图像。
- `/designs/[project_name]/prototype/` - 存放对应的 HTML/CSS 代码。

## 最佳实践
- **拒绝平庸**：不要生成默认的、简单的 UI。始终追求“Wow”的效果。
- **一致性**：在为一个项目的多个屏幕生成图像时，要在 Prompt 中显式要求“Consistent branding and color palette as previous screens”。
- **可交互性**：在生成图像后，主动询问用户是否需要将其转化为可编辑的 HTML 代码。

---
