# Project Copy Sync Research

## 1. Scope

本轮目标是基于三个项目 README 更新 Portfolio 项目区文案，使其更接近简历项目经历表达。

范围限制：

- 只更新项目文本、必要链接和本轮文档。
- 不修改 Hero / About / Contact。
- 不修改视觉布局、CSS、动画、组件结构、public 或 index.html。
- 不打 tag，不合并 main。

## 2. Source README Files

- `D:\Claude_workfile\CodePilot\README.md`
- `D:\Claude_workfile\EnterpriseAiDataAgent\README.md`
- `D:\Claude_workfile\CustomerOpsAgent\README.md`

三个 README 均已在预期路径读取，使用 UTF-8 重新读取以避免编码噪声。

## 3. CodePilot Facts

- Positioning: 面向 Python 仓库的 AI 代码审查与仓库理解系统；先做工程降噪、结构化上下文和证据绑定，再由 LLM 生成可复查代码审查报告。
- Core workflow: GitHub 仓库 URL -> 克隆与文件过滤 -> 静态解析 -> 结构化上下文 -> 多 Agent 审查 -> 证据绑定问题发现 -> 审查报告。
- Engineering highlights: git-tracked 文件基线、文件过滤、Python AST 提取函数/类/导入/规模指标、保留 tree-sitter 扩展路径、`ReportContract` 约束输出、Mock / Real LLM 双模式、Provider 接口隔离、任务分阶段记录。
- Evaluation / tests: pytest 1034 passed, 1 skipped；ruff 0 issues；audit_harness passed；Mock 模式审查成功率 100%；Docker 本地运行 verified。
- Quantified results: 3 个基准仓库平均文件降噪率 49.1%；结构化上下文 Token 压缩率 96.8%；httpx 单仓真实 LLM 输入从 137,417 token 降至 15,212 token，输入规模约降低 8.85 倍，输入 token 压缩率 88.7%；降噪率范围 37.3%-58.0%，Token 压缩率范围 95.7%-97.8%。
- Demo: Portfolio 当前链接为 `https://code-pilot-red.vercel.app/`；README 提供本地 Frontend `http://localhost:3000`、Backend `http://localhost:8000`、Health Check `http://localhost:8000/health`。
- GitHub: Portfolio 当前链接为 `https://github.com/Strange-Men/CodePilot`。
- Do not claim: 不写成生产级 DevOps 平台、完整代码安全扫描平台、替代人工 Code Review、安全审计或自动修复工具；README 明确当前优先 Python，不承诺多语言全覆盖。

## 4. EnterpriseAiDataAgent Facts

- Positioning: 面向 CSV / Excel 数据的 AI 数据分析工作台 Demo，通过 DuckDB、本地表格预览、自然语言分析、专家 SQL、历史报告和多 LLM Provider + Mock fallback 验证 AI 数据分析流程。
- Core workflow: 数据上传 -> 表格预览 -> 自然语言分析 / 专家 SQL -> 历史记录 -> 报告详情；快速体验流程包含 Docker Compose 启动、上传 CSV/Excel、Data 页面预览、Analyze 页面选择 Mock LLM、输入自然语言问题、查看结果和 History。
- Engineering highlights: CSV / Excel 上传自动生成 DuckDB 可查询数据表；支持列类型推断、表预览、重命名、删除和导出；自然语言问题转 SQL 并执行；SSE 流式输出；Monaco Editor SQL 工作台；Summary / Findings / Result / SQL Appendix 报告详情；数据质量报告；Mock / DeepSeek / Doubao / Mimo provider adapter；真实 provider 不可用时 fallback 到 Mock；API Key 只配置在后端环境变量，前端不配置真实 Key；Docker Compose 本地 Demo。
- Evaluation / tests: M4.9.5 工程完整性回归中 Docker Compose backend + frontend 可同时启动；Backend `/docs` 和 `/api/ai/status` 返回 200；Frontend localhost 返回 200；Mock LLM 默认可用；Backend tests 559 passed, 31 skipped；Frontend tests 1171 passed；master CI passed；未提交 `.env`，未发现真实 API Key。
- Quantified results: Backend tests 559 passed, 31 skipped；Frontend tests 1171 passed；多个服务端点返回 200；master CI passed。
- Demo: Portfolio 当前链接为 `https://enterprise-ai-data-agent.vercel.app/`；README 提供本地 Frontend `http://localhost:3000`、Backend Docs `http://localhost:8000/docs`。
- GitHub: Portfolio 当前链接为 `https://github.com/Strange-Men/EnterpriseAiDataAgent`。
- Do not claim: 不写成完整 BI 平台、企业级生产系统、真实企业上线项目或商业化数据中台；README 明确项目是可本地运行的 AI 数据分析工作台 Demo，非生产级 BI 系统。

## 5. CustomerOpsAgent Facts

