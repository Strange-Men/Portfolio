export const profile = {
  name: '李泓轩',
  identity: '2027 届人工智能本科生',
  heroMeta: '2027 届人工智能本科生 · 求职方向',
  directions: ['AI 应用开发', 'Agent 开发', 'Python 后端'],
  heroTitle: 'AI 应用开发\nAgent 开发\nPython 后端',
  heroDescription:
    '2027 届人工智能本科生，关注 AI 应用开发、Agent 编排与 Python 后端工程实践。',
  about:
    '我是李泓轩，人工智能专业 2027 届本科生，主要关注 AI 应用开发、Agent 编排和 Python 后端工程。这个作品集用于整理我近期完成的项目实践、技术栈和可验证链接。目前我还在持续补基础、做项目和复盘工程细节，希望把每个项目都做得更清楚、更可靠，也更容易被别人理解。',
  focusTags: ['AI 应用开发', 'Agent 开发', 'Python 后端'],
  heroSummary: {
    label: 'Selected Work',
    title: '3 AI Projects',
    body: '代码审查、数据分析问答、RAG 评估增强 — 三个 AI 应用实践项目的紧凑索引。',
    projects: [
      { index: '01', name: 'CodePilot', tag: 'AI Code Review' },
      { index: '02', name: 'EnterpriseAiDataAgent', tag: 'Data Q&A Agent' },
      { index: '03', name: 'CustomerOpsAgent', tag: 'RAG Customer Agent' },
    ],
  },
} as const;
