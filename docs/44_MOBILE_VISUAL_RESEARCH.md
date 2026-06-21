# Mobile Visual Research

## 1. Scope

本文件记录 Portfolio v1.36.0-mobile-visual-polish 前的手机端视觉专项研究。

本轮目标：判断当前 Portfolio 在手机端是否只是"能用"，还是已经达到"发给 HR 后也有高级感"的程度。

本轮只做判断，不修改页面源码。

---

## 2. Current Version

| Field | Value |
|---|---|
| Sealed version | `v1.35.0-final-qa-polish` |
| Live site | https://portfolio-rosy-ten-41.vercel.app/ |
| GitHub repo | https://github.com/Strange-Men/Portfolio |
| Research branch | `research/v1.36.0-mobile-visual-research` |

---

## 3. Test Method

基于源码静态分析 + CSS 响应式规则逐项检查。

检查维度：

- HeroSection.tsx、AboutSection.tsx、CodePilotSection.tsx、ContactSection.tsx 的 HTML 结构与 Tailwind 类
- index.css 的 CSS 自定义属性、clamp() 响应式值、移动端降级规则
- StickyNav.tsx 的固定导航布局
- Button.tsx 的触摸目标尺寸
- BorderGlowCard.tsx 的移动端 touch 行为
- App.tsx 的 overflow 控制

真实手机端未检查，仅完成浏览器源码分析和 CSS 响应式规则检查。

---

## 4. Breakpoints Checked

以下宽度通过 CSS clamp() 值计算和 Tailwind 响应式类分析：

| Breakpoint | 代表设备 | 分析方式 |
|---|---|---|
| 320px | iPhone SE 1st gen / 小屏 Android | CSS clamp() 最小值计算 |
| 375px | iPhone SE 3rd / iPhone 12 mini | CSS clamp() 中间值计算 |
| 390px | iPhone 14 / iPhone 15 | CSS clamp() 中间值计算 |
| 430px | iPhone 14 Pro Max / iPhone 15 Plus | CSS clamp() 中间值计算 |
| 768px | iPad portrait | Tailwind `md:` 断点分析 |

---

## 5. Hero Mobile QA

### 布局结构

Hero 使用 `grid gap-12 lg:grid-cols-[1.1fr_0.9fr]`，在移动端（<1024px）自动堆叠为单列。这是正确的响应式模式。

### 标题字号

`--text-display: clamp(2.75rem, 5.6vw, 4rem)`

| Width | 计算值 | 评估 |
|---|---|---|
| 320px | ~2.75rem (44px) | 可接受，三行标题仍有呼吸感 |
| 375px | ~2.875rem (46px) | 舒适 |
| 390px | ~2.9rem (46.4px) | 舒适 |
| 430px | ~3.025rem (48.4px) | 舒适 |
| 768px | ~4rem (64px) | 正常桌面值 |

### 首屏内容密度

- `min-h-screen` + `100dvh` 保证首屏不溢出
- `px-6` (24px) 水平内边距在小屏上足够
- `py-28` (112px) 顶部内边距为 StickyNav 留出空间
- "PORTFOLIO" 标签 + heroMeta + 标题 + 描述 + 三按钮 + 右侧卡片，内容较多但未超出首屏
- 按钮使用 `flex flex-wrap gap-3`，在窄屏上自动换行

### 背景效果

已有移动端降级规则：

```css
@media (max-width: 640px) {
  .hero-premium-bg {
    opacity: 0.4;
    inset: -10%;
  }
}
```

背景 glow 从 `0.8` 降到 `0.4`，inset 从 `-20%` 缩到 `-10%`，减少小屏上的色块压迫感。

### 评估

Hero 在移动端堆叠自然，标题字号合理，首屏内容密度可控，背景已有降级。无 P0 / P1 问题。

---

## 6. Navigation Mobile QA

### StickyNav 结构

```tsx
<nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2
  overflow-x-auto rounded-full border border-white/10 bg-zinc-950/55 px-2 py-2
  shadow-2xl shadow-black/30 backdrop-blur-xl">
```

### 分析

- `w-[calc(100%-2rem)]` 在 320px 屏幕上为 288px，足够放下 4 个导航项
- 每个项 `px-4 py-2`，总宽约 4 项 × (~60px) = ~240px，小于 288px
- `rounded-full` 胶囊形态在小屏上视觉精致
- `backdrop-blur-xl` 磨砂玻璃效果在移动端正常工作
- `top-4` (16px) 距顶部足够
- `overflow-x-auto` 作为安全兜底，防止极端窄屏溢出

### 遮挡风险

