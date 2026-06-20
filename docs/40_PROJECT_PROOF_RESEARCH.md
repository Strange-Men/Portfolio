# Project Proof Research

## 1. Scope

本文件记录 Portfolio v1.32.0-proof-polish 前的项目验证入口研究。

本轮只研究当前三个项目的可验证证据，不修改页面源码。
研究结果用于后续决定是否在 Portfolio 项目卡片中增加 "验证方式 / How to verify" 信息。

---

## 2. Source Links

- Portfolio Live Site: https://portfolio-rosy-ten-41.vercel.app/
- CodePilot GitHub: https://github.com/Strange-Men/CodePilot
- CodePilot Demo: https://code-pilot-red.vercel.app/
- EnterpriseAiDataAgent GitHub: https://github.com/Strange-Men/EnterpriseAiDataAgent
- EnterpriseAiDataAgent Demo: https://enterprise-ai-data-agent.vercel.app/
- Basjoo Project Notes: https://github.com/Strange-Men/CustomerOpsAgent_2
- Basjoo Code Branch: https://github.com/Strange-Men/basjoo/tree/phase1-rag-eval-harness

---

## 3. Research Rules

- 只记录可从仓库或线上 Demo 验证的信息
- 不把未上线项目写成在线 Demo
- 不把 Mock 评估写成真实生产指标
- 不把 README 计划项写成已完成功能
- 不新增假链接
- 不夸大业务落地

---

## 4. CodePilot Proof Research

### 4.1 Existing Links

| 链接 | 地址 | 当前状态 |
|------|------|----------|
| GitHub | https://github.com/Strange-Men/CodePilot | 可访问 |
| Demo | https://code-pilot-red.vercel.app/ | 可访问，Mock 模式默认 |

### 4.2 What HR Can Verify Quickly

1. **打开 Demo** — 输入任意公开 GitHub 仓库地址，查看审查报告生成过程和结果
2. **查看报告** — 报告包含总览、发现、行动计划和证据附录（Evidence Appendix）
3. **切换语言** — 支持 zh/en 切换，验证国际化能力
4. **导出报告** — 一键导出 Markdown 格式审查报告

### 4.3 What Interviewers Can Inspect

1. **GitHub README** — 完整的项目定位、核心功能、架构图、技术栈、已知限制说明
2. **代码结构** — backend / frontend / tests / docs / scripts / contracts / evaluation 目录清晰分层
3. **CI 配置** — `.github/workflows/ci.yml` 存在，覆盖 ruff、pytest、npm test、npm run build
4. **测试目录** — tests/ 包含 unit、integration、regressions 三个子目录
5. **评估目录** — evaluation/ 包含 run_eval.py、metrics.py、configs、datasets、reports
6. **文档体系** — docs/ 包含 architecture、setup、releases、workflows 等子目录
7. **Docker 配置** — Dockerfile.backend、Dockerfile.frontend、docker-compose.yml 存在
8. **Release 文档** — docs/releases/ 包含 V3.7 Release Notes 和项目收尾报告

### 4.4 Evidence from Repository

| 证据类型 | 具体内容 | 验证方式 |
|----------|----------|----------|
| 在线 Demo | https://code-pilot-red.vercel.app/ | 浏览器直接访问 |
| 后端健康检查 | https://codepilot-i189.onrender.com/health | 浏览器或 curl 访问 |
| CI 流水线 | .github/workflows/ci.yml | GitHub 页面查看 |
| 后端测试 | 995 tests passed, 1 skipped | README 声明 + pytest 可复现 |
| 前端测试 | 104 tests passed | README 声明 + npm test 可复现 |
| 代码解析 | Tree-sitter + AST fallback | backend/ 源码可查 |
| 多 Agent 审查 | Architecture / CodeQuality / Maintainability / Refactor | backend/ 源码可查 |
| 证据追踪 | evidence_id 绑定文件路径、行号、代码片段 | Demo 报告可验证 |
| Mock 模式 | MockLLMClient 确定性输出 | Demo 默认即 Mock 模式 |
| 报告导出 | Markdown 格式含证据附录 | Demo 页面可操作 |
| 部署配置 | Vercel（前端）+ Render（后端）Docker | 配置文件可查 |

### 4.5 Suggested Portfolio Proof Copy

可验证方式：可在线打开 Demo，输入 GitHub 仓库地址查看审查报告；也可在 GitHub 查看前后端代码、测试、CI 配置与评估目录。

### 4.6 Boundaries / Do Not Overclaim

