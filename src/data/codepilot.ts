import { links } from './links';

export const codepilot = {
  name: 'CodePilot',
  subtitle: 'GitHub Repository Understanding & AI Code Review',
  description:
    '输入 GitHub 仓库链接，解析源码结构，构建结构化上下文，并生成代码审查报告。',
  flow: [
    '输入 GitHub 仓库链接',
    '解析源码结构',
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
    '仓库解析',
    '源码结构分析',
    '结构化上下文',
    'AI 审查报告生成',
    'Mock / 真实 LLM 模式',
  ],
  githubUrl: links.codepilotGithub,
  demoUrl: null,
} as const;
