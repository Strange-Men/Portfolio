import { links } from '../../data/links';
import { profile } from '../../data/profile';
import { Button, ExternalLink, SectionLabel } from '../ui';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 px-6 py-24 text-zinc-50"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>Contact</SectionLabel>

            <h2
              id="contact-title"
              className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl"
            >
              保持联系，继续聊项目。
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              如果你对 {profile.directions.join(' / ')} 实习方向感兴趣，可以通过
              Email 或 GitHub 联系我。当前第一版只提供真实联系入口，不放未确认链接。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={links.emailHref}>发送 Email</Button>
              <Button href={links.github} variant="secondary" external>
                GitHub
              </Button>
              <Button href={links.codepilotGithub} variant="ghost" external>
                CodePilot 仓库
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-zinc-500">Email</p>
                <div className="mt-2">
                  <ExternalLink href={links.emailHref} openInNewTab={false}>
                    {links.email}
                  </ExternalLink>
                </div>
              </div>

              <div>
                <p className="text-sm text-zinc-500">GitHub</p>
                <div className="mt-2">
                  <ExternalLink href={links.github}>Strange-Men</ExternalLink>
                </div>
              </div>

              <div>
                <p className="text-sm text-zinc-500">Core Project</p>
                <div className="mt-2">
                  <ExternalLink href={links.codepilotGithub}>
                    CodePilot Repository
                  </ExternalLink>
                </div>
              </div>
            </div>

            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-zinc-500">
              当前没有展示简历下载、未确认 Demo 或其他平台入口，避免出现空链接和假链接。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
