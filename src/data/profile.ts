export const profile = {
  name: '李泓轩',
  identity: '2027 届人工智能本科生',
  heroMeta: '2027 届人工智能本科生 · 求职方向',
  directions: ['AI 应用开发', 'Agent 开发', 'Python 后端'],
  heroTitle: 'AI 应用开发\nAgent 开发\nPython 后端',
  heroDescription:
    '2027 届人工智能本科生，关注 AI 应用开发、Agent 编排与 Python 后端工程实践。',
  about:
    '我是一名 2027 届人工智能本科生，当前求职方向为 AI 应用开发、Agent 开发和 Python 后端。这个作品集用于展示我的核心项目与技术实践；当前重点展示 CodePilot，一个面向 GitHub 仓库的 AI 代码审查与仓库理解系统。',
  focusTags: ['AI 应用开发', 'Agent 开发', 'Python 后端'],
  heroSummary: {
    label: 'Selected Work',
    title: '3 AI Projects / Demos',
    body: '代码审查、数据分析问答、RAG 客服流程 — 三个 AI 应用实践项目的紧凑索引。',
    projects: [
      { index: '01', name: 'CodePilot', tag: 'AI Code Review' },
      { index: '02', name: 'EnterpriseAiDataAgent', tag: 'Data Q&A Agent' },
      { index: '03', name: 'Basjoo 二开项目', tag: 'RAG Customer Agent' },
    ],
  },
} as const;
