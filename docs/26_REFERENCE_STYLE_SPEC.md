# Portfolio Reference Style Spec

## Current Version

```txt
v1.16.0-reference-style-spec
```

## Reference Summary

用户提供的参考风格是一个全屏暗色 Hero 页面，核心视觉语言包括沉浸式背景、玻璃导航、强标题、底部信息块、柔和聚光效果和高级入场动画。

该参考原本服务于地质品牌（Lithos），不适合直接复制到 Portfolio。

Portfolio 需要提取视觉语言，而不是复制品牌、图片、文案或依赖。

当前 Portfolio 是中文求职作品集，核心项目是 CodePilot，面向 AI 应用开发 / Agent 开发 / Python 后端方向。

---

## Transferable Design Elements

以下是可以从参考风格中提取并转译到 Portfolio 的设计元素。

### 1. Full-screen Dark Hero

可转译为：

- Portfolio 首屏保持 `100dvh` 或接近满屏高度
- 背景保持深色沉浸感
- Hero 成为页面视觉锚点

当前状态：

- HeroSection 已使用 `min-h-screen`，方向正确
- 已有 `bg-zinc-950` 深色基底
- 已有 `radial-gradient` 背景光晕

后续可增强：

- 不使用参考图中的地质图片
- 不使用外部图片 URL
- 可以考虑抽象渐变、噪点、光晕或 CodePilot 报告截图作为背景元素

### 2. Glass Navigation

可转译为：

- 继续保留顶部固定居中导航
- 增强 `backdrop-blur` / `border` / `shadow`
- 保持胶囊形态

当前状态：

- StickyNav 已使用 `rounded-full` + `backdrop-blur-xl` + `border-white/10`
- 方向已正确，后续可微调透明度和边框

注意：

- 不照搬参考导航文案
- 当前导航仍保持 Hero / About / CodePilot / Contact

### 3. Spotlight / Reveal Feeling

可转译为：

- 不是立即实现双图片 reveal
- 而是先作为视觉方向
- 使用柔和 `radial-gradient` / cursor glow / background light spot
- 增强技术感和交互感

当前状态：

- HeroSection 已有 `radial-gradient` 背景
- 已有一个居中 `blur-3xl` 光晕

后续方向：

- 如果实现，优先做 CSS radial spotlight
- 不要先做 canvas + image mask
- 不要引入外部图片
- 不要让鼠标特效影响性能或移动端体验
- 可以做一个不依赖鼠标的静态 CSS 光晕增强

### 4. Premium Load Animation

可转译为：

- 轻量级 Hero 入场动画
- 标题轻微 fade-up / blur-in
- 卡片轻微 fade-up
- 尊重 `prefers-reduced-motion`

注意：

- 不过度动画
- 不引入 Framer Motion
- 不引入动画库
- 只用 CSS keyframes
- 动画时长控制在 0.4s–0.8s
- 只在首屏元素上使用

### 5. Bottom Information Blocks

可转译为：

- Hero 可以从纯左文右卡，调整成更有层次的首屏信息布局
- 底部或右侧可以承载一句项目价值说明

当前状态：

- HeroSection 已有左侧标题 + 右侧 aside 卡片的布局
- 可以优化信息层级和视觉权重

注意：

- 不新增虚假信息
- 不新增 Demo
- 不新增报告截图，除非用户提供真实素材

---

## Non-transferable Elements

以下内容不能转译到 Portfolio：

| 禁止项 | 原因 |
|---|---|
| Lithos 品牌名 | 属于参考项目，不属于 Portfolio |
| 地质行业文案（fossil / stone / sediment / crust / deep time 等） | 行业语境不匹配 |
| 地质图片 | 不适用于技术作品集 |
| Google Fonts | 项目规则禁止引入外部字体 |
| Playfair Display | 英文装饰字体，不适合中文技术作品集 |
| lucide-react | 项目规则禁止引入图标库 |
| Start Digging 按钮 | 参考品牌文案 |
| Course / Field Guides / Geology / Plans / Live Tour 导航 | 参考品牌导航结构 |
| cursor reveal 第二张图片的完整复杂实现 | 技术复杂度过高，且需要真实图片素材 |
| 外部图片 URL | 项目规则禁止使用外部图片资源 |

