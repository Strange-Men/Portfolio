# Visual Identity Research

## 1. Scope

本文件记录 Portfolio v1.33.0-visual-identity-polish 前的视觉个人风格研究。

本轮只研究当前页面视觉表现，不修改页面源码。研究结果用于后续 Phase 13-2 小范围提升 Hero、Projects、About、Contact 与全局视觉一致性。

---

## 2. Current Version

- Current sealed version: v1.32.0-proof-polish
- Current live site: https://portfolio-rosy-ten-41.vercel.app/
- Current focus: make the Portfolio feel like a strong personal visual signature for HR / interviewers.

---

## 3. Current Strengths

### 暗色基调已成型

页面基础暗色 `#09090b` 统一，`site-ambient-bg` 提供紫粉 radial-gradient 环境光，整体不刺眼、不廉价。暗色基调是"高级感"的基础，这一步做对了。

### 字体系统有层次

CSS 自定义属性定义了 `text-display` / `text-section-title` / `text-body-lg` / `text-label` 等层级，`clamp()` 响应式缩放，`Inter` + 中文字体栈覆盖中英文。Typography 已经是工程上合格的。

### Hero 有入场仪式感

Hero 使用 `hero-anim` + `heroReveal` / `heroFadeUp` / `heroGlowIn` 三组 CSS 动画做 fade-up / blur-in，配合 `prefers-reduced-motion` 降级。这是对的——首屏需要有"进入感"。

### BorderGlowCard 交互有质感

BorderGlowCard 实现了鼠标追踪的 conic-gradient 边框光 + 外发光，移动端有 touch active 弱交互。这比普通 hover:scale 高级，是当前页面最独特的交互元素。

### 三项目内容真实、结构完整

每个项目有 description / painPoint / highlights / flow / techStack / links / proof，信息架构比大多数学生作品集完整。这本身就是竞争力。

### 页面结构干净

四个 Section（Hero / About / Projects / Contact）+ StickyNav，没有多余模块。信息密度合理，没有堆砌感。

---

## 4. Current Weaknesses

### 首屏记忆点不够强

Hero 的布局是"左侧标题 + 右侧项目索引卡"，这是暗色作品集的常见模式。标题"AI 应用开发 / Agent 开发 / Python 后端"是功能性描述，不是视觉主张。HR 看过很多类似页面后，很难记住这个首屏。

### 缺少个人视觉符号

没有 monogram、签名线、个人标记或任何只属于这个页面的视觉 anchor。如果把名字换掉，页面结构可以是任何人的。

### Hero 右侧 Selected Work 卡片像模板

`heroSummary` 的结构是 label + title + body + 项目列表，这是标准的信息卡片。它完成了信息传递，但没有"作品目录"的编辑感（editorial feel）。

### Projects 信息密度高，层级不够鲜明

每个项目卡片包含：subtitle → description → painPoint → highlights(标签) → proof(验证方式) → links(按钮)。右侧还有：flow(步骤) → techStack(标签)。信息是完整的，但视觉上缺乏"呼吸"——各层级之间的区分主要靠 `mt-4` / `mt-5` 间距和字号差异，缺少更强的视觉锚点（编号、分隔线、局部留白）。

### "验证方式"区域文字化

proof 字段以纯文本展示，只有一行 `text-xs font-medium uppercase tracking-widest text-zinc-500` 的小标题。验证方式是 Portfolio 的信任锚点，但当前它的视觉权重和普通段落差不多。

### About 区域像标准模板

三个等宽 BorderGlowCard（身份 / 方向 / 当前重点）+ 一段自我介绍 + focusTags。结构清楚，但"关于我"部分读起来像填表——缺少个人气质和审美驱动感。

### Contact 收束感可以更强

Contact 的布局和 Hero 类似（左侧文字 + 右侧信息卡），Gmail 按钮是白底圆角，视觉上够明显。但作为页面收尾，缺少一种"最终印象"的仪式感。

### 全局视觉有 AI 生成网页感

以下元素组合在一起容易让人觉得是 AI 生成的暗色作品集：

- 紫粉渐变 ambient 背景
- 到处使用 BorderGlowCard
- 每个 Section 用 `border-t border-white/10` 分隔
- 标签全部是 `Tag` 组件
- 间距和圆角高度统一（`rounded-3xl`、`p-6`、`gap-10`）

统一是优点，但过度统一会让页面失去"人味"。

### 动效克制但缺少惊喜

当前动效：Hero 入场 + RevealOnScroll + BorderGlow hover。这是正确的克制，但没有任何一个地方让人停下来想"这个细节不错"。缺少一个 micro-interaction 或视觉细节作为记忆点。

---

## 5. Recommended Visual Direction

### Dark Editorial AI Portfolio

关键词：

