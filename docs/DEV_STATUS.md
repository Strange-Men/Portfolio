# DEV_STATUS

当前阶段：Phase 7-1

## 已完成

- Portfolio MVP 已封板
- Portfolio 已部署到 Vercel
- 当前线上地址：https://portfolio-rosy-ten-41.vercel.app/
- Phase 6-1：内容表达优化
- Phase 6-2：导航与排版优化
- Phase 6-3：中文友好 Typography System
- Phase 6-4：参考风格转译与设计规格
- Phase 6-5：Hero Spotlight Layout
- Phase 6-6：轻量 Hero 入场动画
- Phase 6-7：CodePilot 紧凑项目证明
- Phase 6-8：简历与投递表达对齐文档
- Phase 6-9：信息架构与文案修正
- Phase 6-10：最终视觉、响应式、链接和构建终检
- Phase 6-11：动画交互规范沉淀
- Phase 6-12：投递版本冻结文档
- Phase 6-12.1：创建 v1.23.0-release-freeze tag
- Phase 6-12.2：创建 v1.23.1-contact-copy tag
- Phase 7-1：BorderGlow 项目卡片试点

## v1.24.0-borderglow-experiment 结论

本轮在实验分支中完成 BorderGlow 项目卡片试点：

- 创建 experiment/borderglow-card 分支
- 新增轻量 BorderGlowCard 组件
- 只在 CodePilot 项目卡片上试点
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装 ogl
- 未新增动画库
- 未新增 Demo
- 未新增简历下载
- 未新增项目
- 支持移动端降级
- 支持 prefers-reduced-motion
- npm run build：待记录

## BorderGlow Experiment Adjustment

用户人工测试后反馈：上一版效果不符合预期，更像内部径向光，不像参考图中的边缘追光。

本轮调整：

- 将 BorderGlowCard 从 cursor radial glow 改为 edge-proximity / cursor-angle 逻辑
- 增加 edge-light 外侧光辉层
- 目标效果：靠近卡片边缘时出现方向性边缘光
- 仍只在 CodePilot 项目流程卡片试点
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装依赖

## BorderGlow Direction and Coverage Fix

用户反馈上一版存在两个问题：

- 光效方向与鼠标位置相反
- 只有单个 CodePilot 流程卡有动效，页面主要卡片动效不统一

本轮调整：

- 将光效方向改为直接跟随 --glow-x / --glow-y
- 保留 --edge-proximity 控制边缘接近时才增强光效
- 扩展到主要玻璃卡片：
  - Hero CodePilot 信息卡
  - About 三个信息卡
  - CodePilot 项目流程卡
  - Contact 联系信息卡
- 不应用到按钮、tag、chip、导航和正文
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装依赖

## BorderGlow Visual Style Tuning

用户提供了更明确的参考图和参数，本轮根据参考调整 BorderGlow 视觉：

- 使用 #120F17 作为卡片动效背景基准
- 使用 #c084fc / #eb1f94 / #f838ea 作为紫粉色追光颜色
- 移除旧的 .edge-light 外部 blur 层
- ::before 仅用于边框追光（160px radial-gradient）
- ::after 仅用于极微弱边缘柔光（opacity 上限 0.05）
- CSS overflow 从 visible 改为 hidden
- 不使用蓝青色 #818cf8 / #22d3ee
- 不使用大范围 blur halo
- 不应用到按钮、tag、chip、导航和正文
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装依赖

## BorderGlow Faithful Reference Port

用户反馈自制简化版 BorderGlow 仍不接近目标效果，本轮改为忠实移植 React Bits BorderGlow 的核心机制：

- 恢复 edge-proximity / cursor-angle 方向控制
- 恢复 mesh-gradient border（7 层 radial-gradient + conic-gradient base）
- 恢复 edge-light 边缘外侧光层（conic mask + box-shadow glow）
- 恢复 ::before conic-gradient cone mask 方向性
- 恢复 ::after 多层 mask-composite 内部填充
- 压低 fillOpacity 和外部 glow，避免大面积光晕
- 使用紫粉色参考配色 #c084fc / #eb1f94 / #f838ea
- 大卡片：glowIntensity=0.82, fillOpacity=0.08
- 小卡片：glowIntensity=0.58, fillOpacity=0.04
- 保持主要卡片统一动效
- 不接入 LineWaves
- 不接入 ProfileCard
- 不安装依赖

## 版本状态

当前稳定投递版本：

```txt
v1.23.1-contact-copy
```

当前实验分支：

```txt
experiment/borderglow-card
```

当前线上地址：

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## 当前未做

* 没有自定义域名
* 没有接入 LineWaves
* 没有接入 ProfileCard
* 没有安装 ogl
* 没有 Demo 链接
* 没有后端
* 没有数据库
* 没有表单提交
* 没有新增更多项目

## Motion System Polish

用户反馈 BorderGlow 效果满意，希望继续完善页面其他区域的动效和背景。

本轮调整：

- 保留 Hero 独立 spotlight / glow 背景
- 为 Hero 之后增加统一 low-contrast ambient background
- 新增 RevealOnScroll 轻量组件（IntersectionObserver，无依赖）
- 为 About / CodePilot / Contact 增加 scroll reveal（fade-up + blur-in + translateY）
- About 三个卡片 stagger 80 / 140 / 200ms
- CodePilot 左侧 delay 0，右侧 BorderGlowCard delay 120ms
- Contact 左侧文案 delay 0，右侧联系卡 delay 120ms
- 支持 prefers-reduced-motion
- 保持 BorderGlow 作为主要卡片 hover 动效
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装动画依赖

## 下一步

用户人工确认效果后再决定：

1. 合并到 main 并创建 v1.24.0-borderglow-experiment tag
2. 或放弃实验，保留 v1.23.1-contact-copy 作为稳定投递版本

## Phase 7-3：BorderGlow Motion System Merge

用户人工确认 BorderGlow、页面背景和 Section 入场动效效果满意。

本轮完成：

- 将 experiment/borderglow-card 合并回 main
- 保留 BorderGlowCard 作为主要玻璃卡片 hover 交互
- 保留 RevealOnScroll 作为 Hero 之后 Section 入场动效
- 保留 Hero 独立 spotlight / hero-anim 动效
- 新增 docs/34_DESIGN_MOTION_RULES.md
- 更新 Motion / BorderGlow / Motion System 文档最终结论
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装依赖
- 未新增 Demo
- 未新增简历下载
- 未新增项目

## 版本状态

当前最新稳定 tag：

```txt
v1.23.1-contact-copy
```

当前 main 已合并 v1.24.0-borderglow-experiment 相关代码与规范文档。

下一步允许单独创建：

```txt
v1.24.0-borderglow-motion-system
```

本轮不要打 tag。
