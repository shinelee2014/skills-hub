---
name: ink-theater-engine
description: Deterministic Hand-Drawn SVG/GSAP Vector Animation & Stick-Figure Mocap Engine (Ink Theater & Ink Puppet). Use when creating minimalist hand-drawn animations, line-boil sketch effects, physics contraptions, and CMU-mocap retargeted stick-figure characters for HyperFrames or web video rendering without diffusion models.
---

# 🖋️ Ink Theater: 确定性手绘动力学与火柴人动捕动画引擎

本技能源自 OpenMontage 核心实验组件 **Ink Theater**，专为 **极简黑白手绘风格动画（Moving Art / Doodle Explainer）** 设计。

它完全基于 **纯矢量 SVG + 数学闭式解物理阻尼 + GSAP 时间轴控制 + CMU 真实人体动捕（Mocap）转译**，彻底摆脱对昂贵、不可控的 AI 扩散生视频模型的依赖，实现 **0 成本、100% 确定性、支持毫秒级拖拽寻道（Seek-Safe）与纯代码渲染**。

---

## 🌟 核心能力模块矩阵 (InkTheater Global API)

| 模块 | 核心能力 | 核心 API / 用法 |
| :--- | :--- | :--- |
| **Ink Strokes (手绘墨线)** | 具有笔刷粗细渐变与微扰动（Wobble）的真实手绘墨线带 | `InkTheater.inkPath(pts, opt)`, `InkTheater.inkRibbon(pts, {width, taper, seed})` |
| **Line Boil (线条蠕动)** | 逐帧时间轴离散驱动的手绘线条抖动效果（~9fps 确定性步进，非随机 SMIL） | `InkTheater.boil(turbEl, tl, {duration, fps})` |
| **Spring Physics (弹簧物理)** | 闭式阻尼谐振子弹性过渡（无累积误差，时间 $t \to$ 物理状态的纯函数） | `InkTheater.springEase({stiffness, damping, mass})`, `InkTheater.ease.settle/overshoot` |
| **Rig & FABRIK IK (反向动力学)** | 2D FABRIK 骨骼解算器，让手绘吉祥物手臂自然指向或操作物体 | `InkTheater.fabrik(lengths, origin, target)`, `mascot.reachL([x, y])` |
| **Contraption Grammar (手绘机械部件)** | 参数化可组合低科技手绘机械零件（曲柄、滑轮、料斗、拉杆） | `InkTheater.parts.crank()`, `parts.gauge()`, `parts.lever()` |
| **Ink Puppet (火柴人真实动捕)** | 将 CMU 3D 动捕数据映射到 2D 手绘火柴人，支持肢体线稿自动绘制与动作编排 | `InkPuppet.create()`, `InkPuppet.choreograph()` |

---

## 📐 一、 确定性与渲染契约 (Determinism & Seek-Safe)

在视频渲染（HyperFrames / Remotion / 无头浏览器）中，**所有帧必须仅由当前时间戳 `t` 决定**：
1. **严禁在运行时调用 `Math.random()`**：所有笔刷摆动、粗细变化必须使用带种子的伪随机数发生器（PRNG）。
2. **严禁使用未闭合循环 `repeat: -1`**：时间轴必须严格拥有有限时长（Finite Duration）。
3. **闭式弹簧阻尼 (Analytic Damped Oscillator)**：通过解析解直接计算进度 $p \in [0, 1]$ 下的振幅与位移，任意跳转进度条不会导致物理状态崩溃。
4. **字体子集陷阱规避 (Font Subset Gotcha)**：
   * 在手绘解说视频中，字幕若要使用真实手写字体（如 Patrick Hand），**必须本地嵌入包含完整 ASCII/Basic-Latin 的完整 TTF/WOFF2**，严禁使用 Google Fonts 动态切片 API（易因缺少字符集静默降级为衬线体）。

---

## 🎭 二、 Ink Puppet 火柴人动捕动画实战

### 1. 12 类预置 CMU 动作库编排
无需人工调整关键帧骨骼角度，直接按名字调用预置的真实人体动捕动作：
* **位移系 (Locomotion)**：`walk`（走）、`run`（跑）、`climb`（爬）、`march`（踏步）、`shuffle`（拖步）
* **动作系 (Action)**：`jump`（跳跃）、`kick`（踢腿）、`sit`（坐下）
* **手势系 (Gesture)**：`wave`（招手）
* **舞蹈系 (Dance)**：`dance_spin`（旋转舞）、`dance_glide`（滑步）、`twist`（扭扭舞）

### 2. 标准动画编排范式
```javascript
// 1. 初始化火柴人
const mount = document.getElementById("scene-svg");
const puppet = InkPuppet.create(mount, { cx: 960, ground: 900, boil: "boil" });

// 2. 第一阶段：铅笔逐笔画出火柴人自身 (Draw-in)
puppet.drawIn(timeline, { start: 0.5, duration: 1.5 });

// 3. 第二阶段：按顺序流畅执行动捕动作链
InkPuppet.choreograph(timeline, puppet, [
  { clip: "walk", reps: 2 },
  { clip: "jump" },
  { clip: "dance_spin" },
  { clip: "wave" }
], { start: 2.0 });

// 4. 第三阶段：头顶冒出手绘气泡对白 (Speech Balloon)
InkTheater.balloon(timeline, {
  into: svgEffectsGroup,
  overlay: htmlCaptionDiv,
  at: 6.5,
  dur: 3.0,
  text: "Hello, this is pure code animation!",
  boil: "boil"
});
```

---

## 🚀 三、 极简黑白手绘解说视频工作流 (Workflow)

```mermaid
flowchart LR
    A[📝 概念脚本 / 知识点] --> B[🎨 拆解手绘物理隐喻\n(杠杆/料斗/火柴人交互)]
    B --> C[⚙️ InkTheater 组装 SVG 场景\n+ Mocap 动作编排]
    C --> D[⏱️ 绑定 GSAP 唯一 paused 时间轴]
    D --> E[🎙️ TTS 毫秒级字戳同步对白气泡]
    E --> F[🎬 HyperFrames / FFmpeg 纯代码导出 MP4]
```

### 适用场景：
* **数据结构与算法科普**（如火柴人将数据方块塞入料斗排序）；
* **经济学 / 物理学直观规律解说**（如天平称重、齿轮传动）；
* **极简自媒体短视频开头 Hook**（手绘火柴人自嘲、招手引出话题）。
