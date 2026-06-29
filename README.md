# Portfolio

面向求职展示的个人作品集网站，集中呈现我在 AI 应用开发、Agent 开发和 Python 后端方向的项目实践。

- Online Portfolio: https://portfolio-rosy-ten-41.vercel.app/
- GitHub: https://github.com/Strange-Men
- Email: 1643229721@qq.com

## 项目定位

这个 Portfolio 用于快速说明三类能力：

- 能把 AI 应用从需求拆解到前后端 Demo、测试验证和在线展示。
- 能围绕 Agent / RAG / LLM workflow 设计可复查、可评测的工程流程。
- 能用测试、CI、Docker、Mock / Real 模式和评测集约束项目质量。

## 核心项目

| Project | Role | Links | Key Proof |
|---|---|---|---|
| CodePilot | 负责仓库解析、结构化上下文、LLM 报告契约与验证链路 | [GitHub](https://github.com/Strange-Men/CodePilot) / [Demo](https://code-pilot-red.vercel.app/) | 49.1% 文件降噪、96.8% 上下文 token 压缩、pytest 1034 passed |
| EnterpriseAiDataAgent | 负责数据上传、DuckDB 查询、SQL 工作台、多 Provider fallback 与工程回归 | [GitHub](https://github.com/Strange-Men/EnterpriseAiDataAgent) / [Demo](https://enterprise-ai-data-agent.vercel.app/) | Backend 559 passed、Frontend 1171 passed、master CI passed |
| CustomerOpsAgent | 负责 RAG 检索、意图路由、回答模板、Evaluation Harness 与 Bad Case Bank | [GitHub](https://github.com/Strange-Men/CustomerOpsAgent) / [Demo](https://customer-ops-agent.vercel.app/) | Recall@5 90.00%、131 条 Bad Case、pytest 293 passed |

## STAR 项目经历摘要

### CodePilot｜AI 代码审查与仓库理解系统

- **Situation:** 中小型 Python 仓库接手时，人工阅读耗时高；直接把全量代码交给 LLM 容易产生泛化建议，缺少可追溯依据。
- **Task:** 设计从 GitHub URL 到结构化审查报告的 workflow，让审查建议能绑定文件、函数、类、依赖和规模指标。
- **Action:** 负责文件过滤、Python AST 解析、结构化上下文、`ReportContract` 和 Mock / Real LLM 双模式；选择“静态解析提取事实 + LLM 生成解释”，是为了降低输入噪声并保留复查证据。
- **Result:** 在 httpx / click / uvicorn 基准仓库上实现平均 49.1% 文件降噪、96.8% 上下文 token 压缩；pytest 1034 passed，ruff 0 issues，audit_harness passed。

### EnterpriseAiDataAgent｜CSV / Excel 数据分析工作台

- **Situation:** 非技术用户拿到 CSV / Excel 后，常需要手动筛选、写 SQL 或依赖他人处理，影响数据分析效率和结果追溯。
- **Task:** 搭建可本地运行的数据分析工作台 Demo，串联上传、预览、自然语言分析、专家 SQL、历史记录和报告详情。
- **Action:** 负责 DuckDB 查询链路、SQL 工作台、数据质量报告、Mock / DeepSeek / Doubao / Mimo provider adapter 与 fallback；保留 Mock 模式是为了无 API Key 时也能完整验证流程。
- **Result:** Docker Compose、本地前后端 200、Mock LLM 默认可用均验证通过；Backend 559 passed、Frontend 1171 passed、master CI passed。

### CustomerOpsAgent｜跨境电商客服 RAG Agent

- **Situation:** 跨境电商客服知识分散、回复口径不统一，客服质量难以量化，普通聊天机器人难证明回答是否有依据。
- **Task:** 构建可演示、可解释、可评测、可迭代的 RAG + Agent 客服 Demo，覆盖知识库、检索、路由、回答和坏例优化。
- **Action:** 负责 14 条 JSONL 分层知识库、BM25 + Query Expansion + 元数据加权、11 个意图分类、结构化回答模板、Evaluation Harness 和 131 条 Bad Case Bank；用评测闭环替代主观调 Prompt。
- **Result:** Answer Pass Rate 从 46.72% 提升到 60.66%；Citation Hit Rate 从 83.61% 提升到 95.90%；Fallback Rate 从 13.11% 降至 0.82%；Recall@5 达到 90.00%。

## 技术栈

- Frontend: React 19 / TypeScript / Vite 8 / Tailwind CSS 4
- Engineering: Git / npm / Vercel / responsive design / component data layer
- Project domains: FastAPI / Python / DuckDB / RAG / BM25 / LLM Provider / Docker / CI

## 页面内容

- Hero: 求职方向与项目入口
- About: 个人背景与技术方向
- Projects: 三个 AI 项目的定位、职责、工程重点、量化结果和验证方式
- Contact: Email 与 GitHub 联系入口

## 联系方式

```txt
Email: 1643229721@qq.com
GitHub: https://github.com/Strange-Men
Portfolio: https://portfolio-rosy-ten-41.vercel.app/
```
