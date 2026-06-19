# Motion System Polish

## Scope

本轮在 BorderGlow 实验分支中补充页面级动效系统：

- Hero 保留独立 spotlight 背景和已有入场动效
- Hero 之后使用统一 low-contrast ambient background
- About / CodePilot / Contact 增加轻量 scroll reveal
- 主要卡片继续使用 BorderGlow hover
- 不接入 LineWaves / ProfileCard
- 不安装动画依赖

## Background Strategy

Hero 单独负责第一屏视觉冲击。
Hero 之后的页面不单独堆复杂背景，而使用统一的暗色氛围背景，保证页面整体一致。

实现方式：在 `App.tsx` 的 `<main>` 上添加 `page-ambient-bg` class，通过 `::before` 和 `::after` 伪元素提供固定定位的氛围背景层：

- `::before`：极淡紫粉色 radial-gradient + 暗色 linear-gradient 底色
- `::after`：微弱 grid 线条，带 mask-image 渐隐边缘

两层都使用 `position: fixed`、`pointer-events: none`、负 `z-index`，不影响 Hero 的独立背景和交互。

## Reveal Strategy

Section 入场只使用 fade-up / blur-in / small translateY。
不使用旋转、弹跳、大缩放或复杂视差。

实现方式：新增 `RevealOnScroll` 组件，基于 `IntersectionObserver`，无外部依赖。

应用方式：

- About：标题区 delay 0，三个卡片 stagger 80 / 140 / 200ms
- CodePilot：左侧内容 delay 0，右侧 BorderGlowCard delay 120ms
- Contact：左侧文案 delay 0，右侧联系卡 delay 120ms

## Reduced Motion

prefers-reduced-motion 下：

- Reveal 直接显示（opacity: 1, transform: none, filter: none）
- BorderGlow 动态层降级（已有逻辑）
- 页面仍保持可读和可用

## Files Changed

- `src/components/ui/RevealOnScroll.tsx` — 新增
- `src/components/ui/index.ts` — 新增 RevealOnScroll 导出
- `src/index.css` — 新增 reveal-on-scroll 样式和 page-ambient-bg 样式
- `src/App.tsx` — main 元素追加 page-ambient-bg class
- `src/components/sections/AboutSection.tsx` — 包裹 RevealOnScroll
- `src/components/sections/CodePilotSection.tsx` — 包裹 RevealOnScroll
- `src/components/sections/ContactSection.tsx` — 包裹 RevealOnScroll

## Review Notes

用户需要人工确认：

- 背景是否克制
- Section 入场是否自然
- BorderGlow 是否仍正常
- 移动端是否正常
- 是否值得合并 main

## Experiment Result

页面背景与 Section 入场动效已被用户确认满意。

当前结论：

- Hero 保留独立 spotlight 背景
- Hero 之后统一使用 low-contrast ambient background
- About / CodePilot / Contact 使用 RevealOnScroll
- BorderGlow 继续作为主要卡片 hover 动效
- 当前 motion system 可以作为后续页面扩展基础
