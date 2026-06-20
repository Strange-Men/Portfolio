# DEV_STATUS

当前阶段：Phase 10-4

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
- Phase 6-12：投递版本冻结
- Phase 6-12.2：Contact HR 视角文案 hotfix
- Phase 7-1：BorderGlow 项目卡片实验
- Phase 7-2：页面背景与 Section 入场动效统一
- Phase 7-3：合并 BorderGlow Motion System 并锁定设计规范
- Phase 7-3.1：创建 v1.24.0-borderglow-motion-system tag

## v1.24.0-borderglow-motion-system 结论

本轮完成 v1.24 动效增强版本记录：

- v1.24.0-borderglow-motion-system tag 已创建并推送
- tag 指向 commit：64467c0
- 已合并 BorderGlowCard 作为主要玻璃卡片 hover 交互
- 已合并 RevealOnScroll 作为 Hero 之后 Section 入场动效
- 已合并 low-contrast ambient background
- 已保留 Hero 独立 spotlight / hero-anim 动效
- 已新增 docs/34_DESIGN_MOTION_RULES.md
- 已更新 Motion / BorderGlow / Motion System 相关文档最终结论
- 未接入 LineWaves
- 未接入 ProfileCard
- 未安装 ogl
- 未新增 Demo
- 未新增简历下载
- 未新增未确认项目

## 版本状态

当前最新版本：

```txt
v1.29.0-project-detail-polish
```

当前线上地址：

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## Phase 8-1：v1.28.0-career-material-sync

进入 Portfolio 文案与简历 / CodePilot 表达对齐阶段。

Phase 8-1 完成：

- 调整 `src/data/profile.ts` 中的 Hero 描述、About 文案、focusTags
- 调整 `src/data/codepilot.ts` 中的 subtitle、description、painPoint、proofPoints、flow
- 新增 `docs/37_CAREER_MATERIAL_SYNC.md`
- build 通过
- 未修改组件结构
- 未修改视觉 / 动效 / 背景
- 未新增项目 / Demo / 简历下载
- 未修改 CodePilot 仓库
- 未修改 CodePilot README

## Phase 8-1.1：Portfolio Career Copy Structure Polish

本轮继续优化 v1.28.0-career-material-sync：

- 修正 Hero 主按钮过于 CodePilot 单项目化的问题
- 导航入口调整为更适合多项目扩展的 Projects
- Hero 右侧模块改为长期可用的求职方向 / 项目索引 / 能力概览
- 保留 Core Project / Tech Stack 等少量英文视觉标签
- CodePilot 项目区增加 GitHub 和在线演示链接
- 补充未来项目卡片统一规则
- 未修改 CodePilot README
- 未进入 CodePilot 文件夹
- 未新增项目
- 未新增 Demo
- 未新增简历下载
- 未修改视觉 / 动效 / 背景

## Phase 8-2：Projects Expansion and Contact Link Fix

本轮完成：

- 修复 Contact 的"发送 Email"按钮 mailto 链接
- 新增 `src/data/projects.ts` 统一项目数据结构
- CodePilotSection 改为支持多项目展示
- CodePilot 保持为重点项目（Featured Project）
- 新增 EnterpriseAiDataAgent 项目卡片
- 新增 Basjoo 二开项目卡片
- 项目链接为空时不渲染按钮，避免假链接
- 未修改 CodePilot README
- 未进入 CodePilot 文件夹
- 未新增假 Demo
- 未新增简历下载
- 未修改视觉 / 动效 / 背景

## 当前最新版本

```txt
v1.28.1-projects-contact-link
```

## Phase 8-2.1：Equal Project Cards and Link Completion

本轮完成：

- 删除 Hero 底部重复标签块
- 优化 Hero 右侧项目概览模块
- 将 Projects 区域调整为三个项目平级展示
- 补齐 EnterpriseAiDataAgent GitHub 链接
- 补齐 Basjoo 二开项目说明链接和代码仓库链接
- 保持 Contact Email mailto 修复
- 小幅优化 Hero 背景质感
- 未修改 CodePilot README
- 未进入其他项目目录
- 未新增假链接
- 未新增简历下载

## Phase 8-2.2：Mature Hero Summary and Equal Project Structure

本轮完成：

- 优化 Hero 右侧 Selected Work 模块
- 三个项目统一为平级展示
- EnterpriseAiDataAgent 补充痛点、流程、技术栈与链接结构
- Basjoo 二开项目补充痛点、流程、技术栈与链接结构
- Contact 的发送 Email 按钮改为 Gmail compose URL
- 保留邮箱文本
- 未修改 CodePilot README
- 未进入其他项目目录
- 未新增假链接
- 未新增简历下载

## 当前线上地址

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## Phase 8-2.4：v1.28.1 Version Seal

当前 main 已合并 `v1.28.1-projects-contact-link` 相关更新。

本轮完成：

- 确认三项目平级展示已进入 main
- 确认 Contact Gmail 联系按钮已进入 main
- 确认 EnterpriseAiDataAgent / Basjoo 链接已进入 main
- 更新版本文档
- 创建并推送 `v1.28.1-projects-contact-link` tag

## 后续建议

Portfolio 后续设计开发可以继续讨论，但当前版本先封存。
后续如继续开发，建议优先从以下方向选择：

