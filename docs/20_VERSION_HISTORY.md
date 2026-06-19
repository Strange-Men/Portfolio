# Portfolio 版本历史

## 版本规则

本项目从开发前准备阶段开始补充版本记录。

版本含义：

- v0：开发前准备阶段，包括想法验证、PRD、设计基调、页面结构、项目边界、技术栈、架构、开发规范、Git 策略。
- v1：正式代码开发阶段，从 Vite React TypeScript 工程初始化开始。

版本记录通过 Git tag 和本文档共同维护。

---

## v0：准备阶段

| Version | Commit | 阶段 | 说明 |
|---|---|---|---|
| v0.0.0-prep-complete | bb45fd2 | Phase 4-9 | 准备阶段审计通过，九准备和打地基完成。 |

已有里程碑 tag：

| Tag | Commit | 说明 |
|---|---|---|
| prep-complete | bb45fd2 | 准备阶段完成里程碑。 |

---

## v1：代码开发阶段

| Version | Commit | 阶段 | 说明 |
|---|---|---|---|
| v1.0.0-foundation-init | 9577c4d | Phase 5-1 | 初始化 Vite + React + TypeScript 工程基线。 |
| v1.1.0-tailwind | 2bb6d24 | Phase 5-2 | 配置 Tailwind CSS。 |
| v1.2.0-data-layer | a3d3a55 | Phase 5-3 | 创建 Data 层，集中管理 Profile / CodePilot / Links。 |
| v1.3.0-ui-components | 52d14b0 | Phase 5-4 | 创建 UI 基础组件。 |
| v1.4.0-hero | 86b07a7 | Phase 5-5 | 实现 HeroSection。 |
| v1.5.0-about | 869727f | Phase 5-6 | 实现 AboutSection。 |
| v1.6.0-codepilot | 112fc07 | Phase 5-7 | 实现 CodePilotSection，展示核心项目定位、流程、技术栈、可讲技术点和真实 GitHub 链接。 |
| v1.7.0-contact | c01d844 | Phase 5-8 | 实现 ContactSection，提供 Email、GitHub、CodePilot GitHub 三个真实联系入口。 |
| v1.8.0-page-complete | f53ca34 | Phase 5-9 | 完整组合 Hero / About / CodePilot / Contact 四个 Section，并完成页面顺序、锚点、CTA、真实链接和禁止项检查。 |
| v1.9.0-responsive-polish | d6c8bca | Phase 5-10 | 完成响应式专项优化，修复小屏导航、Hero 标题字号和页面横向溢出风险。 |
| v1.10.0-mvp-build | 834f1a1 | Phase 5-11 | 完成最终 MVP 构建审计，确认构建、dist、页面范围、链接、语义、响应式与禁用词检查通过。 |
| v1.11.0-deploy-ready | e3c012e | Phase 5-12 | 完成 Vercel 部署前检查与部署指南，确认 Vite / build / dist / preview / Vercel 参数。 |
| v1.12.0-deployed | b1bf0df | Phase 5-13 | 完成 Vercel 线上部署记录，线上地址为 https://portfolio-rosy-ten-41.vercel.app/。 |
| v1.13.0-content-polish | 1692fc8 | Phase 6-1 | 优化 Hero、About 和 CodePilot 内容表达，让招聘方更快理解求职方向、项目价值和 AI 应用开发能力。 |
| v1.14.0-visual-nav-polish | 8b81955 | Phase 6-2 | 新增顶部固定磨砂玻璃导航，移除 Hero 内部重复导航，并小幅优化 Hero、About、CodePilot、Contact 的排版可读性。 |
| v1.15.0-typography-system | 8f1e2e1 | Phase 6-3 | 建立并修正中文友好的 Typography System，降低 Hero 中文标题压迫感，统一字体层级、行高、字距与正文阅读节奏。 |
| v1.16.0-reference-style-spec | 23a6dc2 | Phase 6-4 | 将用户提供的参考 Hero 风格转译为 Portfolio 专用视觉规格，确定 Dark Technical Spotlight Portfolio 方向，并明确后续 Hero、动效和项目证据展示路线。 |
| v1.17.0-hero-spotlight-layout | 02daa6e | Phase 6-5 | 基于 Dark Technical Spotlight Portfolio 方向重构 Hero 首屏布局，增加柔和背景光晕、网格纹理、CodePilot 信息卡和更强首屏视觉锚点。 |
| v1.18.0-premium-motion | f240dd4 | Phase 6-6 | 为 Hero 首屏增加轻量 CSS 入场动画，包括标题 fade-up / blur-in、描述与卡片 stagger fade-up，并支持 prefers-reduced-motion。 |
| v1.19.0-codepilot-compact-proof | 4466f0d | Phase 6-7 | 将 CodePilot 区块从详细说明改为紧凑项目证明，保留一句话定位、3 个技术证明点、极简流程和 GitHub / README 入口，提升 HR 快速浏览体验。 |
| v1.20.0-information-architecture-polish | c3d8885 | Phase 6-9 | 根据用户人工验收反馈修正页面信息架构：Hero 标题显式换行，About 改为自我介绍，CodePilot 补充项目痛点与清晰流程，Contact 移除单独项目仓库展示，仅保留联系入口。 |
| v1.21.0-final-polish | a41ef8b | Phase 6-10 | 完成最终视觉、响应式、链接、构建和禁用词终检，并小范围统一 Hero padding，为投递版本冻结做准备。 |
| v1.22.0-motion-interaction-spec | 1ebdcbe | Phase 6-11 | 新增动画交互规范文档，记录 BorderGlow / LineWaves / ProfileCard 的适用位置、优先级与风险，明确短期不接入重型动画，后续如需增强优先小范围试点 BorderGlow。 |
| v1.23.0-release-freeze | 5a75cb6 | Phase 6-12 | 冻结 Portfolio 第一版投递稳定版本，记录线上地址、当前稳定版本、页面结构、投递使用方式、后续维护边界和未来扩展规则。 |

