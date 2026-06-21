export const profile = {
  name: '李泓轩',
  identity: '2027 届人工智能本科生',
  heroMeta: '2027 届人工智能本科生 · 求职方向',
  directions: ['AI 应用开发', 'Agent 开发', 'Python 后端'],
  heroTitle: 'AI 应用开发\nAgent 开发\nPython 后端',
  heroDescription:
    '2027 届人工智能本科生，关注 AI 应用开发、Agent 编排与 Python 后端工程实践。',
  about:
    '我正在用 AI 应用项目训练自己对工程、产品和视觉表达的综合判断力。相比只做能跑的 Demo，我更在意一个项目能不能被理解、被验证、被展示。',
  focusTags: ['AI 应用开发', 'Agent 开发', 'Python 后端'],
  heroSummary: {
    label: 'Selected Work',
    title: '3 AI Projects',
    body: '代码审查、数据分析问答、RAG 评估增强 — 三个 AI 应用实践项目的紧凑索引。',
    projects: [
      { index: '01', name: 'CodePilot', tag: 'AI Code Review' },
      { index: '02', name: 'EnterpriseAiDataAgent', tag: 'Data Q&A Agent' },
      { index: '03', name: 'Basjoo 二开', tag: 'RAG Eval Harness' },
    ],
  },
} as const;