1. Project Detail Polish：优化项目职责、成果、验证方式
2. Mobile Polish：如手机端发现排版问题再专项处理
3. SEO / Share Polish：补充 title、description、favicon、Open Graph

## Phase 9-1：Project Detail Research

本轮开始 v1.29.0-project-detail-polish 的准备阶段。

本轮完成：

- 研究 CodePilot 公开 GitHub 仓库
- 研究 EnterpriseAiDataAgent 公开 GitHub 仓库
- 研究 CustomerOpsAgent_2 项目说明仓库
- 研究 Basjoo 二开代码分支
- 新增 `docs/38_PROJECT_DETAIL_RESEARCH.md`
- 本轮未修改页面源码
- 本轮未修改视觉 / 动效 / 背景
- 本轮未打 tag

下一步：

进入 Phase 9-2，根据研究文档优化 Portfolio 中三个项目的展示内容。

## Phase 9-2：Project Detail Polish

本轮基于 `docs/38_PROJECT_DETAIL_RESEARCH.md` 优化 Portfolio 三个项目的展示内容。

完成内容：

- 更新 CodePilot 项目展示，使其更突出仓库理解、代码解析、多 Agent 审查和 Evidence-grounded 报告
- 更新 EnterpriseAiDataAgent 项目展示，使其更贴近 CSV / Excel 数据分析工作台、DuckDB、NL→SQL、SSE 和报告生成
- 更新 Basjoo 二开项目展示，使其更准确表达为 RAG Evaluation Harness / RAG 评估增强，而不是完整客服 SaaS
- 保留三项目平级展示
- 保留真实链接
- 未新增假 Demo
- 未修改视觉 / 动效 / 背景
- 未修改 CodePilotSection.tsx 组件结构
- build 通过

## Phase 9-4：v1.29.0 Version Seal

当前 main 已合并 `v1.29.0-project-detail-polish` 相关更新，并完成电脑端 / 手机端线上验收。

本轮完成：

- 确认三项目真实内容优化已进入 main
- 确认 Vercel 线上双端验收通过
- 更新版本文档
- 创建并推送 `v1.29.0-project-detail-polish` tag

## 当前最新版本

```txt
v1.29.0-project-detail-polish
```

## 当前线上地址

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## 后续建议

Portfolio 后续设计开发建议优先从以下方向选择：

1. v1.30.0-seo-share-polish：优化网页标题、描述、favicon、Open Graph、GitHub About
2. v1.31.0-mobile-polish：如后续手机端发现问题，再做移动端专项优化
3. v2.0.0-portfolio-expansion：后续新增更多真实项目时再扩展结构

## Phase 10-2：SEO / Share Polish

本轮基于 `docs/39_SEO_SHARE_RESEARCH.md` 完成基础 SEO 与分享展示优化。

完成内容：

- 更新 `index.html` 的 title
- 增加 meta description
- 增加 Open Graph 基础标签
- 增加 Twitter Card 基础标签
- 增加 theme-color
- 新增 SVG favicon（public/favicon.svg）
- 新增 site.webmanifest（public/site.webmanifest）
- 优化 README 首屏 Live Site 与 Featured Projects
- 保留 GitHub About 手动填写建议
- 未修改页面组件
- 未修改视觉 / 动效 / 背景
- 未修改项目卡片内容

## Phase 10-1：SEO / Share Research

本轮开始 v1.30.0-seo-share-polish 的准备阶段。

本轮完成：

- 检查当前 index.html 的 title / meta / Open Graph / Twitter Card 状态
- 检查 favicon / theme-color 等基础展示信息
- 检查 README 首屏展示状态
- 整理 GitHub About 手动优化建议
- 新增 `docs/39_SEO_SHARE_RESEARCH.md`
- 本轮未修改页面源码
- 本轮未修改视觉 / 动效 / 背景
- 本轮未打 tag

下一步：

进入 Phase 10-2，根据研究文档优化 index.html、README 和基础分享展示信息。

## Phase 10-4：v1.30.0 Version Seal

当前 main 已合并 `v1.30.0-seo-share-polish` 相关更新，并完成线上验收。

本轮完成：

- 确认 SEO / Share 优化已进入 main
- 确认浏览器 title 与 favicon 已生效
- 确认 Vercel 线上验收通过
- 更新版本文档
- 创建并推送 `v1.30.0-seo-share-polish` tag

## 当前最新版本

```txt
v1.30.0-seo-share-polish
```

## 当前线上地址

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

## 后续建议

Portfolio 后续设计开发建议优先从以下方向选择：

1. v1.31.0-github-about-polish：手动完善 GitHub 仓库 About
2. v1.32.0-proof-polish：增强项目验证入口
3. v1.33.0-mobile-polish：如后续手机端发现问题，再做移动端专项优化

## Phase 11-1：GitHub About Polish

本轮完成 GitHub 仓库 About 信息完善：

- Description 已设置
- Website 已设置为 Portfolio 线上地址
- Topics 已设置为 portfolio / react / vite / typescript / tailwindcss / ai / agent / fastapi
- README 中 GitHub About 状态已更新
- 本轮未修改页面源码
- 本轮未修改视觉 / 动效 / 背景
- 本轮未打 tag

下一步：

可进入 v1.32.0-proof-polish，增强项目验证入口。