1. **Demo 默认 Mock 模式** — 在线 Demo 默认使用 MockLLMClient，不是真实 LLM 审查。不要写成"在线体验 AI 审查"
2. **一次性审查** — 不是持续 PR Review Bot，没有 GitHub OAuth / PR 自动评论
3. **无长期仓库记忆** — 每次审查独立，没有跨次持久化
4. **临时存储** — Render 免费环境 SQLite 历史可能因容器重启丢失
5. **语言支持差异** — Python 分析最深入，JS/TS 分析深度较弱
6. **文件数量限制** — 最多分析 300 个源文件，跳过超过 200KB 的文件
7. **不执行代码** — 仅做静态分析和 LLM 审查

---

## 5. EnterpriseAiDataAgent Proof Research

### 5.1 Existing Links

| 链接 | 地址 | 当前状态 |
|------|------|----------|
| GitHub | https://github.com/Strange-Men/EnterpriseAiDataAgent | 可访问 |
| Demo | https://enterprise-ai-data-agent.vercel.app/ | 可访问（新增） |
| 后端 API | https://enterpriseaidataagent.onrender.com | 可访问，免费实例可能休眠 |

> **重要更新**：EnterpriseAiDataAgent 现已部署在线 Demo。此前 v1.29.0 研究时记录为"无在线 Demo"，当前 README 已包含前端 Demo 和后端 API 地址。

### 5.2 What HR Can Verify Quickly

1. **打开 Demo** — 访问 https://enterprise-ai-data-agent.vercel.app/ 查看前端界面
2. **上传数据** — 支持 CSV / Excel 文件上传
3. **SQL 工作台** — Monaco Editor 编辑 SQL，支持自动补全
4. **数据质量** — 查看缺失值、重复值、异常值、质量评分

> 注意：AI 分析功能需要配置 Anthropic API Key。无 API Key 时，SQL 工作台、数据上传、数据质量分析等核心功能仍可用。

### 5.3 What Interviewers Can Inspect

1. **GitHub README** — 完整的项目简介、核心功能、技术栈、架构、Demo 演示路径
2. **代码结构** — backend / frontend-react / tests / docs / scripts / docker-compose.yml
3. **CI 配置** — `.github/workflows/ci.yml` 存在
4. **测试目录** — tests/ 包含 30+ 测试文件，覆盖 AI、API、数据质量、Guardrails、Token Budget 等
5. **文档目录** — docs/ 包含 architecture、reports、testing、governance 等子目录
6. **Docker 配置** — Dockerfile、Dockerfile.frontend、docker-compose.yml 存在
7. **Prompt 模块** — backend 中 11 个 prompt 模块，每个包含 CONTRACT + SYSTEM_PROMPT + build_user_message()
8. **安全控制** — sql_validator.py、guardrails.py、token_budget 相关代码可查

### 5.4 Evidence from Repository

| 证据类型 | 具体内容 | 验证方式 |
|----------|----------|----------|
| 在线 Demo | https://enterprise-ai-data-agent.vercel.app/ | 浏览器直接访问 |
| 后端 API | https://enterpriseaidataagent.onrender.com | 浏览器或 curl 访问 |
| CI 流水线 | .github/workflows/ci.yml | GitHub 页面查看 |
| 后端测试 | 420 pytest tests passed（31 skipped） | README 声明 |
| 前端测试 | 113 Vitest tests passed | README 声明 |
| DuckDB 集成 | 嵌入式 OLAP 数据库 | backend 源码可查 |
| NL→SQL 管线 | schema-aware prompt + 只读执行器 | backend 源码可查 |
| SSE 流式响应 | Server-Sent Events 实时输出 | Demo 可体验（需 API Key） |
| 异常检测 | Z-score、IQR 方法 | backend 源码可查 |
| 报告生成 | Markdown 格式分析报告 | Demo 可体验（需 API Key） |
| Guardrails | 最大步数、超时、失败限制 | tests/test_guardrails.py 可查 |
| Token Budget | 每种操作独立 token 预算 | tests/test_token_budget.py 可查 |
| LLM Trace | 记录每次调用的 token、延迟、状态 | tests/test_trace.py 可查 |
| Demo 数据 | 内置 5 万行 demo_sales 示例数据集 | README 声明 |

### 5.5 Suggested Portfolio Proof Copy

可验证方式：可在线打开 Demo 体验 SQL 工作台与数据上传；也可在 GitHub 查看 README、DuckDB / NL→SQL / SSE / 报告生成相关模块、测试与 CI 配置。

### 5.6 Boundaries / Do Not Overclaim

