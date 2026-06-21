import { links } from '../../data/links';
import { profile } from '../../data/profile';
import { BorderGlowCard, Button, ExternalLink, RevealOnScroll, SectionLabel } from '../ui';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-6 section-y text-zinc-50"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <RevealOnScroll delay={0}>
            <div>
              <SectionLabel>Contact</SectionLabel>

              <h2
                id="contact-title"
                className="text-section-title mt-5 font-semibold text-balance text-white"
              >
                期待进一步沟通。
              </h2>

              <p className="text-body-lg mt-6 max-w-2xl text-zinc-300">
                我正在寻找 {profile.directions.join(' / ')} 相关工作机会。你可以通过
                Email 联系我，也可以查看 GitHub 了解我的项目代码与迭代记录。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={links.gmailHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="contact-gmail-btn"
                >
                  发送 Email
                </a>
                <Button href={links.github} variant="secondary" external>
                  GitHub
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <BorderGlowCard
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30"
              edgeSensitivity={30}
              glowColor="315 90 78"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={0.82}
              coneSpread={25}
              colors={['#c084fc', '#eb1f94', '#f838ea']}
              fillOpacity={0.08}
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
            </BorderGlowCard>
          </RevealOnScroll>
        </div>

        {/* signature footer */}
        <footer className="contact-signature mt-20 border-t border-white/[0.06] pt-8">
          <p className="text-xs tracking-widest text-zinc-600">
            Designed and built by 李泓轩
          </p>
        </footer>
      </div>
    </section>
  );
}
