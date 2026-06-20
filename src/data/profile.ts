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
    label: 'Project Demos',
    title: '3 个 AI 应用实践项目',
    body: '当前作品集集中展示我通过 AI 辅助开发推进的项目实践，包括代码审查、企业数据问答和客服 Agent 二次开发。页面下方统一展示每个项目的简介、技术亮点、技术栈和链接，方便快速了解我的工程实践能力。',
    highlights: [
      { key: '当前项目', value: 'CodePilot / EnterpriseAiDataAgent / Basjoo 二开' },
      { key: '能力重点', value: '代码解析 / 数据问答 / RAG 客服' },
      { key: '展示方式', value: '项目简介 / 技术亮点 / 链接入口' },
    ],
  },
} as const;