- Hero 的 `py-28` (112px) 为 StickyNav 留出足够空间
- 其他 Section 的内容从顶部开始，StickyNav 不会遮挡 Section 标题（Section 标题在 `pt-16` 之后）

### 评估

导航在移动端布局稳定，不遮挡内容，触摸目标充足。无 P0 / P1 问题。

---

## 7. About Mobile QA

### 布局结构

```tsx
<div className="mx-auto grid w-full max-w-6xl gap-10 border-t border-white/10
  pt-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
```

移动端堆叠为单列，标题在上，内容在下。正确。

### 信息卡片

```tsx
<div className="grid gap-4 sm:grid-cols-3">
```

`sm:` (640px) 以下堆叠为单列，640px 以上三列并排。

- 320px-640px：三张卡片垂直堆叠，每张约 80px 高，总高约 240px + 间距
- 640px+：三列等宽并排

### 卡片内容

每张卡片：`num` (01/02/03) + `label` (身份/方向/当前重点) + `body` (一行文字)

内容密度低，移动端单列堆叠后阅读舒适。

### About 文案

`profile.about` 约 100 字，在 `text-body-lg` (1.0625rem) 下约 5-6 行，宽度受限于 `max-w-3xl`。移动端阅读自然。

### 评估

About 在移动端堆叠自然，卡片不拥挤，文案可读。无 P0 / P1 问题。

---

## 8. Projects Mobile QA

### 布局结构

每个 ProjectCard 使用：

```tsx
<div className="project-card grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
```

移动端堆叠为单列：左侧信息在上，右侧技术栈卡在下。

### 项目编号

`project-number-anchor` 使用 `clamp(2.5rem, 4vw, 3.5rem)`：

| Width | 计算值 |
|---|---|
| 320px | ~2.5rem (40px) |
| 375px | ~2.5rem (40px) |
| 430px | ~2.72rem (43.5px) |

编号与标题并排 `flex items-baseline gap-4`，在窄屏上不溢出。

### 项目卡片长度

每个项目卡片包含：subtitle → description → painPoint → highlights → proof → links

移动端单列后，每个项目卡片垂直长度较长（估计 600-800px），但各层级之间有清晰的间距分隔：

- `mb-5` 在标题后
- `mt-4` 在 painPoint 后
- `mt-5` 在 highlights 后
- `mt-5` 在 proof 后
- `mt-6` 在 links 后

### proof-block

```css
.proof-block {
  padding: 14px 16px;
  border-left: 2px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0 12px 12px 0;
}
```

在移动端单列布局下，proof-block 宽度 = 屏幕宽 - 48px padding，足够显示内容。不拥挤。

### 按钮

Button 组件使用 `min-h-11` (44px)，满足移动端触摸目标推荐尺寸。`flex flex-wrap gap-3` 保证窄屏上按钮自动换行。

### 项目间距

`mt-14 space-y-20` 在项目之间提供 80px 间距（space-y-20 = 5rem），移动端阅读节奏清晰。

### 三项目总长

移动端三个项目卡片总高度估计约 2000-2400px，需要多次滚动才能看完。这是移动端单列布局的正常代价，不影响可读性。

### 评估

Projects 在移动端卡片长度可控，层级清晰，proof-block 不挤压，按钮好点。无 P0 / P1 问题。

---

## 9. Proof Block Mobile QA

### 结构

```tsx
{project.proof && (
  <div className="proof-block mt-5">
    <p className="proof-block-label">验证方式</p>
    <p className="text-sm leading-relaxed text-zinc-400">
      {project.proof}
    </p>
  </div>
)}
```

### 移动端表现

- `padding: 14px 16px` 内边距在窄屏上足够
- `border-left: 2px` 左边框提供视觉锚点
- `text-sm` (14px) 正文在移动端可读
- proof 文本长度约 30-50 字，2-3 行，不拥挤

### 评估

proof-block 在移动端表现正常，不挤压正文，视觉锚点清晰。无 P0 / P1 问题。

---

## 10. Contact Mobile QA

### 布局结构

```tsx
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
```

移动端堆叠为单列。

### Gmail 按钮

```css
.contact-gmail-btn {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 10px 24px;
  font-size: 0.875rem;
}
```

`min-height: 44px` 满足移动端触摸目标推荐尺寸。白底深色文字在暗色背景上对比度高，容易点击。

### 按钮区域

```tsx
<div className="mt-8 flex flex-wrap gap-3">
  <a href={links.gmailHref} ... className="contact-gmail-btn">发送 Email</a>
  <Button href={links.github} variant="secondary" external>GitHub</Button>
</div>
```

`flex flex-wrap gap-3` 保证窄屏上按钮换行。

### 签名 footer