- Dark — 保持暗色基调，不转向亮色
- Editorial — 像高级数字杂志的排版，而不是工程文档
- Personal Signature — 有署名感，有只属于这个人的视觉标记
- AI Engineering — 体现 AI 工程实践，不是泛泛的"全栈开发"
- Controlled Glow — 光影克制，只在关键位置使用 glow
- Premium Project Index — 项目索引像作品目录，不像数据库列表
- Clear Proof Trail — 验证方式清晰但不文字化

为什么适合当前 Portfolio：

用户需要让页面补足其他项目 Demo 前端不够强的问题，同时又不能显得浮夸或不真实。这个方向不追求视觉爆炸，追求"冷静的高级感"——让 HR / 面试官觉得这个人有自己的审美判断力。

---

## 6. Section-by-section Recommendations

### 6.1 Hero

**当前问题：**

- 标题"AI 应用开发 / Agent 开发 / Python 后端"是功能列表，不是视觉主张
- "PORTFOLIO" 文字标签太平淡
- 右侧 Selected Work 卡片是标准信息卡，缺少编辑感
- 背景有多层 glow（hero-premium-bg + indigo/cyan/violet 圆形 + 网格），但没有一个聚焦点
- 缺少个人签名式视觉元素

**建议改法：**

1. Hero 标题增加更强的排版层级——考虑把名字或一个核心词做视觉放大，让标题不只是三行文字
2. 增加一个 subtle personal mark：可以是一个小型 monogram、一条签名线、或者一个极简的个人符号，放在 Hero 的特定位置
3. 右侧 Selected Work 改为更像"作品目录"的排版——增加项目编号的视觉权重、加入微妙的分隔线或节奏变化
4. 背景 glow 减少层数，聚焦到一个主要光晕，避免"到处发光"
5. "PORTFOLIO" 标签可以考虑改成更有署名感的表达

**收益：** 首屏记忆点显著增强，HR 第一眼能感受到"这个人有自己的设计感"。

**风险：** 低。改动集中在排版和视觉标记，不改变信息结构。

---

### 6.2 About

**当前问题：**

- 三个等宽卡片（身份 / 方向 / 当前重点）信息密度低，每个只有一行内容
- 自我介绍段落是纯文本，缺少个人气质
- focusTags 和 Hero 的 directions 重复
- 整体读起来像"填写个人信息表"

**建议改法：**

1. 自我介绍文案向"AI 工程学习者 + 审美驱动的项目实践者"方向调整——不是堆砌方向关键词，而是表达为什么做这些项目、学习路径是什么
2. 三个信息卡可以考虑合并或重新设计——当前每个卡只有一行内容，视觉上太"空"
3. 增加一个能体现个人风格的小元素——比如一段关于"为什么做 AI 项目"的短句，或者一个更个性化的标签

**收益：** About 从"信息表"变成"有温度的自我介绍"。

**风险：** 低。注意不要夸大资历，保持真实。

---

### 6.3 Projects

**当前问题：**

- 三项目平级展示，每个项目的视觉模板完全相同
- 信息层级：subtitle → description → painPoint → highlights → proof → links → flow → techStack，层级多但区分度不够
- "验证方式"视觉权重太低
- 缺少项目编号感和节奏感
- 右侧 BorderGlowCard 包含 flow + techStack，信息量大但视觉层次单一

**建议改法：**

1. 增加项目编号的视觉表现——不只是数字，而是让编号成为视觉锚点
2. "验证方式"区域提升视觉权重——可以用更明确的样式（如左边框、背景色块）来区分
3. 优化项目卡片的内部间距和层级——让 description / painPoint / highlights 之间有更清晰的视觉分组
4. 保持三项目平级，但可以考虑让 CodePilot 在视觉上略作强调（不改结构，只调样式）
5. 右侧卡片的 flow 步骤和 techStack 可以用更简洁的视觉语言

**收益：** 项目区域从"信息堆叠"变成"有节奏的项目展示"。

**风险：** 低。不改变项目内容和链接，只调整展示层级。

---

### 6.4 Contact

**当前问题：**

- 布局和 Hero 对称（左文右卡），但作为页面收尾缺少收束感
- "当前页面只保留真实联系方式，不放未确认的 Demo 或下载链接"这句话虽然诚实，但有点像"免责声明"
- Gmail 按钮和 GitHub 按钮并排，视觉上 Gmail 不够突出

**建议改法：**

1. 简化 Contact 的文案——去掉"当前页面只保留真实联系方式"这句话，让收尾更干净
2. Gmail 按钮可以作为主 CTA 更突出
3. 增加一个微妙的收束元素——比如页面底部的签名线或极简 footer

**收益：** Contact 从"联系信息区"变成"干净的最终印象"。

**风险：** 低。Contact 本身内容简单，改动空间小但效果明显。

---

### 6.5 Global Motion

**当前问题：**

