---
name: openmontage-cinematography
description: Universal 5-Aspect Cinematography Spec and Prompting Architecture for AI Video Generation (Seedance, Sora, VEO, Kling, Wan, LTX, Runway). Use when crafting high-control video generation prompts with precise camera movements, lighting, lens optics, temporal pacing, and character consistency.
---

# 🎬 OpenMontage Cinematography Spec & Universal Video Prompting

本技能源自 OpenMontage 核心视觉工程规范，结合哈佛与 CMU 视觉语言模型（VLM）视听语言对齐研究，提炼出适用于当代主流视频生成大模型（Seedance 2.0/2.5、Sora 2、Google VEO 3.1、快手可灵 Kling 2.6、阿里 Wan 2.2、LTX-2、Runway Gen-4 等）的标准 5-Aspect 摄影运镜与提示词架构。

---

## 🎯 核心第一性原理：5-Aspect 提示词黄金骨架

> [!IMPORTANT]
> **为什么传统提示词容易翻车？**
> 实验表明，AI 视频模型通常能很好地识别“主体”与“背景”，但在**运动方向、三维空间景深变化、精密运镜轨迹**上极易产生幻觉与紊乱。**强制填充 5 个维度的提示词结构是获得确定性画面的最高杠杆手段。**

```
[1. Subject 主体]        主体类别 + 3-5个不可变视觉锚点特征（服装/发型/材质） + 多人/多物体消歧描述
[2. Subject Motion 动作] 严格按时间顺序展开的动作链；主体↔物体、主体↔主体交互；群组动态
[3. Scene & Lighting 场景] 空间环境 + 时间光线 + 核心光源方向 + 氛围色调（严禁将后期UI覆层混入场景）
[4. Spatial & Depth 空间] 初始景别（远景/中景/特写） + 画面构图位置 + FG/MG/BG 前中后景纵深 + 镜头高度关系
[5. Camera 摄影机轨迹]    播放速率 → 镜头畸变/焦段 → 摄影机高度 → 俯仰角度 → 景深对焦 → 运动基元
```

---

## 📊 一、 各大主流模型最佳提示词密度与公式

| 视频模型 | 推荐词数 (Sweet Spot) | 核心特性与适配法则 |
| :--- | :--- | :--- |
| **Seedance 2.0 / 2.5** | 主镜头 200–400 词 / 垫片 80–150 词 | **默认首选**。支持多分镜（Multi-shot）、直接音画对齐、高阶摄影机运镜、多参考图一致性。 |
| **Wan 2.1 / 2.2 (通义万相)** | 200–400 词 | 对长文本 Caption 训练充分，适合详尽填充 5-Aspect 规范与细节物理材质。 |
| **Sora 2 / VEO 3.1** | 100–250 词 | 超过 250 词边际收益递减。注重镜头焦段、光影滤镜、摄影机物理运动。 |
| **Kling 2.6 (可灵)** | 100–200 词 | 4 段式结构，支持使用 `++emphasis++` 语法强化关键视觉元素。 |
| **LTX-2** | $\le$ 80 词 | 超过 80 词易劣化。聚焦于强动作动词与精准运镜，剔除修饰性废话。 |
| **Runway Gen-4** | $\le$ 60 词 | “专注于动态，而非外观”（Focus on motion, not appearance）。一镜头一动作。 |

---

## 🎥 二、 约 200 个专业电影镜头原语库 (Cinematography Primitives)

### 1. 景别 (Shot Types)
* **Extreme Long Shot (ELS / 大远景)**：展现辽阔地理环境，主体极小或不可见。
* **Wide / Establishing Shot (WS / 远景/建立镜头)**：交待场景空间关系与人物所处位置。
* **Full Shot (FS / 全景)**：人物头顶至脚底完整入画，平衡人物与环境。
* **Medium Shot (MS / 中景)**：腰部以上，标准叙事与交互景别。
* **Medium Close-up (MCU / 中特写)**：胸部以上，聚焦人物情绪与对话。
* **Close-up (CU / 特写)**：面部或关键道具，强化戏剧张力。
* **Extreme Close-up (ECU / 大特写)**：眼睛、水滴、微观纹理等局部极限放大。
* **Over-the-shoulder (OTS / 过肩镜头)**：越过一人肩膀拍摄对话者，营造空间关系。
* **Point-of-view (POV / 主观视角)**：第一人称视点，观众即角色。

---

### 2. 摄影机运动分类 (Camera Movements — 严禁混淆)
> [!CAUTION]
> **Dolly $\neq$ Zoom**：Dolly 是摄影机物理机位移动（产生视差与透视变化）；Zoom 是镜头光学变焦（纯画幅放大缩小，无视差）。
> **Pan $\neq$ Truck**：Pan 是机位原地左右水平旋转；Truck 是机位架在轨道上横向平移。

* **物理平移 (Translation)**：
  * `Dolly In / Out`：沿光轴向前推进 / 向后拉出。
  * `Truck Left / Right`：机位沿水平轨道向左 / 向右平移。
  * `Pedestal Up / Down`：机位垂直向上升起 / 向下落低。
* **原地旋转 (Rotation)**：
  * `Pan Left / Right`：原地向左 / 向右摇镜。
  * `Tilt Up / Down`：原地向上 / 向下仰俯摇镜。
  * `Roll CW / CCW`：沿镜头轴心顺时针 / 逆时针滚转。
* **纯光学变焦与焦点 (Lens & Optical Only)**：
  * `Zoom In / Out`：光学变焦推近 / 拉远。
  * `Rack Focus`：在画面两个主体间快速焦点切换（需标明起止点：FG to BG）。
  * `Focus Tracking`：焦点紧跟移动主体。
