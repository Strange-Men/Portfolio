# Portfolio Design & Motion Rules

## 1. Purpose

本文件用于锁定 Portfolio 后续页面设计与动效规则，避免后续迭代时风格发散、动画堆叠或重新引入不适合当前求职作品集的复杂效果。

---

## 2. Current Visual Direction

```txt
Dark Technical Portfolio
Glass Card
Purple / Pink Border Glow
Low-contrast Ambient Background
HR-readable Content First
```

当前 Portfolio 是面向求职展示的个人作品集网站，不是动画实验页。视觉和动效必须服务于可读性、可信度和项目展示。

---

## 3. Color Rules

当前动效和背景主色：

```txt
Page background base: #09090b / #0b0910
Card motion base: #120F17
BorderGlow colors: #c084fc / #eb1f94 / #f838ea
Text primary: near-white
Text secondary: zinc / muted gray
```

规则：

- 不要重新引入明显蓝青色大光晕
- 不要做彩虹色边框
- 不要让动效颜色抢正文内容

---

## 4. Background Rules

- Hero 可以保留独立 spotlight / glow / grid 背景，负责第一屏视觉冲击
- Hero 之后统一使用 low-contrast ambient background
- 不要给 About / CodePilot / Contact 分别设计完全不同的背景
- 不要使用 WebGL / canvas / 外部图片作为背景
- 不要接入 LineWaves，除非未来单独开实验版本并明确性能预算

---

## 5. Motion Rules

当前允许的动效：

1. Hero 首屏入场动画
2. Section scroll reveal
3. 主要玻璃卡片 BorderGlow hover
4. 轻量 stagger

禁止的动效：

1. 大幅旋转
2. 弹跳
3. 大缩放
4. 复杂视差
5. 页面级 WebGL 动画
6. 到处飞入飞出
7. 给按钮 / tag / chip 堆特效

---

## 6. BorderGlow Rules

BorderGlow 是当前 Portfolio 的主要卡片 hover 交互语言。

### 应用范围

允许：

- Hero 右侧项目信息卡
- About 信息卡
- CodePilot 项目流程卡
- Contact 联系信息卡
- 未来项目卡片

不允许：

- 顶部导航
- 普通按钮
- Tag / Chip
- 正文段落
- 整个 Section 外层

### 视觉要求

- 鼠标靠近哪段边缘，哪段边缘发亮
- 紫粉色边境光辉
- 不出现大面积内部光晕
- 不出现外部大雾团
- 文字始终清晰

---

## 7. RevealOnScroll Rules

RevealOnScroll 只用于 Hero 之后的 Section。Hero 使用自己的 hero-anim 系列动画，不混用 RevealOnScroll。

### 允许

- About Section
- CodePilot Section
- Contact Section
- 未来新增真实项目 Section

### 参数规则

- Section 主内容 delay 0
- 辅助卡片 delay 80-200ms
- 动效保持 fade-up / blur-in / small translateY

---

## 8. Future Project Card Rules

未来新增真实项目时，项目卡片必须遵守：

1. 项目链接放在项目卡片内
2. Contact 只保留联系方式
3. 每个项目卡片可以复用 BorderGlowCard
4. 不新增未完成项目
5. 不新增假 Demo
6. 不新增不可访问链接

---

## 9. Accessibility & Reduced Motion

- 所有新动效必须支持 prefers-reduced-motion
- 移动端 hover 动效必须降级或禁用
- 动效不能影响文字阅读
- 动效不能导致横向滚动
- npm run build 必须通过

---

## 10. Future Change Process

后续如果要新增视觉或动效：

1. 先写文档说明目的和范围
2. 开实验分支
3. 只做小范围试点
4. 人工验收后再合并 main
5. 合并后再创建版本 tag