1. **AI 功能需 API Key** — 在线 Demo 的 AI 分析（NL→SQL、流式解释、异常检测解读）需要配置 Anthropic API Key，无 Key 时只有基础 SQL 和数据质量功能
2. **单用户本地优先** — 没有用户管理或多租户
3. **没有完整 RBAC** — 有可选的 API Key 认证，但不是权限系统
4. **Docker 构建未重新验证** — 此前报告通过，但最近审计未重新验证
5. **定时分析为实验性** — 任务持久化已实现，后台自动执行仍需验证
6. **没有 CI/CD** — 有 ci.yml 但 README 未声明 CI 状态
7. **是 MVP 不是产品** — 项目自我定位为作品集项目，不是企业级系统

---

## 6. Basjoo 二开项目 Proof Research

### 6.1 Existing Links

| 链接 | 地址 | 当前状态 |
|------|------|----------|
| 项目说明 | https://github.com/Strange-Men/CustomerOpsAgent_2 | 可访问 |
| 代码仓库 | https://github.com/Strange-Men/basjoo/tree/phase1-rag-eval-harness | 可访问 |

### 6.2 What HR Can Verify Quickly

1. **先看项目说明** — CustomerOpsAgent_2 README 清晰说明了项目定位、已完成成果、当前结果和工程边界
2. **查看指标表格** — README 直接展示 37 passed、15 eval cases、No-Answer Accuracy 100%、Citation Accuracy 88.9%、Hallucination Risk 0 cases
3. **查看代码入口表** — README 提供了文件路径表格，指引查看测试、脚本、报告和文档

### 6.3 What Interviewers Can Inspect

1. **CustomerOpsAgent_2 README** — 项目定位、Phase 1 成果、当前结果、工程边界、文档入口
2. **工程边界文档** — ENGINEERING_BOUNDARY.md 明确定义当前完成和未完成内容
3. **Phase 计划文档** — PHASE1_PLAN.md、PHASE2_READINESS_AUDIT.md 等记录完整工程过程
4. **basjoo 分支测试** — backend/tests/rag_eval/ 包含 37 个 pytest 测试
5. **评估脚本** — backend/scripts/run_rag_eval.py 独立评估 runner
6. **Demo 数据脚本** — backend/scripts/seed_demo_data.py 支持 --validate-only、--dry-run、--mock
7. **评估报告** — backend/reports/rag_eval_report.md + .json 双格式
8. **评估文档** — backend/docs/rag-evaluation.md 使用文档
9. **增强概述** — ENHANCEMENT_SUMMARY.zh-CN.md 中文增强概述

### 6.4 Evidence from Repository

| 证据类型 | 具体内容 | 验证方式 |
|----------|----------|----------|
| pytest 测试 | 37 tests passed（tests/rag_eval/） | 代码可查，本地可复现 |
| eval cases | 15 passed, 0 failed（run_rag_eval.py --mock） | 代码可查，本地可复现 |
| No-Answer Accuracy | 100.0% | README 声明 + 报告可查 |
| Citation Accuracy | 88.9% | README 声明 + 报告可查 |
| Hallucination Risk | 0 cases | README 声明 + 报告可查 |
| Baseline 回归 | 267 passed, 36 failed, 1 skipped | README 声明 |
| Mock Embedding | 基于字符频率的 256 维向量 | 源码可查 |
| Mock Retriever | 基于内存的余弦相似度搜索 | 源码可查 |
| Mock RAG Pipeline | 从检索结果中提取答案 | 源码可查 |
| Demo 数据 | SmartHome 场景，2 Agent + 3 文档 + 15 问题 | 源码可查 |
| 评估报告 | JSON + Markdown 双格式 | 文件可查 |
| 工程边界文档 | ENGINEERING_BOUNDARY.md | 文件可查 |

### 6.5 Suggested Portfolio Proof Copy

可验证方式：先查看项目说明仓库理解二开目标与评估结果，再进入 basjoo 分支查看 RAG evaluation harness、37 个 pytest 测试、15 个 eval cases 和阶段评估报告。

### 6.6 Boundaries / Do Not Overclaim

1. **不是完整 AI 客服系统** — 当前完成的是 Phase 1：Mock-friendly RAG Evaluation Harness Enhancement
2. **不是线上真实评估** — 当前指标来自 mock-friendly evaluation pipeline，不代表真实线上 Qdrant / Embedding / LLM 效果
3. **无在线 Demo** — 没有部署到线上，只能本地运行
4. **Phase 2 未开始** — Docker Desktop 未安装，SiliconFlow API Key 未配置
5. **代码在分支上** — phase1-rag-eval-harness 分支，未合并到主分支
6. **基于他人开源项目** — Basjoo 原始项目由 haoyiyin 开发，二开部分是增强而非原创
7. **baseline 回归有失败** — 267 passed 但 36 failed，存在兼容性问题
8. **Demo 数据是模拟的** — SmartHome 场景是构造的测试数据，不是真实业务数据

