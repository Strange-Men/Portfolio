# Project Detail Research

## 1. Scope

本文件记录 Portfolio v1.29.0-project-detail-polish 前的项目事实研究。

本轮只研究公开 GitHub 仓库，不修改页面源码。
研究结果用于后续优化 Portfolio 中三个项目的项目简介、痛点、流程、技术亮点和边界说明。

---

## 2. Source Repositories

- CodePilot: https://github.com/Strange-Men/CodePilot
- EnterpriseAiDataAgent: https://github.com/Strange-Men/EnterpriseAiDataAgent
- CustomerOpsAgent_2: https://github.com/Strange-Men/CustomerOpsAgent_2
- Basjoo code branch: https://github.com/Strange-Men/basjoo/tree/phase1-rag-eval-harness

---

## 3. Research Rules

- 只记录仓库中可验证的信息
- 不把计划中功能写成已完成
- 不把 Mock 功能写成生产能力
- 不写假 Demo
- 不夸大业务落地
- 不复制大段 README 原文
- 不确定的信息标记为"未确认"

---

## 4. CodePilot Research

### 4.1 Project Positioning

CodePilot 是一个面向 GitHub 开源仓库的 **AI 代码审查与仓库理解系统**。

项目自我定位为"仓库级代码审查 Agent 原型"，不是商业产品替代品。重点验证从仓库解析到多 Agent 协作到证据追踪到报告生成的完整工程链路。

面向校招 / 实习 Portfolio 展示，强调工程完整性和技术深度。

在线 Demo：https://code-pilot-red.vercel.app

### 4.2 Verified Features

基于仓库 README 和文件结构确认的功能：

1. **仓库智能解析** — 基于 Tree-sitter 和 AST 的代码结构解析，支持 Python、JavaScript、TypeScript
2. **结构化上下文构建** — 不向 LLM 发送原始源码，而是构建包含符号摘要、依赖关系和文件结构的 RepositoryContext
3. **多 Agent 审查** — Architecture、CodeQuality、Maintainability、Refactor 四个专项 Agent 并行审查
4. **证据追踪系统** — 每条审查结论绑定 evidence_id（如 `[E1]`/`[E2]`），关联文件路径、行号和代码片段
5. **中英文切换** — 全局 zh/en 语言切换，报告、发现、UI 标签和错误信息均跟随语言设置
6. **Markdown 报告导出** — 一键导出完整审查报告，含证据附录
7. **Mock / 真实 LLM 双模式** — Mock 模式确定性输出、无需凭据；真实 LLM 模式支持 OpenAI 兼容接口和 MiMo

### 4.3 Tech Stack

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端 | Next.js 15.5、React 19、TypeScript 5.7、Tailwind CSS 3.4 | Vercel 部署 |
| 后端 | FastAPI、Python 3.11、SQLite（WAL 模式）、ThreadPoolExecutor | Render Docker 部署 |
| 代码解析 | Tree-sitter + AST fallback | Python 深度解析，JS/TS 基础解析 |
| 数据校验 | Pydantic | 全链路结构化数据校验 |
| LLM 接入 | MockLLMClient + OpenAI 兼容接口 / MiMo 可选 | Mock 模式默认 |
| 部署 | Vercel（前端）+ Render（后端） | 免费层部署 |
| 工程化 | GitHub Actions、pytest、ruff、npm test、npm run build | CI 全流程覆盖 |

### 4.4 Main Workflow

```
GitHub URL
  → 仓库拉取
  → 文件过滤（大小 / 类型 / 敏感信息）
  → Tree-sitter / AST 代码解析
  → 结构化仓库上下文（RepositoryContext）
  → 多 Agent 并行审查
       ├── Architecture Agent（架构分析）
       ├── CodeQuality Agent（代码质量）
       ├── Maintainability Agent（可维护性）
       └── Refactor Agent（重构建议）
  → Evidence Store（证据绑定）
  → Report Composer（报告合成）
  → 前端展示 / Markdown 导出
```

