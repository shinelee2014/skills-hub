---
name: antv-infographic-syntax
description: 生成 AntV Infographic 语法。用于将文字内容转化为 Infographic DSL 语法块（template, data, theme）。
---

## 概述

从用户内容生成 AntV Infographic 语法输出。

## 语法规范

- 第一行必须是 `infographic <template-name>`。
- 使用 `data` / `theme` 块，块内用两个空格缩进。
- 键值对使用「键 空格 值」；数组使用 `-` 作为条目前缀。
- icon 使用图标关键词（如 `star fill`）。
- `data` 应包含 title/desc + 模板对应的主数据字段。
- 禁止输出 JSON、Markdown 或解释性文字。

## 输出格式

输出为一个 `infographic` 类型的代码块。

例如：

```infographic
infographic list-row-horizontal-icon-arrow
data
  title Title
  desc Description
  lists
    - label Label
      desc Explanation
      icon document text
```

## 可用模板

请参考完整版 `antv-infographic` 技能中的模板列表。