---

## 7. Cross-project Proof Strategy

### 7.1 Recommended UI Strategy

建议在每个项目卡片中增加一个轻量级 "验证方式" 小节，而不是新增大 Section。

理由：
- HR / 面试官浏览 Portfolio 时，需要快速知道"这个项目我能验证什么"
- 项目卡片已经是信息密度最高的区域，在卡片内补充验证方式最自然
- 不需要单独的 Section，避免页面过长

### 7.2 Suggested Field Name

建议数据字段命名为 `proof` 或 `verification`。

在 `src/data/projects.ts` 的 `PortfolioProject` 类型中新增：

```typescript
proof?: string;  // 1-2 句验证方式说明
```

### 7.3 Content Length Limit

每个项目最多 1-2 句，避免撑爆卡片。

参考长度：
- CodePilot：约 40-60 字
- EnterpriseAiDataAgent：约 40-60 字
- Basjoo 二开：约 40-60 字

### 7.4 What Not to Add

- 不新增假 Demo
- 不新增截图
- 不新增复杂交互
- 不把无在线 Demo 的项目写成可在线体验
- 不把 Mock 指标写成真实业务指标
- 不在卡片中堆砌测试数量

### 7.5 Phase 12-2 Implementation Plan

后续 Phase 12-2 可修改 `src/data/projects.ts`，为每个项目增加 `proof` 字段，并在 ProjectCard 中统一展示。

具体步骤：

1. 更新 `PortfolioProject` 类型，新增 `proof?: string`
2. 为三个项目各添加 1-2 句验证方式说明
3. 在项目卡片组件中渲染 `proof` 字段
4. 样式保持轻量，不破坏现有卡片布局

---

## 8. Cross-project Comparison

| 维度 | CodePilot | EnterpriseAiDataAgent | Basjoo 二开 |
|------|-----------|----------------------|-------------|
| 在线 Demo | 有（Mock 默认） | 有（基础功能可用） | 无 |
| GitHub README | 完整 | 完整 | 完整（项目说明仓库） |
| CI/CD | 有（GitHub Actions） | 有（ci.yml） | 无 |
| 后端测试 | 995+ pytest | 420+ pytest | 37 pytest（RAG eval） |
| 前端测试 | 104 npm test | 113 Vitest | 无 |
| 文档体系 | docs/ 多子目录 | docs/ 多子目录 | 多个 .md 文档 |
| Docker 配置 | 有 | 有 | 有（basjoo 原始） |
| 评估/报告 | evaluation/ 目录 | docs/reports/ | backend/reports/ |
| 最适合 HR 验证 | 打开 Demo 操作 | 打开 Demo 操作 | 看项目说明 + 指标 |
| 最适合面试官验证 | GitHub 代码 + CI + 测试 | GitHub 代码 + 测试 | 分支代码 + 测试 + 报告 |

---

## 9. Key Discovery

**EnterpriseAiDataAgent 已部署在线 Demo。**

此前 v1.29.0-project-detail-polish 研究时（docs/38_PROJECT_DETAIL_RESEARCH.md），记录为"无在线 Demo，只能本地运行"。当前 README 已包含：

- 前端 Demo：https://enterprise-ai-data-agent.vercel.app/
- 后端 API：https://enterpriseaidataagent.onrender.com

这意味着 Portfolio 三个项目中，现在有两个有在线 Demo（CodePilot + EnterpriseAiDataAgent），只有 Basjoo 二开没有。

后续 Phase 12-2 应考虑：
- EnterpriseAiDataAgent 项目卡片是否需要增加 Demo 链接
- `src/data/links.ts` 是否需要新增 EnterpriseAiDataAgent Demo 链接

---

## 10. Next Step

下一步进入 Phase 12-2：Project Proof Polish。

Phase 12-2 应基于本研究文档，小范围修改 `src/data/projects.ts` 和项目卡片组件，为三个项目增加轻量级验证方式说明。

同时应考虑：
1. 为 EnterpriseAiDataAgent 增加 Demo 链接
2. 更新 `src/data/links.ts` 新增 enterpriseAiDemo 字段
3. 更新 `src/data/projects.ts` 中 EnterpriseAiDataAgent 的 links 数组
