import { links } from '../../data/links';
import { profile } from '../../data/profile';
import { BorderGlowCard, Button, ExternalLink, SectionLabel } from '../ui';

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
              期待实习机会，也欢迎进一步沟通。
            </h2>

            <p className="text-body-lg mt-6 max-w-2xl text-zinc-300">
              我正在寻找 {profile.directions.join(' / ')} 相关实习机会。你可以通过
              Email 联系我，也可以查看 GitHub 了解我的项目代码与迭代记录。
            </p>

            <p className="text-body-default mt-4 max-w-2xl text-zinc-500">
              当前页面只保留真实联系方式，不放未确认的 Demo 或下载链接。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={links.emailHref}>发送 Email</Button>
              <Button href={links.github} variant="secondary" external>
                GitHub
              </Button>
            </div>
          </div>

          <BorderGlowCard
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30"
            edgeSensitivity={28}
            glowColor="225 90 78"
            backgroundColor="#101014"
            borderRadius={28}
            glowRadius={38}
            glowIntensity={0.72}
            colors={['#818cf8', '#22d3ee', '#c084fc']}
            fillOpacity={0.12}
          >
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
          </BorderGlowCard>
        </div>
      </div>
    </section>
  );
}
