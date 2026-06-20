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
};

export const projects: PortfolioProject[] = [
  {
    id: 'codepilot',
    name: 'CodePilot',
    subtitle: 'AI 代码审查与仓库理解系统',
    description:
      '面向 GitHub 仓库的 AI 代码审查系统。用户输入仓库地址后，系统会自动克隆代码、解析项目结构，并生成包含架构概览、代码问题、可维护性分析和重构建议的 Markdown 报告，帮助快速理解中小型代码仓库。',
    painPoint:
      '很多中小型仓库在接手时缺少清晰文档，人工阅读代码成本高。CodePilot 尝试把"快速理解仓库结构"和"生成初步审查报告"自动化，帮助开发者更快判断项目结构、潜在问题和后续重构方向。',
    highlights: ['自动解析仓库结构', '结构化报告生成', '可演示工程闭环'],
    flow: [
      '输入仓库地址',
      '自动克隆与代码解析',
      '构建结构化上下文',
      '生成 Markdown 审查报告',
    ],
    techStack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Tree-sitter',
      'LLM API',
      'SQLite',
    ],
    links: [
      { label: '查看 GitHub', href: links.codepilotGithub, type: 'github' },
      { label: '在线演示', href: links.codepilotDemo, type: 'demo' },
    ],
  },
  {
    id: 'enterprise-ai-data-agent',
    name: 'EnterpriseAiDataAgent',
    subtitle: '企业数据问答与分析 Agent',
    description:
      '面向企业数据查询与分析场景的 AI Agent 项目，重点探索自然语言提问、数据检索、结果整理和分析报告生成流程，帮助用户更低成本地理解业务数据。',
    highlights: ['自然语言数据问答', '数据检索与结果整理', '分析报告生成流程'],
    techStack: ['Python', 'FastAPI', 'LLM API'],
    links: [
      { label: '查看 GitHub', href: links.enterpriseAiGithub, type: 'github' },
    ],
  },
  {
    id: 'basjoo',
    name: 'Basjoo 二开项目',
    subtitle: '基于开源客服系统的 AI 客服 Agent 二次开发',
    description:
      '基于 Basjoo 开源项目进行二次开发，重点理解并扩展客服系统中的知识库问答、RAG 检索、多租户和前后端协作流程，用于沉淀真实业务场景下的 AI 客服 Agent 工程实践。',
    highlights: ['开源项目二次开发', '知识库问答与 RAG 检索', '客服场景前后端联调'],
    techStack: ['FastAPI', 'Next.js', 'Qdrant', 'RAG', 'Docker'],
    links: [
      { label: '项目说明', href: links.basjooReadme, type: 'readme' },
      { label: '代码仓库', href: links.basjooCode, type: 'github' },
    ],
  },
];
