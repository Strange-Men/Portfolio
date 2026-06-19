import { links } from './links';

export const codepilot = {
  name: 'CodePilot',
  subtitle: 'GitHub Repository Understanding & AI Code Review',
  description:
    'CodePilot 是一个面向公开 GitHub 仓库的代码理解与 AI 审查应用：输入仓库链接后，系统解析源码结构、构建结构化上下文，并生成可阅读的 Markdown 审查报告。',
  flow: [
    '输入 GitHub 仓库链接',
    '解析源码结构与依赖关系',
    '构建结构化上下文',
    '生成 Markdown 审查报告',
  ],
  techStack: [
    'Python',
    'FastAPI',
    'React',
    'Tree-sitter',
    'LLM API',
    'Markdown Report',
  ],
  talkingPoints: [
    'GitHub 仓库解析与任务流程',
    'Tree-sitter / AST 源码结构提取',
    '结构化上下文构建',
    'LLM 审查报告生成',
    'FastAPI 接口与前端报告展示',
  ],
  githubUrl: links.codepilotGithub,
  demoUrl: null,
} as const;
