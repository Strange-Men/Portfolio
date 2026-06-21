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
      'Anthropic Claude API',
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
    id: 'basjoo',
    name: 'Basjoo 二开项目',
    subtitle: 'RAG 评估框架与客服知识库流程增强',
    description:
      '基于 Basjoo 开源客服系统进行二次开发，当前重点是为 RAG 客服场景补充可复现的评估框架。项目围绕 Mock Embedding、Mock Retriever、Mock RAG Pipeline、评估用例和 pytest 测试，验证知识库检索与回答质量。',
    painPoint:
      '客服 RAG 系统不能只看"能不能回答"，还需要评估检索是否命中、引用是否准确、是否存在幻觉风险。该项目选择在真实开源系统基础上补充评估闭环，用测试指标约束 RAG 流程质量。',
    highlights: [
      '基于开源项目的二次开发',
      'Mock 可复现 RAG 评估流程',
      'Precision / Recall / MRR 等指标约束',
      'pytest 测试与阶段评估报告',
    ],
    flow: [
      '阅读 Basjoo 开源项目结构',
      '构建 Mock Embedding / Retriever / RAG Pipeline',
      '设计 RAG eval cases',
      '运行 pytest 与评估指标',
      '输出阶段评估报告',
    ],
    techStack: [
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'Qdrant',
      'Docker',
      'pytest',
      'RAG',
      'Python',
    ],
    links: [
      { label: '项目说明', href: links.basjooReadme, type: 'readme' },
      { label: '代码仓库', href: links.basjooCode, type: 'github' },
    ],
    proof:
      '可先查看项目说明仓库理解二开目标，再进入 basjoo 分支查看 RAG evaluation harness、pytest 测试、eval cases 和阶段评估记录。',
  },
];
