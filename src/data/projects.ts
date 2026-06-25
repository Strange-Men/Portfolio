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
      '面向 GitHub 仓库的 AI 代码审查与仓库理解项目。系统支持仓库拉取、代码结构解析、结构化上下文构建、多 Agent 审查和 Markdown 报告生成，帮助快速理解中小型代码仓库的结构、问题和重构方向。',
    painPoint:
      '中小型仓库在接手时常缺少清晰文档，人工阅读代码成本高。CodePilot 尝试把仓库结构理解、问题定位和初步审查报告生成自动化，降低理解陌生代码库的时间成本。',
    highlights: [
      'Tree-sitter / AST 解析仓库结构',
      '多 Agent 审查与结构化报告生成',
      'Evidence-grounded 证据绑定',
      'Mock / 真实 LLM 双模式演示',
    ],
    flow: [
      '输入 GitHub 仓库地址',
      '克隆仓库并解析代码结构',
      '构建结构化上下文与审查任务',
      '多 Agent 生成审查结果与证据',
      '输出 Markdown 代码审查报告',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'Next.js',
      'TypeScript',
      'Tree-sitter',
      'SQLite',
      'Pydantic',
      'LLM API',
    ],
    links: [
      { label: '查看 GitHub', href: links.codepilotGithub, type: 'github' },
      { label: '在线演示', href: links.codepilotDemo, type: 'demo' },
    ],
    proof:
      '可在线打开 Demo，输入 GitHub 仓库地址查看审查报告；也可在 GitHub 查看前后端代码、测试与 CI 配置。',
  },
  {
    id: 'enterprise-ai-data-agent',
    name: 'EnterpriseAiDataAgent',
    subtitle: 'CSV / Excel 数据分析工作台',
    description:
      '面向 CSV / Excel 数据分析场景的 AI 数据工作台。项目支持数据上传、DuckDB 查询、SQL 工作台、自然语言转 SQL、流式解释和 Markdown 分析报告生成，用于探索非技术用户低门槛理解业务数据的流程。',
    painPoint:
      '业务数据常分散在表格和报表中，非技术用户想获得分析结论通常需要手动筛选、写 SQL 或依赖他人处理。该项目尝试用自然语言查询、SQL 工作台和报告生成降低数据分析门槛。',
    highlights: [
      'CSV / Excel 上传与 DuckDB 查询',
      '自然语言转 SQL 与 SQL 工作台',
      'SSE 流式解释与 Markdown 报告',
      '异常检测与数据质量分析',
    ],
    flow: [
      '上传 CSV / Excel 数据',
      '导入 DuckDB 并生成数据表',
      '自然语言提问或编写 SQL',
      '流式解释分析过程',
      '生成 Markdown 分析报告',
    ],
    techStack: [
      'Next.js',
      'React',
      'FastAPI',
      'DuckDB',
      'Pandas',
      'Monaco Editor',
      'LLM API',
      'SSE',
    ],
    links: [
      { label: '查看 GitHub', href: links.enterpriseAiGithub, type: 'github' },
      { label: '在线演示', href: links.enterpriseAiDemo, type: 'demo' },
    ],
    proof:
      '可在线体验数据上传、SQL 工作台和数据质量等基础功能；也可在 GitHub 查看 DuckDB、NL→SQL、SSE 和报告生成相关代码与测试。',
  },
  {
    id: 'customerops',
    name: '跨境电商客服 Agent 系统',
    subtitle: 'RAG 客服 Agent 与评测闭环',
    description:
      '面向跨境电商客服场景的 RAG 客服 Agent，针对回复重复、知识分散、质量难评估等问题，搭建知识检索、自动回复与评测闭环。',
    painPoint:
      '跨境电商客服常面临知识分散、回复质量不稳定、难以量化评估等问题。该项目尝试用 RAG 检索、Prompt 优化和评测框架构建可验证的客服 Agent 能力体系。',
    highlights: [
      '搭建分层知识库与 RAG 检索体系，优化召回策略与 Prompt 模板，在自建评测集上 top-5 知识召回准确率提升至 85%',
      '设计 RAG Evaluation Harness 评测框架，从召回、证据引用、回答质量三个维度自动化评估客服回复效果',
      '累计优化 120+ 典型问题 Bad Case，高频咨询场景回答合格率提升 30%',
    ],
    flow: [
      '构建分层知识库与 RAG 检索体系',
      '设计 Prompt 模板与回复策略',
      '搭建 RAG Evaluation Harness 评测框架',
      '自动化评估召回、引用与回答质量',
      '迭代优化 Bad Case 并验证效果',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'RAG',
      'LLM API',
      'Prompt Engineering',
      'Evaluation Harness',
      'React',
      'Vite',
    ],
    links: [
      { label: '查看 GitHub', href: links.customerOpsGithub, type: 'github' },
      { label: '在线演示', href: links.customerOpsDemo, type: 'demo' },
    ],
    proof:
      '形成可复用客服 Agent 与评测套件，支持多语种知识库快速迁移。可通过在线 Demo 体验客服问答流程，并在 GitHub 查看 RAG 检索、评测框架、Bad Case 优化与项目文档。',
  },
];
