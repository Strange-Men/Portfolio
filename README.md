# Portfolio

个人作品集网站，用于集中展示我的 AI 应用开发、Agent 开发和 Python 后端项目实践。

**Live Site:** https://portfolio-rosy-ten-41.vercel.app/

## Featured Projects

| Project | Positioning | Proof |
|---|---|---|
| [CodePilot](https://github.com/Strange-Men/CodePilot) | 面向 Python 仓库的 AI 代码审查与仓库理解系统 | [Demo](https://code-pilot-red.vercel.app/) / 49.1% 文件降噪 / 96.8% 上下文 token 压缩 / pytest 1034 passed |
| [EnterpriseAiDataAgent](https://github.com/Strange-Men/EnterpriseAiDataAgent) | 面向 CSV / Excel 的 AI 数据分析工作台 Demo | [Demo](https://enterprise-ai-data-agent.vercel.app/) / Backend 559 passed / Frontend 1171 passed / master CI passed |
| [CustomerOpsAgent](https://github.com/Strange-Men/CustomerOpsAgent) | 面向跨境电商客服场景的 RAG + Agent Demo | [Demo](https://customer-ops-agent.vercel.app/) / 131 条 Bad Case / Recall@5 90.00% / pytest 293 passed |

## Project Experience Highlights

### CodePilot

- **Situation:** 中小型 Python 仓库接手时，人工阅读成本高；通用 LLM 直接问答缺少结构化仓库上下文，输出难复查。
- **Task:** 构建从 GitHub URL 到结构化代码审查报告的流程，让审查建议能追溯到文件、函数、类、依赖和规模指标。
- **Action:** 搭建仓库过滤、Python AST 解析、结构化上下文、`ReportContract`、证据字段和 Mock / Real LLM 双模式。
- **Result:** 在 httpx / click / uvicorn 基准仓库上实现平均 49.1% 文件降噪、96.8% 上下文 token 压缩；pytest 1034 passed，ruff 0 issues，audit_harness passed，Docker 本地运行 verified。

### EnterpriseAiDataAgent

- **Situation:** 非技术用户拿到 CSV / Excel 后，常需要写 SQL、手动筛选或依赖他人处理，分析结果也不易追溯。
- **Task:** 构建可本地运行的数据分析工作台 Demo，串联数据上传、表格预览、自然语言分析、专家 SQL、历史记录和报告详情。
- **Action:** 使用 DuckDB 承载本地结构化查询，提供 SQL 工作台、数据质量报告、Mock / DeepSeek / Doubao / Mimo provider adapter 和 fallback。
- **Result:** M4.9.5 工程完整性回归中，Docker Compose、本地前后端 200、Mock LLM 默认可用均验证通过；Backend 559 passed、Frontend 1171 passed、master CI passed。

### CustomerOpsAgent

- **Situation:** 跨境电商客服存在知识分散、回复口径不统一、质量难量化的问题，普通聊天式回答难以证明依据和持续优化效果。
- **Task:** 构建可演示、可解释、可评估、可迭代的 RAG + Agent 客服 Demo，覆盖知识库、检索、路由、回答生成、评测和坏例迭代。
- **Action:** 建设 14 条 JSONL 分层知识文档，覆盖 12 个客服场景；实现 BM25 + Query Expansion + 元数据加权、11 个意图分类、结构化回答模板、Evaluation Harness 和 Bad Case Bank。
- **Result:** Answer Pass Rate 从 46.72% 提升到 60.66%；Citation Hit Rate 从 83.61% 提升到 95.90%；Fallback Rate 从 13.11% 降至 0.82%；Recall@5 达到 90.00%；Bad Case Bank 131 条；pytest 293 passed。

## Portfolio Implementation

当前网站是静态单页应用，重点是把项目经历、可验证链接和工程证据集中展示给 HR / 面试官。

## Tech Stack

React 19 / TypeScript / Vite 8 / Tailwind CSS 4 / Vercel

## Current Version

当前最新已封存版本：

```txt
v1.37.0-customerops-text-sync
```

当前开发分支：

```txt
feat/v1.38.0-project-copy-sync
```

当前分支已完成：

- 基于三个项目 README 提取事实表
- 将 Portfolio 项目区文案同步为项目经历表达
- 新增 `docs/46_PROJECT_COPY_SYNC_RESEARCH.md`
- 同步 README 首屏项目表与 STAR 项目经历摘要
- 保持页面布局、视觉风格、动画和链接结构不变
- build 通过

当前未完成：

- v1.38.0 merge & seal
- 自定义域名
- 未来项目扩展

## Version Records

| Version | Stage | Description |
|---|---|---|
| v0.0.0-prep-complete | Preparation | 完成九准备、打地基和准备阶段审计 |
| v1.0.0-foundation-init | Engineering | 初始化 Vite + React + TypeScript 工程 |
| v1.1.0-tailwind | Engineering | 配置 Tailwind CSS |
| v1.2.0-data-layer | Engineering | 创建 Data 层 |
| v1.3.0-ui-components | Engineering | 创建 UI 基础组件 |
| v1.4.0-hero | Page | 实现 HeroSection |
| v1.5.0-about | Page | 实现 AboutSection |
| v1.6.0-codepilot | Page | 实现 CodePilotSection |
| v1.7.0-contact | Page | 实现 ContactSection |
| v1.8.0-page-complete | Page | 完整组合 Hero / About / CodePilot / Contact |
| v1.9.0-responsive-polish | Polish | 响应式专项优化 |
| v1.10.0-mvp-build | Audit | 最终 MVP 构建审计，MVP 封板 |
| v1.11.0-deploy-ready | Deploy | 部署前检查与 Vercel 部署准备 |
| v1.12.0-deployed | Deploy | 完成 Vercel 线上部署并记录访问地址 |
| v1.13.0-content-polish | Content | 优化 Portfolio 求职表达与 CodePilot 项目说明 |
| v1.14.0-visual-nav-polish | Visual | 顶部固定导航与基础排版优化 |
| v1.15.0-typography-system | Typography | 中文友好的字体层级、行高、字距与阅读节奏 |
| v1.16.0-reference-style-spec | Design | 将参考 Hero 风格转译为 Portfolio 专用视觉方向 |
| v1.17.0-hero-spotlight-layout | Visual | Hero 首屏视觉重构、柔和背景光晕与 CodePilot 信息卡 |
| v1.18.0-premium-motion | Motion | Hero 轻量 CSS 入场动画 |
| v1.19.0-codepilot-compact-proof | Content | CodePilot 一句话定位、技术证明点与 GitHub / README 入口 |
| v1.20.0-information-architecture-polish | Content / IA | Hero、About、CodePilot、Contact 信息架构修正 |
| v1.21.0-final-polish | Polish | 最终视觉、响应式、链接和构建终检 |
| v1.22.0-motion-interaction-spec | Motion Spec | 记录动画取舍与后续接入策略 |
| v1.23.0-release-freeze | Release | 冻结 Portfolio 第一版投递稳定版本 |
| v1.23.1-contact-copy | Hotfix | 修正 Contact 区块为 HR / 面试官视角的求职表达 |
| v1.24.0-borderglow-motion-system | Motion System | 合并 BorderGlow、Section 入场动效和页面背景，并锁定设计规范 |
| v1.25.0-docs-context-index | Docs | 新增 AI 上下文索引、当前项目最小上下文和文档维护规则 |
| v1.26.0-layout-copy-background-polish | Polish | 优化 About 等宽卡片、求职文案泛化、Hero 小标签和页面背景层次 |
| v1.26.1-layout-copy-background-hotfix | Hotfix | 修复 About 信息卡等宽、Hero/身份文案拆分、小字发糊和 Hero 后背景层级问题 |
| v1.26.2-background-card-mobile-polish | Mobile & Background Polish | 合并移动端 touch glow、移动端背景降噪、卡片内部粉雾关闭和背景过渡优化 |
| v1.27.0-production-verify | Production Verify | 最终线上验收，记录桌面端、手机端、链接、文案、动效和投递可用性检查结果 |
| v1.28.0-career-material-sync | Career Copy Sync | 调整 Portfolio 页面文案与项目导航结构，让 Hero / About / CodePilot 表达更贴近求职使用 |
| v1.28.1-projects-contact-link | Projects & Contact Polish | 三项目平级展示、Hero Selected Work 摘要、Gmail 联系按钮和项目链接补齐 |
| v1.29.0-project-detail-polish | Project Detail Polish | 基于仓库事实优化三项目展示内容 |
| v1.30.0-seo-share-polish | SEO & Share Polish | 优化浏览器 title、meta description、Open Graph、Twitter Card、theme-color、favicon、manifest 与 README 首屏展示 |
| v1.32.0-proof-polish | Project Proof Polish | 为三个项目卡片增加轻量级验证方式说明，并为 EnterpriseAiDataAgent 增加在线演示入口 |
| v1.33.0-visual-identity-polish | Visual Identity Polish | 增强 Portfolio 的视觉个人风格，优化 Hero、About、Projects 层级、Contact 收束感 |
| v1.34.0-og-image-polish | OG Image Polish | 新增 Portfolio 分享图并接入 Open Graph / Twitter Image metadata |
| v1.35.0-final-qa-polish | Final QA Polish | 投递前最终 QA 检查，确认页面、链接、移动端、SEO、OG 图、项目文案边界和禁用词均无阻断问题 |
| v1.36.0-mobile-visual-polish | Mobile Visual Polish | 手机端视觉专项检查，确认移动端 Hero、导航、About、Projects、proof-block、Contact 和横向溢出风险无阻断问题 |
| v1.37.0-customerops-text-sync | CustomerOps Text Sync | 将第三项目展示同步为跨境电商客服 Agent 系统，更新 CustomerOpsAgent GitHub 与在线 Demo 链接 |
| v1.38.0-project-copy-sync | Project Copy Sync | 基于三个项目 README 更新 Portfolio 项目经历文本，并同步 README 的 STAR 项目摘要 |

## Page Scope

当前页面模块：

1. Hero
2. About
3. Projects
4. Contact

当前不做：

- AI 问答
- 后端
- 登录
- 数据库
- 博客
- 简历下载按钮
- 未确认 Demo 链接

## Development Rules

后续开发遵守：

- 每轮只做一个小任务
- 每轮必须 build 通过
- 不在未提交状态下继续开发
- 不编造项目、链接、数据和经历
- 不复制外部模板或未确认代码
- 重要版本通过 Git tag 记录
- 后续阶段性 commit message 必须带版本号，例如 `feat(v1.8.0-page-complete): compose final page`

详细规则见：

```txt
docs/15_PROJECT_CONTEXT.md
docs/16_DEV_RULES.md
docs/20_VERSION_HISTORY.md
```

## AI Context Entry

For future AI-assisted development, do not read every file in `docs/` by default.

Start with:

- `docs/00_AI_CONTEXT_INDEX.md`
- `docs/01_CURRENT_PROJECT_CONTEXT.md`
- `docs/DEV_STATUS.md`

Then read task-specific docs according to `docs/00_AI_CONTEXT_INDEX.md`.

## GitHub About

当前仓库 About 已完成：

- Description: Personal portfolio for AI application, Agent, and Python backend projects.
- Website: https://portfolio-rosy-ten-41.vercel.app/
- Topics: portfolio, react, vite, typescript, tailwindcss, ai, agent, fastapi

## Contact

```txt
Email: 1643229721@qq.com
GitHub: https://github.com/Strange-Men
```
