import { links } from '../../data/links';
import { profile } from '../../data/profile';
import { Button, ExternalLink, SectionLabel } from '../ui';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 px-6 section-y text-zinc-50"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>Contact</SectionLabel>

            <h2
              id="contact-title"
              className="text-section-title mt-5 font-semibold text-balance text-white"
            >
              保持联系，继续聊项目。
            </h2>

            <p className="text-body-lg mt-6 max-w-2xl text-zinc-300">
              如果你对 {profile.directions.join(' / ')} 实习方向感兴趣，可以通过
              Email 或 GitHub 联系我。当前第一版只提供真实联系入口，不放未确认链接。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={links.emailHref}>发送 Email</Button>
              <Button href={links.github} variant="secondary" external>
                GitHub
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
            <div className="space-y-6">
              <div>
                <p className="text-label text-zinc-500">Email</p>
                <div className="mt-2">
                  <ExternalLink href={links.emailHref} openInNewTab={false}>
                    {links.email}
                  </ExternalLink>
                </div>
              </div>

              <div>
                <p className="text-label text-zinc-500">GitHub</p>
                <div className="mt-2">
                  <ExternalLink href={links.github}>Strange-Men</ExternalLink>
                </div>
              </div>
            </div>

            <p className="text-body-default mt-8 border-t border-white/10 pt-6 text-zinc-500">
              项目详情请在上方项目区块查看；这里仅保留联系入口。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
