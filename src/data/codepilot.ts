import { links } from './links';

export const codepilot = {
  name: 'CodePilot',
  subtitle: 'GitHub Repository Understanding & AI Code Review',
  description:
    '面向公开 GitHub 仓库的 AI 代码理解与审查项目：输入仓库链接，解析源码结构，生成可阅读的 Markdown 审查报告。',
  proofPoints: [
    '仓库解析',
    '结构化上下文',
    'AI 审查报告',
  ],
  flow: [
    'GitHub 仓库链接',
    '源码解析',
    '结构化上下文',
    'Markdown 报告',
  ],
  techStack: [
    'Python',
    'FastAPI',
    'Tree-sitter',
    'LLM API',
  ],
  githubUrl: links.codepilotGithub,
  demoUrl: null,
} as const;
