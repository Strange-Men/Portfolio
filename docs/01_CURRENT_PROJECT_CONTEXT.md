# Current Project Context

这是后续 AI 接管项目时的"最小当前上下文"。
控制在 200-300 行以内。
不要复制所有历史。
只写当前状态、技术栈、页面结构、设计规则、禁止项、下一步。

---

## 1. Project Identity

Portfolio 是一个面向求职展示的个人作品集网站。

当前定位：

- 展示用户的 AI 应用开发 / Agent 开发 / Python 后端方向能力
- 当前第一版重点展示 CodePilot 项目
- 不虚构项目
- 不放假 Demo
- 不放未确认简历下载

---

## 2. Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- npm
- Vercel
- 静态单页应用

当前没有：

- 后端
- 数据库
- 登录
- 表单提交
- LLM API
- CMS

---

## 3. Current Page Structure

当前页面顺序：

1. Hero
2. About
3. CodePilot
4. Contact

锚点：

- `#hero`
- `#about`
- `#codepilot`
- `#contact`

---

## 4. Current Version

当前最新版本：

`v1.36.0-mobile-visual-polish`

当前线上地址：

`https://portfolio-rosy-ten-41.vercel.app/`

当前 GitHub 仓库：

`https://github.com/Strange-Men/Portfolio`

CodePilot 仓库：

`https://github.com/Strange-Men/CodePilot`

当前状态：

当前 Portfolio 已完成 Mobile Visual Polish：

- 移动端 Hero 检查通过
- 移动端导航检查通过
- 移动端 About 检查通过
- 移动端 Projects 检查通过
- proof-block 移动端阅读体验检查通过
- Contact 和 Gmail 按钮移动端检查通过
- 横向溢出风险检查通过
- 无 P0 / P1 阻断问题

说明：本轮主要基于源码静态分析、CSS 响应式规则和断点推导；真实手机端未检查，不伪造真机结论。

当前 Portfolio 可继续作为稳定作品集使用，后续如需继续开发，应优先选择有明确收益的小版本。

---

## 5. Current Design System

当前视觉方向：

- Dark Technical Portfolio
- Glass Card
- Purple / Pink BorderGlow
- Low-contrast Ambient Background
- HR-readable Content First

当前动效：

- Hero 独立 spotlight / hero-anim
- 全站统一 `site-ambient-bg` 作为底层背景（移动端有单独降噪规则）
- Hero 只叠加 spotlight / grid / glow 装饰层，不再使用独立实体黑底
- About / CodePilot / Contact 使用 RevealOnScroll
- 主要玻璃卡片使用 BorderGlowCard（生产效果关闭内部 fill 层，只保留边框追光和轻微边缘外光）
- 移动端 BorderGlow 支持 touch active 弱交互（手指点下显示边框光，松手后自动消失）

当前 Vercel 线上页面已由用户确认桌面端和手机端效果均不错。

当前生产效果包含：

- BorderGlow 主要卡片 hover
- 移动端 touch glow
- RevealOnScroll Section 入场
- 全站 ambient background
- 移动端背景降噪
- BorderGlow 内部 fill 层关闭，避免卡片内部粉雾

---

## 6. Motion Rules Summary

允许：

- Hero 入场动画
- Section scroll reveal
- 主要玻璃卡片 BorderGlow hover
- 轻量 stagger

禁止：

- LineWaves
- ProfileCard
- WebGL 背景
- Framer Motion / GSAP
- 到处飞入飞出
- 给按钮 / tag / chip 堆特效

---

## 7. Content Rules

Contact 只保留联系方式。
项目链接放在对应项目区块。
未来新增项目时，扩展项目卡片，不把项目仓库塞到 Contact。

---

## 8. Forbidden Content

以下内容不得进入正式页面 `src/`：

- ProfileAgent
- CustomerOps
- 数字孪生
- 智慧校园
- Lithos
- geology
- fossil
- stone
- sediment
- crust
- deep time
- Layers hold
- tales of time
- Start Digging
- Course
- Field Guides
- Live Tour

---

## 9. Development Rules

- 小步迭代
- 每轮只做一个目标
- 修改前检查 git status
- 不 force push
- 不 reset --hard
- 不 clean -fd
- 不 rebase
- 不改写旧 commit
- 不直接大改 main
- 实验性功能先开分支
- 每个稳定版本单独打 tag

---

## 10. Next Recommended Step

当前下一步：

- v1.36.0-mobile-visual-polish 已封存
- Portfolio 当前已经完成手机端视觉专项检查
- 建议后续不要再对首页做无目标大改
- 如果继续开发，建议进入 v1.37.0-case-study-research，研究是否增加 CodePilot 深度案例区