关键设计点：
- Agent 之间不是自由对话，由统一 Orchestrator 调度
- 共享 RepositoryContext 和 EvidenceStore
- 各 Agent 独立产出结构化 findings
- ReportComposer 合成四段式报告（总览 + 发现 + 行动计划 + 证据附录）

### 4.5 Evidence from Repository

可验证的仓库证据：

1. **仓库根目录结构** — 包含 backend、frontend、tests、docs、scripts、contracts、evaluation 等目录
2. **CI 配置** — `.github/workflows/ci.yml` 存在，运行 ruff、pytest、harness audit、npm test、npm run build
3. **测试数量** — README 声明 995 个后端测试通过、104 个前端测试通过
4. **部署配置** — Dockerfile.backend、Dockerfile.frontend、docker-compose.yml 存在
5. **pyproject.toml** — 配置了 pytest 和 ruff
6. **在线 Demo** — https://code-pilot-red.vercel.app 可访问
7. **后端 API** — https://codepilot-i189.onrender.com 有健康检查端点
8. **文档体系** — docs 目录包含 setup、architecture、releases 等子目录
9. **版本管理** — 有 V3.7 Release Notes 和项目收尾报告

### 4.6 Portfolio Display Suggestions

适合 Portfolio 页面展示的亮点：

1. **完整工程链路** — 从仓库解析到多 Agent 审查到证据追踪到报告生成的闭环
2. **证据绑定设计** — 每条结论可溯源，降低 LLM 幻觉风险
3. **Tree-sitter 代码解析** — 不是简单的文本提取，而是 AST 级别的结构化分析
4. **Mock / 真实 LLM 双模式** — 保证演示稳定性的同时验证真实模型接入
5. **工程化程度** — 995+ 测试、CI 全流程、Vercel + Render 部署

建议 Portfolio 表达重点：
- 强调"仓库级代码理解"而非"AI 聊天"
- 强调"结构化上下文"而非"向量检索"
- 强调"证据可溯源"而非"AI 自动生成"
- 强调"工程闭环"而非"Demo 演示"

### 4.7 Boundaries / Do Not Overclaim

不应夸大的地方：

1. **不是持续 PR Review Bot** — 当前是一次性审查，没有 GitHub OAuth / GitHub App / PR 自动评论
2. **无长期仓库记忆** — 每次审查独立，没有跨次审查的持久化
3. **非完整向量 RAG** — 没有 embedding + 向量数据库，采用结构化上下文方案
4. **临时存储** — Render 免费环境的 SQLite 历史可能因容器重启丢失
5. **语言支持差异** — Python 分析最深入，JS/TS 支持可用但分析深度较弱
6. **静态分析** — 不执行仓库代码，仅做静态分析和 LLM 审查
7. **文件数量限制** — 最多分析 300 个源文件，跳过超过 200KB 的文件
8. **真实 LLM 输出质量** — 依赖模型服务可用性和 API Key
9. **Mock 模式是默认** — 在线 Demo 默认使用 Mock 模式，不是真实 LLM 审查

---

## 5. EnterpriseAiDataAgent Research

### 5.1 Project Positioning

EnterpriseAiDataAgent 是一个面向 CSV / Excel 数据文件的 **AI 数据分析工作台**。

项目自我定位为"个人作品集项目（MVP）"，用于展示 AI 应用工程能力，不是企业级生产系统，不试图替代 Tableau 或 Power BI。

核心思路：用自然语言提问，AI 自动生成 SQL 并执行，再对结果进行解读。

### 5.2 Verified Features

基于仓库 README 和文件结构确认的功能：

