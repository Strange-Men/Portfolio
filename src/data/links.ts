export const links = {
  github: 'https://github.com/Strange-Men',
  codepilotGithub: 'https://github.com/Strange-Men/CodePilot',
  codepilotDemo: 'https://code-pilot-red.vercel.app/',
  enterpriseAiGithub: 'https://github.com/Strange-Men/EnterpriseAiDataAgent',
  enterpriseAiDemo: 'https://enterprise-ai-data-agent.vercel.app/',
  basjooReadme: 'https://github.com/Strange-Men/CustomerOpsAgent_2',
  basjooCode: 'https://github.com/Strange-Men/basjoo/tree/phase1-rag-eval-harness',
  email: '1643229721@qq.com',
  emailHref: 'mailto:1643229721@qq.com?subject=Portfolio%20Contact',
  gmailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=1643229721%40qq.com&su=Portfolio%20Contact',
} as const;

export type LinkKey = keyof typeof links;
