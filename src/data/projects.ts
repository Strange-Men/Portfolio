import { links } from './links';

export type ProjectLink = {
  label: string;
  href: string;
  type?: 'github' | 'demo' | 'readme' | 'other';
};

export type PortfolioProject = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  painPoint?: string;
  highlights: string[];
  flow?: string[];
  techStack: string[];
  links: ProjectLink[];
  proof?: string;
};

export const projects: PortfolioProject[] = [
  {
    id: 'codepilot',
    name: 'CodePilot',
    subtitle: 'AI 代码审查与仓库理解系统',
    description:
      '面向 Python 仓库的 AI 代码审查与仓库理解系统，从 GitHub URL 到带证据的结构化审查报告。',
    painPoint:
      '负责仓库过滤、静态解析、结构化上下文、LLM 报告契约和验证链路，把原始仓库阅读拆成可回归的工程流程。',
    highlights: [
      '搭建仓库过滤、AST 解析和结构化上下文流程，在 httpx / click / uvicorn 基准仓库上实现平均 49.1% 文件降噪与 96.8% 上下文 token 压缩。',
      '用 ReportContract、证据字段和 Mock / Real LLM 双模式约束输出，让审查报告可复查，并支持开发、测试和 CI 稳定回归。',
      '通过 pytest 1034 passed、ruff 0 issues、audit_harness passed、Docker 本地运行和 Mock 审查成功率 100% 验证链路稳定性。',
    ],
    flow: [
      '输入 GitHub 仓库地址',
      '克隆仓库并执行文件过滤',
      'AST 解析并构建结构化上下文',
      'LLM 生成带证据审查结果',
      '按 ReportContract 输出审查报告',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'Next.js',
      'TypeScript',
      'Python AST',
      'Pydantic',
      'Mock LLM',
      'Docker',
    ],
    links: [
      { label: '查看 GitHub', href: links.codepilotGithub, type: 'github' },
      { label: '在线演示', href: links.codepilotDemo, type: 'demo' },
    ],
    proof:
      'README 记录 3 个基准仓库 benchmark、httpx 真实 LLM 单仓验证、pytest / ruff / audit_harness / Docker 结果；Demo 可输入 GitHub 仓库地址查看报告。',
  },
  {
    id: 'enterprise-ai-data-agent',
    name: 'EnterpriseAiDataAgent',
    subtitle: 'CSV / Excel 数据分析工作台',
    description:
      '面向 CSV / Excel 的 AI 数据分析工作台 Demo，串联数据上传、DuckDB 查询、自然语言分析、专家 SQL 和历史报告。',
    painPoint:
      '负责数据上传、分析链路、SQL 工作台、Mock / 多 Provider fallback 和工程回归，让无 API Key 场景也能验证完整分析 workflow。',
    highlights: [
      '搭建上传、表格预览、DuckDB 查询和数据质量报告流程，让 CSV / Excel 数据可被自然语言问题和 SQL 工作台共同分析。',
      '实现 Mock / DeepSeek / Doubao / Mimo provider adapter 与 fallback，默认无 API Key 可运行，真实 Key 仅保存在后端环境变量。',
      '完成 M4.9.5 工程完整性回归，验证 Docker Compose、本地前后端 200、Backend 559 passed / Frontend 1171 passed 和 master CI passed。',
    ],
    flow: [
      '上传 CSV / Excel 数据',
      '预览表结构并导入 DuckDB',
      '自然语言分析或专家 SQL 查询',
      '生成分析结果与报告详情',
      '在 History 中回溯记录',
    ],
    techStack: [
      'React',
      'Next.js',
      'FastAPI',
      'DuckDB',
      'Pandas',
      'Monaco Editor',
      'Mock LLM',
      'Docker',
    ],
    links: [
      { label: '查看 GitHub', href: links.enterpriseAiGithub, type: 'github' },
      { label: '在线演示', href: links.enterpriseAiDemo, type: 'demo' },
    ],
    proof:
      'README 记录 Docker Compose、本地前后端 200、Mock LLM 默认可用、Backend 559 passed / Frontend 1171 passed 和 master CI passed；Demo 可体验核心流程。',
  },
  {
    id: 'customerops',
    name: '跨境电商客服 Agent 系统',
    subtitle: 'RAG 客服 Agent 与评测闭环',
    description:
      '面向跨境电商客服场景的 RAG + Agent Demo，构建知识库、检索、路由、回答生成、评测和坏例迭代闭环。',
    painPoint:
      '负责分层知识库、RAG 检索、意图路由、回答模板、自动化评测和 Bad Case Bank，把客服问答质量转成可度量、可迭代的 workflow。',
    highlights: [
      '建设 14 条 JSONL 分层知识文档，覆盖 12 个客服场景，结合 BM25、查询扩展和元数据加权实现证据绑定检索。',
      '设计 11 个意图分类、规则路由和“结论 → 依据 → 操作建议”回答模板，并用 Profile 机制隔离前端与真实 LLM key。',
      '搭建 Evaluation Harness 与 131 条 Bad Case Bank，使 Answer Pass Rate 从 46.72% 提升到 60.66%，Recall@5 达到 90.00%，pytest 293 passed。',
    ],
    flow: [
      '用户查询进入意图识别与路由',
      'RAG 检索 / 工具查询 / 安全兜底',
      '证据绑定后生成结构化回答',
      'Evaluation Harness 自动评测',
      'Bad Case Bank 驱动迭代',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'RAG',
      'BM25',
      'Evaluation',
      'Docker',
    ],
    links: [
      { label: '查看 GitHub', href: links.customerOpsGithub, type: 'github' },
      { label: '在线演示', href: links.customerOpsDemo, type: 'demo' },
    ],
    proof:
      'README 记录在线 Demo、Render API、三层评测体系、131 条 Bad Case、pytest 293 passed、ruff / 前端构建 / Docker Compose 验证和 Mimo Profile 验证。',
  },
];