---

## 当前版本

当前最新已完成版本：

```txt
v1.23.0-release-freeze
```

当前已完成页面模块：

```txt
HeroSection
AboutSection
CodePilotSection
ContactSection
完整页面组合
响应式专项优化
最终 MVP 构建审计
MVP 封板
Vercel 线上部署
内容表达优化
导航与排版优化
中文友好 Typography System
参考风格转译与设计规格
Hero Spotlight Layout
轻量 Hero 入场动画
CodePilot 紧凑项目证明
简历与投递表达对齐文档
信息架构与文案修正
最终视觉、响应式、链接和构建终检
动画交互规范沉淀
投递版本冻结
```

当前未完成：

```txt
自定义域名
未来项目扩展
BorderGlow 项目卡片试点
```

---

## 后续版本计划

建议后续版本：

| Version | 阶段 | 计划 |
|---|---|---|
| v1.24.0-borderglow-experiment | Optional | 可选：小范围试点 BorderGlow 项目卡片交互，前提是不影响投递稳定版本。 |
| v2.0.0-multi-projects | Future | 未来新增更多真实项目时，扩展为多项目作品集。 |

---

## MVP 封板结论

`v1.10.0-mvp-build` 是 Portfolio 第一版 MVP 的封板版本。

该版本包含：

- Hero
- About
- CodePilot
- Contact

该版本已完成：

- Vite React TypeScript 工程构建
- Tailwind CSS 样式基线
- Data / UI / Section 分层
- 四个 MVP Section
- 页面完整性检查
- 响应式专项优化
- 最终 MVP 构建审计

该版本不包含：

- 部署链接
- Demo 链接
- 简历下载
- 后端
- 数据库
- 登录
- 表单提交
- 多项目展示

---

## Deployment

Production URL:

```txt
https://portfolio-rosy-ten-41.vercel.app/
```

Deployment platform:

```txt
Vercel
```

Deployment source:

```txt
GitHub repository: Strange-Men/Portfolio
```

Framework:

```txt
Vite
```

Build command:

```txt
npm run build
```

Output directory:

```txt
dist
```

---

## 版本维护规则

1. 不修改旧 commit message。
2. 不 rebase。
3. 不 force push。
4. 不覆盖已有 tag。
5. 每个重要阶段完成后再创建 tag。
6. tag 必须指向 build 通过、working tree clean 的 commit。
7. 每次新增 tag 后更新本文档。

---

## Commit Message 版本命名规则

从 `v1.7.0-contact` 之后，所有阶段性 commit message 必须带版本号。

格式：

```txt
<type>(<version>): <description>
```

允许类型：

```txt
feat
fix
docs
refactor
style
chore
test
```

示例：

```txt
feat(v1.8.0-page-complete): compose final page
docs(v1.8.0-page-complete): update version docs
fix(v1.9.0-responsive-polish): fix mobile spacing
```

说明：

* 旧 commit 不改写。
* 不 rebase。
* 不 force push。
* 不 amend 旧 commit。
* 版本号同时维护在 Git tag、README、VERSION_HISTORY 和 DEV_STATUS 中。