原因总结：

这些元素属于原参考项目语境，不属于 Portfolio。当前 Portfolio 是中文求职作品集，核心是 CodePilot，不是地质品牌落地页。

---

## Portfolio-specific Visual Direction

### 方向名称

```txt
Dark Technical Spotlight Portfolio
```

### 关键词

- 暗色
- 技术感
- 中文友好
- 玻璃导航
- 柔和光晕
- 克制动画
- CodePilot 项目叙事
- 开发者工具气质

### 一句话定义

一个以 CodePilot 为核心的暗色技术作品集，用克制中文排版、玻璃导航、柔和聚光背景和项目叙事，表达 AI 应用开发与 Agent 开发能力。

### 与参考风格的差异

| 维度 | Lithos 参考 | Portfolio 目标 |
|---|---|---|
| 品牌 | 地质品牌 | 开发者作品集 |
| 语言 | 英文 | 中文为主 |
| 字体 | Playfair Display | 系统字体栈 |
| 图片 | 地质实拍 | 抽象渐变 / CodePilot 产物 |
| 导航文案 | Course / Field Guides / Plans | Hero / About / CodePilot / Contact |
| 按钮文案 | Start Digging | 查看 CodePilot / GitHub / 联系我 |
| 情绪 | 大自然 / 深时间 | 技术 / 工程 / AI |
| 动画 | 复杂 canvas reveal | 轻量 CSS fade |

---

## Future Implementation Plan

### v1.17.0-hero-spotlight-layout

目标：

- 重构 Hero 视觉结构
- 保留中文友好字号
- 增加柔和背景光晕
- 优化首屏左右信息层级
- 保持导航固定玻璃质感
- 不接入外部图片
- 不新增依赖

具体内容：

- 评估 Hero 背景光晕的增强方案（更强的 radial-gradient 或多层光晕）
- 评估右侧 aside 卡片的视觉权重调整
- 评估首屏信息层级（标题 / 描述 / CTA / 侧边栏的视觉优先级）
- 保持 Typography System 不变
- 保持导航结构不变

### v1.18.0-premium-motion

目标：

- 增加轻量 CSS 入场动画
- Hero 标题 fade-up / blur-in
- 卡片 fade-up
- 尊重 `prefers-reduced-motion`
- 不引入动画库

具体内容：

- 在 `index.css` 中添加 CSS keyframes
- Hero h1 使用 fade-up + blur-in
- Hero aside 卡片使用延迟 fade-up
- 其他 Section 标题可选 fade-up
- 使用 `@media (prefers-reduced-motion: reduce)` 禁用动画
- 动画时长 0.4s–0.8s
- 不使用 JavaScript 触发动画（纯 CSS）

### v1.19.0-codepilot-proof

目标：

- 加入真实 CodePilot 项目证据
- 例如报告样例、截图、运行结果
- 前提是用户提供真实素材或项目中已有真实产物
- 不编造 Demo
- 不编造指标

具体内容：

- 等待用户提供 CodePilot 报告截图或运行截图
- 评估截图在 Hero 背景或 CodePilot Section 中的展示方式
- 不伪造 Star 数、代码量或其他指标
- 如果没有真实素材，跳过此版本

---

## Implementation Rules

后续 Claude 执行时必须遵守：

- 不复制参考品牌
- 不复制参考文案
- 不复制图片 URL
- 不加入 Lithos / geology / fossil / stone 等词到 `src/`
- 不引入 Google Fonts
- 不安装 lucide-react
- 不实现复杂 canvas reveal，除非用户单独批准
- 优先使用 CSS gradient / radial glow
- 优先适配中文标题
- 优先保持求职可读性
- 每轮只改一个小目标
- 每轮 commit message 必须带版本号
- 尊重 `prefers-reduced-motion`
- 不引入动画库
- 不使用外部图片
- 保持 Typography System 规则
- 保持导航结构稳定
