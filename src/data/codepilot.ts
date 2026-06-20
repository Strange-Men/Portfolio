import { links } from './links';

export const codepilot = {
  name: 'CodePilot',
  subtitle: 'AI 代码审查与仓库理解系统',
  description:
    '面向 GitHub 仓库的 AI 代码审查系统。用户输入仓库地址后，系统会自动克隆代码、解析项目结构，并生成包含架构概览、代码问题、可维护性分析和重构建议的 Markdown 报告，帮助快速理解中小型代码仓库。',
  painPoint:
    '很多中小型仓库在接手时缺少清晰文档，人工阅读代码成本高。CodePilot 尝试把"快速理解仓库结构"和"生成初步审查报告"自动化，帮助开发者更快判断项目结构、潜在问题和后续重构方向。',
  proofPoints: [
    '自动解析仓库结构',
    '结构化报告生成',
    '可演示工程闭环',
  ],
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
  githubUrl: links.codepilotGithub,
  demoUrl: null,
} as const;
