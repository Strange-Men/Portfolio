export const links = {
  github: 'https://github.com/Strange-Men',
  codepilotGithub: 'https://github.com/Strange-Men/CodePilot',
  codepilotDemo: 'https://code-pilot-red.vercel.app/',
  email: '1643229721@qq.com',
  emailHref: 'mailto:1643229721@qq.com?subject=Portfolio%20Contact',
} as const;

export type LinkKey = keyof typeof links;