1. **数据接入** — CSV / Excel 文件上传，自动类型推断，导入 DuckDB
2. **SQL 工作台** — Monaco Editor，关键字/表名/列名自动补全，多标签页，查询历史，结果导出
3. **NL→SQL 管线** — 自然语言转 SQL，schema-aware prompt，只读执行器
4. **查询结果解释** — SSE 流式输出，结构化洞察生成（带置信度和严重程度）
5. **异常检测** — Z-score、IQR 方法，LLM 解释异常业务含义
6. **数据质量报告** — 缺失值、重复值、异常值、质量评分
7. **多步分析** — AI 生成分析计划，分步执行 SQL，Token budget 控制
8. **报告生成** — Markdown 格式分析报告
9. **安全控制** — SQL 验证（阻止 DDL/DML）、Guardrails（最大步数、超时、失败限制）
10. **LLM Trace** — 记录每次 LLM 调用的输入输出 token、延迟、状态

### 5.3 Tech Stack

| 层级 | 技术 |
|------|------|
| 前端 | Next.js 15, React 19, TypeScript, TailwindCSS |
| SQL 编辑器 | Monaco Editor, sql-formatter |
| 状态管理 | React Query（服务端状态）, Zustand（客户端状态） |
| 后端 | FastAPI, Pydantic, Uvicorn |
| 数据库 | DuckDB（嵌入式 OLAP） |
| 数据处理 | Pandas, NumPy, openpyxl |
| AI | Anthropic Claude API, SSE Streaming |
| 图表 | Recharts |
| 测试 | Pytest（后端）, Vitest（前端） |
| 部署 | Docker, docker-compose |

### 5.4 Main Workflow

```
用户上传 CSV / Excel
  → FastAPI 后端接收文件
  → Pandas / openpyxl 解析
  → DuckDB 入库

SQL Workspace 查询
  → Monaco Editor 编辑 SQL
  → QueryExecutor 执行
  → 结果展示 / 导出

AI 分析管线
  → 读取表结构和样本数据
  → 构造 schema-aware prompt
  → 调用 Claude API 生成 SQL / 解释 / 洞察
  → 只读执行器运行 SQL
  → 前端流式展示结果
```

AI Prompt 架构：
- 11 个 prompt 模块（sql_generation、explanation、insights、analysis_plan、anomaly_interpretation 等）
- 每个包含 CONTRACT（名称、token 上限）、SYSTEM_PROMPT、build_user_message()
- 统一注册在 registry 中

### 5.5 Evidence from Repository

可验证的仓库证据：

1. **仓库根目录结构** — 包含 backend、frontend-react、tests、scripts、docs、docker-compose.yml
2. **后端 services 目录** — 包含 ai_analyst.py、ai_pipeline.py、anomaly_detector.py、data_service.py、guardrails.py、profiler.py、report_builder.py、sql_validator.py、trace.py 等
3. **后端 prompts 目录** — 包含 14 个 prompt 模块文件
4. **requirements.txt** — 确认使用 FastAPI、DuckDB、Pandas、Anthropic Claude API
5. **测试数量** — README 声明 420 个后端 pytest 测试通过、113 个前端 Vitest 测试通过
6. **Docker 配置** — Dockerfile、Dockerfile.frontend、docker-compose.yml 存在
7. **demo 数据** — 内置 5 万行 demo_sales 示例数据集
8. **无在线 Demo** — 项目未部署到线上，只能本地运行

### 5.6 Portfolio Display Suggestions

适合 Portfolio 页面展示的亮点：

1. **完整分析链路** — 数据上传 → SQL 查询 → AI 分析 → 异常检测 → 报告生成
2. **DuckDB 选型** — 嵌入式列式数据库，零配置，适合本地 CSV/Excel 的 OLAP 分析
3. **Prompt Contract 架构** — 11 个 prompt 模块使用统一模式，便于管理、测试和扩展
4. **SSE 流式响应** — AI 解释和洞察实时流式输出
5. **Guardrails 系统** — 防止多步分析失控，有最大步数、超时、连续失败限制
6. **Token Budget 成本控制** — 每种 AI 操作有独立 token 预算
7. **LLM Trace** — 记录每次 LLM 调用的完整上下文