- BorderGlowCard 在 About、Projects、Contact 三个 Section 都使用，视觉上有点"到处发光"
- RevealOnScroll 统一使用 `translateY(14px) + blur(4px)` 入场，所有 Section 体验相同
- 没有任何 micro-interaction 作为记忆点

**建议改法：**

1. 考虑减少 BorderGlowCard 的使用范围——不一定每个卡片都需要 border glow，可以只在关键位置使用
2. RevealOnScroll 可以对不同 Section 使用略有差异的 delay 或效果
3. 增加 1-2 个 micro-interaction——比如 hover 时的微小变化、focus 状态的精致处理
4. 保持不引入新依赖的原则，用 CSS 实现

**收益：** 动效从"统一入场"变成"有层次的交互体验"。

**风险：** 中低。注意不要过度动效，保持克制。

---

### 6.6 Mobile Risk

**当前问题：**

- 移动端已有 touch glow 降级和背景降噪，基础扎实
- Hero 在小屏上标题可能仍然较大
- Projects 卡片在小屏上信息密度更高
- BorderGlowCard 在触摸设备上只有 touch active 弱交互，桌面端的 hover 效果无法完全迁移

**建议改法：**

1. 移动端 Hero 标题字号检查——`clamp(2.75rem, 5.6vw, 4rem)` 在 320px 屏幕上约为 2.75rem，可能仍然偏大
2. Projects 移动端考虑简化展示——不删内容，但可以调整间距和字号
3. 不在移动端增加新动效——保持 touch glow 和 RevealOnScroll 即可

**收益：** 移动端体验不退化。

**风险：** 低。移动端改动以微调为主。

---

## 7. Phase 13-2 Recommended Scope

Phase 13-2 不要大改全站，只做以下内容：

### 1. Hero 视觉主张增强

- 更强的标题排版——考虑名字放大或核心词视觉强调
- 增加个人 signature 元素（subtle personal mark / monogram / signature line）
- 右侧 Selected Work 更像高级目录——增强编号视觉权重、调整排版节奏
- 背景 glow 聚焦，减少散射层数

### 2. Projects 卡片层级优化

- 增加项目编号的视觉锚点
- "验证方式"区域提升视觉权重（左边框 / 背景色块 / 更明确的样式）
- 优化 description / painPoint / highlights 的内部分组
- 保持三项目平级

### 3. About 个人风格增强

- 自我介绍文案调整为更有个人气质的表达
- 不夸大资历，不装资深，保持"AI 工程学习者 + 项目实践者"的真实定位
- 信息卡片可以重新设计或合并

### 4. Contact 收束感增强

- 简化收尾文案
- Gmail 按钮作为主 CTA 更突出
- 考虑增加极简 footer 或签名线

### 5. 全局微交互微调

- hover / focus / reveal 更精致
- BorderGlowCard 使用范围可以有选择性
- 不新增重依赖

---

## 8. Out of Scope

以下内容不在 Phase 13-2 范围内：

- 不新增 WebGL / 3D 场景
- 不新增粒子雨 / 粒子背景
- 不新增 AI Chat 入口
- 不新增博客系统
- 不新增简历下载按钮
- 不新增第四个项目
- 不新增复杂截图墙
- 不新增技能雷达图
- 不修改其他项目仓库
- 不引入大型动画库（Framer Motion / GSAP / ogl）
- 不新增赛博朋克霓虹风格
- 不做低质玻璃拟态堆叠

---

## 9. Proposed Phase 13-2 Files

后续可能修改的文件：

- `src/components/sections/HeroSection.tsx` — Hero 视觉主张增强
- `src/components/sections/AboutSection.tsx` — About 个人风格增强
- `src/components/sections/CodePilotSection.tsx` — Projects 卡片层级优化
- `src/components/sections/ContactSection.tsx` — Contact 收束感增强
- `src/index.css` — 全局样式微调
- `src/data/profile.ts` — About 文案调整
- `docs/41_VISUAL_IDENTITY_RESEARCH.md` — 本研究文档
- `docs/DEV_STATUS.md` — 开发状态更新
- `docs/20_VERSION_HISTORY.md` — 版本历史更新
- `docs/01_CURRENT_PROJECT_CONTEXT.md` — 项目上下文更新

注意：

- Phase 13-2 不应修改 `links.ts`，除非发现真实链接错误。
- Phase 13-2 不应修改项目事实内容（`projects.ts`），除非只是调整展示层级。
- Phase 13-2 不应修改 `index.html`，除非需要补充 meta 信息。

---

## 10. Next Step

下一步进入 Phase 13-2：Visual Identity Polish。

Phase 13-2 应基于本研究文档，小范围提升 Hero 首屏记忆点、Projects 卡片层级、About 个人风格和全局微交互，目标是让 Portfolio 更像高级个人作品集，而不是普通项目展示页。

核心目标：让 HR / 面试官打开页面后，能感受到"这个人有自己的审美判断力"，而不是"这是一个 AI 生成的标准暗色作品集"。
