# Motion Interaction Spec

## Current Version

```txt
v1.22.0-motion-interaction-spec
```

---

## 1. Purpose

本文件用于记录 Portfolio 后续动画交互设计方向，避免为了炫技随意接入复杂动画。当前作品集已经具备可投递版本，后续动画只能作为渐进增强，不能影响性能、可读性、响应式和投递稳定性。

---

## 2. Current Motion Baseline

当前已有：

- Hero 轻量 fade-up / blur-in 入场动画
- 背景光晕轻量淡入
- CTA / CodePilot 信息卡 stagger fade-up
- prefers-reduced-motion 支持

当前动画已经足够支撑第一版投递。后续动画必须克制，不能让作品集变成动画展示页。

---

## 3. Candidate 1：BorderGlow

### 来源

BorderGlow 是一个卡片边缘光晕交互组件，根据鼠标靠近卡片边缘的位置显示方向性 glow。

### 适合位置

优先适合：

- CodePilot 项目卡片
- 未来多个项目卡片
- Contact 联系卡片的轻量 hover 边缘光

不适合位置：

- 全站每个卡片都加
- Hero 主标题
- 导航栏
- 正文段落

### 优点

- 和当前暗色玻璃风格匹配
- 能增强项目卡片高级感
- 不需要重构页面结构
- 可作为未来多个项目卡片的统一交互语言

### 风险

- 如果 glow 太亮，会显得花哨
- 如果每个卡片都加，会造成视觉噪音
- 需要控制移动端和 prefers-reduced-motion

### 接入优先级

```txt
Priority：High
```

### 建议结论

后续如果要真正接入动画组件，优先从 BorderGlow 开始，并且只在项目卡片上试点。第一版只给 CodePilot 卡片使用，未来多个项目卡片复用同一交互。

---

## 4. Candidate 2：LineWaves

### 来源

LineWaves 是 WebGL / shader 风格的线条波纹背景动画，依赖 ogl。

### 适合位置

理论上适合：

- Hero 背景
- 大型视觉展示页背景

### 当前不建议原因

- 当前 Hero 已经有光晕、网格和入场动画
- LineWaves 需要 ogl 依赖
- WebGL 动画可能增加性能和维护成本
- 对移动端和低性能设备不友好
- 当前作品集目标是求职投递，不是动画实验页

### 接入优先级

```txt
Priority：Low
```

### 建议结论

短期不接入 LineWaves。除非未来专门做视觉实验版本，否则不应引入 ogl / WebGL 背景动画。

---

## 5. Candidate 3：ProfileCard

### 来源

ProfileCard 是一个带头像、handle、status、contact button、tilt 和 behind glow 的个人资料卡片。

### 适合位置

理论上适合：

- 个人介绍卡
- 头像名片页
- 独立 About Hero

### 当前不建议完整接入原因

- 当前 Portfolio 没有稳定头像素材
- 完整接入会让页面像个人名片模板
- 容易喧宾夺主，削弱 CodePilot 项目展示
- 组件包含 avatar / handle / status / contact 等结构，不适合当前信息架构

### 可借鉴点

可以借鉴：

- 轻微 tilt
- 背后柔和 glow
- 鼠标 hover 时的 subtle depth

### 接入优先级

```txt
Priority：Medium-Low
```

### 建议结论

不完整接入 ProfileCard。未来如果要增强 About 区，可以只借鉴轻微 hover depth / behind glow，而不是复制完整头像卡片。

---

## 6. Recommended Motion Strategy

### 短期

- 不接入新动画组件
- 保持 v1.21.0-final-polish 作为稳定投递版本

### 中期

- 如需增强项目区，优先试点 BorderGlow
- 只用于 CodePilot / 未来项目卡片
- 不改 Hero 主结构
- 不影响移动端体验

### 长期

- 如果项目数量增加，可以形成统一 ProjectCard 交互规范
- 每个项目卡片使用同一种轻量 hover glow
- 不引入 WebGL 背景，除非有明确性能预算和视觉必要性

---

## 7. Placement Map

| Component | Motion Candidate | Decision | Reason |
|---|---|---|---|
| Hero background | LineWaves | 不接入 | 当前 Hero 已足够，WebGL 风险高 |
| Hero CTA | Existing fade-up | 保留 | 已经轻量且有效 |
| CodePilot card | BorderGlow | 后续优先试点 | 与暗色玻璃卡片匹配 |
| Future project cards | BorderGlow | 推荐复用 | 适合作为统一项目卡片交互 |
| About card | ProfileCard-inspired subtle glow | 仅借鉴，不完整接入 | 避免头像名片模板化 |
| Contact card | BorderGlow optional | 可选 | 只在不喧宾夺主时使用 |

---

## 8. Acceptance Criteria for Future Motion Work

未来如果接动画，必须满足：

- 不新增虚假内容
- 不影响主要阅读
- 不导致移动端横向溢出
- 不影响锚点跳转
- 不显著增加 bundle 体积
- 支持 prefers-reduced-motion
- 能 npm run build 通过
- 能被一键移除或回退
- 不影响当前投递版本稳定性

---

## 9. Final Decision

当前不接入任何新动画组件。

v1.21.0-final-polish 继续作为稳定投递版本。

下一步如继续开发动画，只允许从 BorderGlow 项目卡片试点开始。

LineWaves 和 ProfileCard 暂不进入实现阶段。

---

## 10. Final Decision After Experiment

BorderGlow 已经完成实验验证，并被确认为当前 Portfolio 的主要卡片 hover 交互语言。

最终保留：

- BorderGlowCard：用于主要玻璃卡片
- RevealOnScroll：用于 Hero 之后的 Section 入场
- Hero 原有 spotlight / hero-anim 入场

继续不接入：

- LineWaves
- ProfileCard
- ogl / WebGL 背景动画
