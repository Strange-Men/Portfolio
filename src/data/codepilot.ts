import { links } from './links';

export const codepilot = {
  name: 'CodePilot',
  subtitle: 'GitHub Repository Understanding & AI Code Review',
  description:
    '面向公开 GitHub 仓库的 AI 代码理解与审查项目：输入仓库链接后，系统会解析源码结构、构建结构化上下文，并生成可阅读的 Markdown 审查报告。',
  painPoint:
    '它解决的是"接手一个陌生仓库时，难以快速理解结构、风险和改进方向"的问题，适合用来展示 AI 应用开发、Python 后端和 LLM 工程化能力。',
  proofPoints: [
    '仓库解析',
    '结构化上下文',
    'AI 审查报告',
  ],
  flow: [
    '输入仓库 URL',
    '克隆 / 读取源码',
    'Tree-sitter / AST 解析',
    '构建上下文',
    '生成 Markdown 报告',
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