- Positioning: 面向跨境电商客服场景的 RAG + Agent Demo，重点是从知识库、检索、路由、回答生成、自动化评测到坏例迭代的质量闭环。
- Core workflow: 用户查询 -> 意图识别与路由 -> RAG 检索 / Mock 物流工具 / 安全兜底 -> 证据绑定 -> Answer Composer -> Evaluation Harness -> Bad Case Bank 迭代。
- Engineering highlights: 14 条 JSONL 知识文档覆盖 12 个客服场景；自实现 BM25 + Query Expansion + 元数据加权；11 个意图分类 + 规则驱动消歧；结构化回答模板“结论 -> 依据 -> 操作建议”；检索评测、回答评测、坏例评测三层 Evaluation Harness；131 条 Bad Case Bank；基于 Profile 的 LLM 适配器，前端只传 profile，真实 key 在 Render 后端环境变量；Docker Compose + Render + Vercel。
- Evaluation / tests: retrieval_eval.py 评估 Recall@1/3/5、MRR；answer_eval.py 评估相关性、有据性、完整性、引用命中率、回答合格率、兜底率；bad_case_eval.py 评估结构性通过率、引用覆盖率、兜底率；pytest 293 passed；ruff All checks passed；前端构建 passed；Docker Compose 本地验证通过；Mimo real LLM profile 验证通过。
- Quantified results: Answer Pass Rate 46.72% -> 60.66%，+13.94pp / 相对提升约 30%；Citation Hit Rate 83.61% -> 95.90%，+12.29pp；Fallback Rate 13.11% -> 0.82%，-12.29pp；Recall@5 90.00%，达到 85%+ 目标；Bad Case Bank 131 条，覆盖 11 个客服场景；结构性通过 128/131，97.71%；pytest 293 passed。
- Demo: `https://customer-ops-agent.vercel.app/`；Backend API `https://customeropsagent.onrender.com`；API Docs `https://customeropsagent.onrender.com/docs`。
- GitHub: `https://github.com/Strange-Men/CustomerOpsAgent`。
- Do not claim: 不写成完整客服 SaaS、真实企业客服系统上线、自动替代人工客服或多租户商业平台；README 定位为 Demo。

## 6. Copywriting Rules

- 说重点：每个项目保留一句定位、3 条核心 bullet、验证方式、技术栈和链接。
- 讲量化：优先使用 README 中明确写出的测试数量、评测指标、压缩率、通过率和 CI 状态。
- 突出工程化：写 Mock / Real 模式、CI、测试、Docker、评测框架、结构化输出、Provider 隔离、密钥边界。
- 突出工作流思维：强调输入、处理、验证、迭代的 pipeline，而不是泛泛描述功能。
- 不夸大：所有正式页面指标必须来自 README 或现有 Portfolio 文案；README 没有的指标不新增。

## 7. Proposed Portfolio Copy

### CodePilot

- 一句话定位：面向 Python 仓库的 AI 代码审查与仓库理解系统，从 GitHub URL 到带证据的结构化审查报告。
- Bullet 1：搭建仓库过滤、AST 解析和结构化上下文流程，在 httpx / click / uvicorn 基准仓库上实现平均 49.1% 文件降噪与 96.8% 上下文 token 压缩。
- Bullet 2：用 `ReportContract`、证据字段和 Mock / Real LLM 双模式约束输出，让审查报告可复查，并支持开发、测试和 CI 稳定回归。
- Bullet 3：通过 pytest 1034 passed、ruff 0 issues、audit_harness passed、Docker 本地运行和 Mock 审查成功率 100% 验证链路稳定性。

### EnterpriseAiDataAgent

- 一句话定位：面向 CSV / Excel 的 AI 数据分析工作台 Demo，串联数据上传、DuckDB 查询、自然语言分析、专家 SQL 和历史报告。
- Bullet 1：搭建上传、表格预览、DuckDB 查询和数据质量报告流程，让 CSV / Excel 数据可被自然语言问题和 SQL 工作台共同分析。
- Bullet 2：实现 Mock / DeepSeek / Doubao / Mimo provider adapter 与 fallback，默认无 API Key 可运行，真实 Key 仅保存在后端环境变量。
- Bullet 3：完成 M4.9.5 工程完整性回归，验证 Docker Compose、本地前后端 200、Backend 559 passed / Frontend 1171 passed 和 master CI passed。

### CustomerOpsAgent

- 一句话定位：面向跨境电商客服场景的 RAG + Agent Demo，构建知识库、检索、路由、回答生成、评测和坏例迭代闭环。
- Bullet 1：建设 14 条 JSONL 分层知识文档，覆盖 12 个客服场景，结合 BM25、查询扩展和元数据加权实现证据绑定检索。
- Bullet 2：设计 11 个意图分类、规则路由和“结论 -> 依据 -> 操作建议”回答模板，并用 Profile 机制隔离前端与真实 LLM key。
- Bullet 3：搭建 Evaluation Harness 与 131 条 Bad Case Bank，使 Answer Pass Rate 从 46.72% 提升到 60.66%，Recall@5 达到 90.00%，pytest 293 passed。

## 8. Risks and Anti-overclaim Notes

- CodePilot 的 token 压缩结果需写清是输入 token 和有效源码输入口径，不能写成端到端总成本降低。
- CodePilot 当前优先 Python，不写多语言全覆盖。
- EnterpriseAiDataAgent 是 Demo，不写完整 BI、真实企业上线、企业级生产系统。
- CustomerOpsAgent 是 Demo，不写完整客服 SaaS、真实企业客服系统上线或自动替代人工客服。
- CustomerOpsAgent 当前 README 写 131 条 Bad Case，旧 Portfolio 文案写 120+；正式页面应更新为 131 条。
- CustomerOpsAgent README 写 Recall@5 90.00% 且达到 85%+ 目标，正式页面应使用 90.00%，不退回旧 85% 表述。

## 9. Implementation Scope

计划修改：

- `src/data/projects.ts`
- `docs/46_PROJECT_COPY_SYNC_RESEARCH.md`
- `docs/DEV_STATUS.md`
- `docs/20_VERSION_HISTORY.md`
- `docs/01_CURRENT_PROJECT_CONTEXT.md`

不计划修改：

- `src/components/**`
- `src/index.css`
- `public/**`
- `index.html`
- `package.json`
- 三个项目仓库本身

## 10. Next Step

根据上述事实表更新 Portfolio 项目区文案，执行禁用词检查、build、本地页面检查、diff 检查，然后提交并推送当前分支。