* **组合/招牌运镜 (Signature / Hybrid)**：
  * `Dolly Zoom (Vertigo Effect)`：滑动变焦（机位前推同时光学拉远，产生空间扭曲感，仅用于顿悟/惊悚时刻）。
  * `Arc / Orbit`：机位围绕主体做 360° 环绕飞行。
  * `Crane / Jib Shot`：摇臂高空大范围升降俯冲。
  * `Whip Pan`：极速甩镜（用于转场）。
  * `Handheld / Steadicam`：手持呼吸微晃 / 斯坦尼康极度丝滑跟随。
* **静态锁死 (Static)**：
  * `Static / Locked-off Shot`：摄影机机位、焦点、焦距 100% 绝对静止。

---

### 3. 摄影机高度与视角 (Height & Angles)
* **机位高度**：`Aerial-level` (无人机空拍) $\rightarrow$ `Overhead-level` (屋顶高度) $\rightarrow$ `Eye-level` (视平线) $\rightarrow$ `Hip-level` (腰平机位) $\rightarrow$ `Ground-level` (贴地低机位) $\rightarrow$ `Underwater` (水下)。
* **视角角度**：
  * `Bird's-eye View`：严格垂直 90° 俯视地图视角（与 45° 俯瞰不同）。
  * `High Angle`：自上向下俯拍（主体显脆弱、渺小）。
  * `Level Angle`：平视中立视角。
  * `Low Angle`：自下向上仰拍（主体显威严、崇高）。
  * `Worm's-eye View`：贴地向上垂直极限仰拍。
  * `Dutch Angle (Fixed/Rolling)`：倾斜地平线荷兰角（营造不安、紧张气氛）。

---

### 4. 光影氛围与电影级打光 (Lighting & Tone)
* **自然与时间**：`Golden Hour` (日落金黄逆光暖调)、`Blue Hour` (黎明/黄昏冷蓝调)、`Overcast Soft Light` (阴天漫反射柔光)。
* **布光体系**：
  * `Rembrandt Lighting`：伦勃朗三角光（面颊保留倒三角高光，经典人像）。
  * `Film Noir / Chiaroscuro`：黑色电影明暗对照法（高反差、硬光、百叶窗阴影）。
  * `Volumetric / God Rays`：丁达尔丁达尔体积光（穿透薄雾/尘埃的光束）。
  * `Rim / Edge Light`：轮廓背光（勾勒主体发丝轮廓，与暗背景剥离）。
  * `Practical Lights`：场景内真实光源（霓虹招牌、街灯、屏幕反光）。
* **色调风格**：`Teal-and-Orange` (好莱坞青橙对冲色调)、`Kodak Warm Grade` (柯达暖胶片感)、`Monochrome 35mm High Contrast` (35毫米黑白高对比度)。

---

## 🔒 三、 多镜头人物一致性锁定 (Identity Anchoring Spec)

> [!IMPORTANT]
> **多分镜（Multi-shot）跨切防崩法则**：
> AI 视频大模型在镜头切换时无法自动继承代词（如 "he", "she", "the same girl"）。在多镜头描述中，**每个镜头必须逐字重复相同的 3~5 个唯一具象视觉锚点**：
>
> ❌ **错误范例**：*Shot 1: A cyberpunk detective walks in. Shot 2: He takes out a gun.*  
> ✅ **标准范例**：  
> *Shot 1: [Aiden — worn beige trench coat, glowing cyan cybernetic left eye, slicked-back silver hair] walks under neon rain.*  
> *Shot 2: Medium close-up, [Aiden — worn beige trench coat, glowing cyan cybernetic left eye, slicked-back silver hair] unholsters a matte black revolver.*

---

## 📝 四、 5-Aspect 标准提示词模板实战

### 范例 1：电影级科幻预告片镜头 (Cinematic Sci-Fi Hero Shot)
```text
[Subject]: Dr. Maya Lin — graphite titanium exo-suit with pulsing amber LED joints, reflective gold-tinted visor, matte black carbon-fiber helmet.
[Subject Motion]: Maya walks firmly through drifting sparks, pauses, raises her right gauntlet to activate a rotating holographic planetary schematic.
[Scene]: Derelict interstellar command bridge, cracked observation glass revealing a swirling purple nebula, atmospheric volumetric fog drifting across the floor, cold neon blue emergency backlights.
[Spatial]: Wide establishing shot transitioning to medium shot, Maya centered in the midground, floating debris in the foreground, shattered control consoles in the background.
[Camera]: Eye-level camera, 35mm anamorphic lens with subtle horizontal cyan lens flares, starting in slow dolly forward then performing a smooth 45-degree orbit right around Maya, shallow depth of field with background nebula bokeh.
```

### 范例 2：吉卜力动漫手绘风镜头 (Anime Explainer Shot)
```text
[Subject]: Sora — 12-year-old girl with twin brown braids, yellow rain boots, oversized emerald green knit sweater.
[Subject Motion]: Sora crouches by the bubbling stream, gently dips a glass jar into the water to catch a glowing golden water-sprite.
[Scene]: Sunlit enchanted forest clearing, ancient moss-covered oak trees, dappled morning sunlight filtering through leaves, floating pollen particles, Studio Ghibli cel-shaded animation style.
[Spatial]: Medium full shot, low ground-level angle, lush ferns and wild mushrooms in the immediate foreground, crystal stream in the midground.
[Camera]: Ground-level, warm Kodak color grade, static locked-off camera with zero pan or zoom, deep focus keeping both the foreground mushrooms and Sora razor sharp.
```
