import { codepilot } from '../../data/codepilot';
import { profile } from '../../data/profile';
import { BorderGlowCard, RevealOnScroll, SectionLabel, Tag } from '../ui';

export function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 section-y text-zinc-50"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 border-t border-white/10 pt-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <RevealOnScroll delay={0}>
          <div>
            <SectionLabel>About</SectionLabel>
            <h2
              id="about-title"
              className="text-section-title mt-5 font-semibold text-balance text-white"
            >
              关于我
            </h2>
          </div>
        </RevealOnScroll>

        <div className="space-y-8">
          <RevealOnScroll delay={0}>
            <div className="space-y-5">
              <p className="text-body-lg max-w-3xl text-zinc-300">
                {profile.about}
              </p>
              <p className="text-body-default max-w-3xl text-zinc-500 italic">
                这个作品集本身也是我的一个项目 — 我在意每个细节是否能被理解。
              </p>
            </div>
          </RevealOnScroll>

          {/* info strip — horizontal, editorial style */}
          <RevealOnScroll delay={80}>
            <div className="about-info-strip flex flex-col gap-0 sm:flex-row sm:gap-0">
              <div className="about-info-item flex-1 py-4 sm:py-0 sm:px-5 sm:border-r sm:border-white/[0.06]">
                <p className="text-label text-zinc-600 mb-1.5">身份</p>
                <p className="text-sm font-medium text-zinc-200 leading-relaxed">
                  {profile.identity}
                </p>
              </div>
              <div className="about-info-item flex-1 py-4 sm:py-0 sm:px-5 sm:border-r sm:border-white/[0.06]">
                <p className="text-label text-zinc-600 mb-1.5">方向</p>
                <p className="text-sm font-medium text-zinc-200 leading-relaxed">
                  {profile.directions.join(' · ')}
                </p>
              </div>
              <div className="about-info-item flex-1 py-4 sm:py-0 sm:px-5">
                <p className="text-label text-zinc-600 mb-1.5">当前重点</p>
                <p className="text-sm font-medium text-zinc-200 leading-relaxed">
                  {codepilot.name}
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0}>
            <div className="flex flex-wrap gap-2">
              {profile.focusTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