建议 Portfolio 表达重点：
- 强调"数据分析工作台"而非泛泛的"企业数据问答 Agent"
- 强调"DuckDB + SQL 工作台"的具体技术选型
- 强调"Prompt Contract + Guardrails + Token Budget"的工程控制能力
- 强调"SSE 流式响应"的用户体验设计

### 5.7 Boundaries / Do Not Overclaim

不应夸大的地方：

1. **单用户本地优先** — 没有用户管理或多租户
2. **没有完整 RBAC** — 有可选的 API Key 认证，但不是权限系统
3. **Docker 构建未重新验证** — 此前报告通过，但最近审计未重新验证
4. **定时分析为实验性** — 任务持久化已实现，后台自动执行仍需验证
5. **i18n 不完整** — 命令面板快捷键描述仍有少量英文硬编码
6. **没有 CI/CD** — 没有 GitHub Actions 流水线
7. **无在线 Demo** — 只能本地运行，没有部署到线上
8. **SQL Workspace 大组件** — 当前 643 行，需要拆分优化
9. **是 MVP 不是产品** — 项目自我定位为作品集项目，不是企业级系统

---

## 6. Basjoo 二开项目 Research

### 6.1 Project Positioning

Basjoo 二开项目是基于开源 AI 客服系统 [Basjoo](https://github.com/haoyiyin/basjoo)（MIT License）的**二次开发与工程增强项目**。

项目重点是为现有 AI 客服系统补充 **RAG Evaluation Harness**、**Demo Data**、**Mock 可复现评估**和**评估报告**能力。

使用两个仓库管理：
- CustomerOpsAgent_2：项目管理、阶段计划、审查记录、工程文档
- basjoo（phase1-rag-eval-harness 分支）：代码改动、测试、脚本、评估报告

### 6.2 Verified Features

基于 CustomerOpsAgent_2 README 和 basjoo 分支文件结构确认的功能：

**Phase 1 已完成（RAG Evaluation Harness）：**

1. **RAG 评估测试框架** — 覆盖检索精度、无答案回退、证据引用、幻觉风险等维度
2. **Mock Embedding** — 基于字符频率的 256 维向量生成，无需真实 API Key
3. **Mock Retriever** — 基于内存的余弦相似度搜索，无需 Qdrant
4. **Mock RAG Pipeline** — 从检索结果中提取答案，无需调用 LLM
5. **15 个 eval cases** — 覆盖正常命中、多文档检索、无答案 fallback、低相关度拒答、evidence/citation 校验、幻觉风险
6. **37 个 pytest 测试** — 全部通过
7. **评估指标** — Precision@k、Recall@k、MRR、No-Answer Accuracy、Citation Accuracy、Hallucination Risk
8. **SmartHome Demo Data** — 2 个 Demo Agent、3 篇知识库文档、15 个 Demo 问题、3 个对话场景 + 8 个 Bad Cases
9. **评估报告** — JSON + Markdown 双格式，包含执行摘要、指标表格、场景覆盖详情、失败用例分析

**当前结果（Mock 模式）：**

| 指标 | 值 |
|---|---|
| tests/rag_eval/ | 37 passed |
| run_rag_eval.py --mock | 15 passed, 0 failed |
| No-Answer Accuracy | 100.0% |
| Citation Accuracy | 88.9% |
| Hallucination Risk | 0 cases |
| Baseline 回归测试 | 267 passed, 36 failed, 1 skipped |

### 6.3 Tech Stack

基于 Basjoo 原始项目和二开分支：

| 层级 | 技术 |
|------|------|
| 后端 | Python 3.11+ / FastAPI |
| 前端 | TypeScript / Next.js 14 |
| 数据层 | PostgreSQL + Qdrant（向量搜索） |
| 部署 | Docker Compose |
| License | MIT（基于 Basjoo） |
| 评估 | 自研 RAG Evaluation Harness（Mock 模式） |

### 6.4 Main Workflow

**Phase 1 工作流（已完成）：**

```
阅读 Basjoo 开源项目结构
  → 搭建本地开发与依赖环境
  → 设计 RAG Evaluation Harness
  → 实现 Mock Embedding / Retriever / RAG Pipeline
  → 编写 15 个 eval cases
  → 实现 37 个 pytest 测试
  → 生成评估报告（JSON + Markdown）
  → 验证 Demo Data 种子脚本
```

**Phase 2 工作流（未开始）：**

```
安装 Docker Desktop
  → 配置 SiliconFlow API Key
  → 启动真实 Qdrant / PostgreSQL / 后端 / 前端
  → 运行真实 RAG 评估
  → 对比 Mock vs 真实结果
```

### 6.5 Evidence from Repository

可验证的仓库证据：

1. **CustomerOpsAgent_2 仓库** — 包含 ENGINEERING_BOUNDARY.md、NEXT_ENGINEERING_PLAN.md、PHASE0-2 系列文档
2. **basjoo 分支文件结构** — 包含 backend/tests/rag_eval/、backend/scripts/run_rag_eval.py、backend/scripts/seed_demo_data.py、backend/reports/
3. **测试文件** — backend/tests/rag_eval/ 包含 conftest.py、fixtures/、test_demo_data_integrity.py
4. **scripts 目录** — 包含 demo_data/、run_rag_eval.py、seed_demo_data.py
5. **basjoo 原始测试** — backend/tests/ 目录包含大量测试文件（test_api.py、test_kb_retrieval.py、test_chat_kb_integration.py 等）
6. **阶段文档** — PHASE1_PLAN.md 记录实现计划与结果，PHASE2_READINESS_AUDIT.md 记录就绪审计
7. **工程边界文档** — ENGINEERING_BOUNDARY.md 明确定义当前完成和未完成的内容

### 6.6 Portfolio Display Suggestions

适合 Portfolio 页面展示的亮点：

1. **开源项目二次开发** — 基于真实开源项目 Basjoo 进行工程增强，理解大型代码库
2. **RAG 评估框架** — 设计并实现 RAG Evaluation Harness，覆盖检索精度、幻觉风险等维度
3. **Mock 可复现评估** — 无需真实 API Key / Qdrant 即可运行评估，降低验证成本
4. **测试指标约束** — Precision@k、Recall@k、MRR、Citation Accuracy、Hallucination Risk
5. **工程边界清晰** — 明确区分已完成（Phase 1）和未完成（Phase 2），不夸大

建议 Portfolio 表达重点：
- 强调"基于开源项目做二次开发"的能力，而非"从零构建客服系统"
- 强调"RAG 评估闭环"的工程思维，而非"RAG 检索功能"
- 强调"用测试指标约束 RAG 质量"的方法论
- 强调"Mock 可复现"的工程实践

### 6.7 Boundaries / Do Not Overclaim

不应夸大的地方：

1. **不是完整 AI 客服系统** — 当前完成的是 Phase 1：Mock-friendly RAG Evaluation Harness Enhancement
2. **不是线上真实评估** — 当前指标来自 mock-friendly evaluation pipeline，不代表真实线上 Qdrant / Embedding / LLM 效果
3. **不是部署版 SaaS** — 没有部署到线上，只能本地运行
4. **Phase 2 未开始** — Docker Desktop 未安装，SiliconFlow API Key 未配置
5. **代码在分支上** — phase1-rag-eval-harness 分支，未合并到主分支
6. **基于他人开源项目** — Basjoo 原始项目由 haoyiyin 开发，二开部分是增强而非原创
7. **baseline 回归有失败** — 267 passed 但 36 failed，存在兼容性问题
8. **Demo 数据是模拟的** — SmartHome 场景是构造的测试数据，不是真实业务数据

---

## 7. Cross-project Portfolio Strategy

### 7.1 Recommended Portfolio Hierarchy

三个项目的真实差异：

| 项目 | 核心能力 | 工程深度 | 在线 Demo | 测试覆盖 |
|------|----------|----------|-----------|----------|
| CodePilot | 代码审查 / 仓库理解 | 最深（多 Agent + 证据追踪） | 有 | 995+ 后端 + 104 前端 |
| EnterpriseAiDataAgent | 数据分析 / SQL / 报告 | 中等（Prompt Contract + Guardrails） | 无 | 420 后端 + 113 前端 |
| Basjoo 二开 | RAG 评估 / 开源二开 | 较浅（Phase 1 Mock 评估） | 无 | 37 RAG eval + 267 baseline |

建议展示层次：
- CodePilot 保持为重点项目（Featured Project）
- EnterpriseAiDataAgent 作为数据分析方向补充
- Basjoo 二开作为开源二开和 RAG 评估实践补充

### 7.2 Shared Project Card Structure

三个项目当前使用统一的项目卡片结构：

```
项目名称
一句话定位
痛点 / 场景
3 个技术亮点
项目流程（3-4 步）
技术栈标签
GitHub / Demo 链接
```

建议后续保持此结构，但根据研究结果调整具体内容。

### 7.3 How to Avoid Repetition

三个项目的差异化定位：

- **CodePilot**：仓库级代码理解 → Tree-sitter 解析 → 多 Agent 审查 → 证据溯源
- **EnterpriseAiDataAgent**：数据分析工作台 → DuckDB + SQL → NL→SQL → 流式解释
- **Basjoo 二开**：开源二开实践 → RAG 评估框架 → Mock 可复现 → 测试指标

避免重复的关键：
- 每个项目强调不同的技术选型理由
- 每个项目强调不同的工程挑战
- 每个项目强调不同的解决思路

### 7.4 What HR Should Understand in 30 Seconds

HR 在 30 秒内应理解的信息：

1. **CodePilot**：能用 AI 帮助理解陌生代码仓库，生成审查报告
2. **EnterpriseAiDataAgent**：能用自然语言查询数据表格，生成分析报告
3. **Basjoo 二开**：能基于开源项目做二次开发，用测试保障 AI 质量

共同信息：
- 三个项目都是 AI 应用开发方向
- 三个项目都有真实 GitHub 仓库
- 三个项目都有工程化实践（测试、CI、部署）

### 7.5 What Interviewers May Ask

面试官可能追问的问题：

**CodePilot：**
- 为什么选择 Tree-sitter 而不是向量数据库？
- 多 Agent 之间如何协调？会不会冲突？
- 证据追踪系统如何降低幻觉？
- Mock 模式和真实 LLM 模式的差异？

**EnterpriseAiDataAgent：**
- 为什么选择 DuckDB 而不是 PostgreSQL？
- Prompt Contract 架构具体怎么设计的？
- Guardrails 系统如何防止分析失控？
- SSE 流式响应的实现细节？

**Basjoo 二开：**
- 为什么选择 Basjoo 而不是从零开发？
- RAG Evaluation Harness 的设计思路？
- Mock 模式评估的价值是什么？
- Phase 2 计划做什么？

---

## 8. Next Step

下一步建议进入 Phase 9-2：Project Detail Polish。

Phase 9-2 应基于本研究文档修改 `src/data/projects.ts`，让 Portfolio 页面中的三个项目介绍更真实、更具体，同时保持现有视觉设计不变。

具体建议：

1. **CodePilot** — 补充"多 Agent 并行审查"和"证据追踪"的具体说明，强调"结构化上下文"而非"向量检索"
2. **EnterpriseAiDataAgent** — 将"企业数据问答与分析 Agent"改为更具体的"AI 数据分析工作台"，补充 DuckDB、SQL 工作台、SSE 流式响应等具体技术点
3. **Basjoo 二开** — 将重点从"客服系统二次开发"调整为"RAG 评估框架"，补充 Mock 可复现评估和测试指标的具体说明

---

## 9. Phase 9-2 Portfolio Copy Application

Phase 9-2 基于本研究文档修改了 `src/data/projects.ts`，将研究结果应用到 Portfolio 页面文案。

### 9.1 CodePilot 应用情况

| 研究建议 | 页面应用 |
|----------|----------|
| 强调仓库级代码理解 | subtitle 保持"AI 代码审查与仓库理解系统"，description 补充仓库拉取、结构解析、结构化上下文构建 |
| 强调多 Agent 审查 | highlights 新增"多 Agent 审查与结构化报告生成"，flow 新增"多 Agent 生成审查结果与证据" |
| 强调 Evidence-grounded 证据绑定 | highlights 新增"Evidence-grounded 证据绑定" |
| 强调 Tree-sitter AST 解析 | highlights 新增"Tree-sitter / AST 解析仓库结构" |
| 强调 Mock / 真实 LLM 双模式 | highlights 新增"Mock / 真实 LLM 双模式演示" |
| 不写成持续 PR Review Bot | description 使用"项目"而非"平台/系统/产品" |
| 补充 Pydantic | techStack 新增 Pydantic |
| React 改 Next.js | techStack 从 React 改为 Next.js（匹配实际仓库） |

### 9.2 EnterpriseAiDataAgent 应用情况

| 研究建议 | 页面应用 |
|----------|----------|
| 改为数据分析工作台 | subtitle 从"企业数据问答与分析 Agent"改为"CSV / Excel 数据分析工作台" |
| 补充 DuckDB、SQL 工作台 | highlights 新增"CSV / Excel 上传与 DuckDB 查询"和"自然语言转 SQL 与 SQL 工作台" |
| 补充 SSE 流式解释 | highlights 新增"SSE 流式解释与 Markdown 报告" |
| 补充异常检测 | highlights 新增"异常检测与数据质量分析" |
| 补充具体技术栈 | techStack 改为 Next.js、React、FastAPI、DuckDB、Pandas、Monaco Editor、Anthropic Claude API、SSE |
| 不写成完整 BI 平台 | description 使用"工作台""项目""探索"措辞 |
| 不写假 Demo | 无 Demo 链接，只保留 GitHub |

### 9.3 Basjoo 二开应用情况

| 研究建议 | 页面应用 |
|----------|----------|
| 改为 RAG Evaluation Harness | subtitle 从"基于开源客服系统的 AI 客服 Agent 二次开发"改为"RAG 评估框架与客服知识库流程增强" |
| 强调 Mock 可复现评估 | highlights 新增"Mock 可复现 RAG 评估流程" |
| 强调测试指标 | highlights 新增"Precision / Recall / MRR 等指标约束"和"pytest 测试与阶段评估报告" |
| 补充评估 flow | flow 从"扩展 RAG 检索与知识库流程"改为"构建 Mock Embedding / Retriever / RAG Pipeline → 设计 RAG eval cases → 运行 pytest 与评估指标 → 输出阶段评估报告" |
| 不写成完整客服 SaaS | description 强调"当前重点是评估框架"，不是完整系统 |
| techStack 补充 | 新增 PostgreSQL、pytest，保留 Qdrant、Docker、RAG |

### 9.4 未应用的研究建议

- 研究文档提到 CodePilot 有"中英文切换"功能 — 未作为 highlights 展示，因为这不是核心卖点
- 研究文档提到 EnterpriseAiDataAgent 有"Guardrails 系统"和"Token Budget" — 未单独列出，已在"异常检测与数据质量分析"中隐含覆盖
- 研究文档提到 Basjoo 有"SmartHome Demo Data" — 未作为亮点展示，因为是模拟数据不是核心能力