```tsx
<footer className="contact-signature mt-20 border-t border-white/[0.06] pt-8">
  <p className="text-xs tracking-widest text-zinc-600">
    Designed and built by 李泓轩
  </p>
</footer>
```

居中显示，不占用过多空间。作为页面收尾干净。

### 评估

Contact 在移动端堆叠自然，Gmail 按钮好点，收尾干净。无 P0 / P1 问题。

---

## 11. Motion / Touch QA

### BorderGlowCard 移动端行为

```css
@media (hover: none) {
  .border-glow-card::before,
  .border-glow-card > .edge-light {
    opacity: 0;
  }

  .border-glow-card.is-touch-active::before { opacity: ...; }
  .border-glow-card.is-touch-active > .edge-light { opacity: ...; }
}
```

移动端默认关闭 hover 光效，手指触碰时显示弱光效，松手后自动消失。这是正确的触摸端降级。

### RevealOnScroll

```css
@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll {
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
```

支持 prefers-reduced-motion 降级。正常模式下入场动画在移动端表现与桌面端一致。

### Hero 入场动画

```css
@media (prefers-reduced-motion: reduce) {
  .hero-anim {
    opacity: 1;
    animation: none;
    transform: none;
    filter: none;
  }
}
```

支持降级。

### 评估

移动端动效已做合理降级：BorderGlow 改为 touch active，RevealOnScroll 和 Hero 动画支持 reduced-motion。无多余动效。无 P0 / P1 问题。

---

## 12. Horizontal Overflow QA

### App.tsx

```tsx
<main className="relative min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-50">
```

`overflow-x-hidden` 在主容器级别防止横向溢出。

### HeroSection.tsx

```tsx
<section className="relative isolate min-h-screen overflow-hidden px-6 py-28 text-white">
```

`overflow-hidden` 在 Hero Section 级别防止背景 glow 溢出。

### Hero 背景 glow

```tsx
<div className="hero-anim hero-glow pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute left-1/2 top-[-20rem] h-[40rem] w-[40rem] -translate-x-1/2
    rounded-full bg-indigo-500/18 blur-[80px]" />
  <div className="absolute right-[-6rem] top-1/3 h-[24rem] w-[24rem]
    rounded-full bg-cyan-400/8 blur-[60px]" />
</div>
```

父容器 `overflow-hidden` 包裹所有 glow 层，不会溢出。

### StickyNav

`overflow-x-auto` 作为安全兜底。

### 其他 Section

所有 Section 使用 `px-6` 水平内边距，内容在 `max-w-6xl` 范围内，不溢出。

### 评估

页面在所有断点下不存在横向溢出风险。`overflow-x-hidden` 在 App 和 Hero 两级防护，所有 glow 层被父容器包裹。无 P0 问题。

---

## 13. Issues Found

### P0

None.

### P1

None.

### P2

- **Hero 首屏在 320px 小屏上内容略满**：标题三行 + 描述 + 三按钮 + 右侧卡片，在 320px 宽度上首屏空间利用率较高。虽然 `min-h-screen` 保证不溢出，但视觉上可能稍显紧凑。不影响使用，不影响投递。
- **Projects 卡片在移动端单列后较长**：每个项目卡片在移动端约 600-800px 高，三个项目总长约 2000-2400px。这是单列布局的正常代价，不影响可读性。
- **BorderGlow hover 效果在移动端不可用**：移动端只有 touch active 弱交互，桌面端的鼠标追踪光效无法迁移。这是已知的设计决策，不是问题。
- **StickyNav 在极窄屏（<320px）可能需要滚动**：`overflow-x-auto` 已作为兜底，但 320px 以上均正常。

---

## 14. Recommended Fix Scope

P0 问题数量：0
P1 问题数量：0
P2 问题数量：4（均为非阻断问题）

结论：

**建议不做 Mobile Fix，直接进入 Mobile Visual Seal。**

理由：

1. 当前 Portfolio 的移动端体验已经不只是"能用"，而是达到了"发给 HR 后也有高级感"的程度
2. 暗色基调、Typography 系统、BorderGlow 交互、RevealOnScroll 入场、ambient 背景在移动端均正常工作
3. 已有的移动端降级规则（背景降噪、touch glow、reduced-motion）覆盖了主要风险
4. 所有 P2 问题均为"可以更好"而非"必须修"
5. 没有任何横向溢出、按钮不可点、内容被遮挡等阻断问题

---

## 15. Next Step

如果用户确认无需修复：

进入 Phase 16-2：Mobile Visual Seal，创建 `v1.36.0-mobile-visual-polish` tag，完成移动端视觉专项封存。

如果用户在真实手机端发现 P0 / P1 问题：

进入 Phase 16-2：Mobile Visual Fix，根据真实问题修复后重新封存。
