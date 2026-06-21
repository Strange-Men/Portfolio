import { profile } from '../../data/profile';
import { RevealOnScroll, SectionLabel } from '../ui';

const editorialCards = [
  {
    num: '01',
    title: 'Engineering',
    body: '把复杂流程拆成可运行、可测试、可解释的系统。',
  },
  {
    num: '02',
    title: 'Product Sense',
    body: '关注用户能不能快速理解项目价值和验证路径。',
  },
  {
    num: '03',
    title: 'Visual Judgment',
    body: '用克制的排版、动效和信息层级，让项目更可信。',
  },
] as const;

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
                这个作品集本身也是我的一个项目 —— 我在意每个细节是否能被理解。
              </p>
            </div>
          </RevealOnScroll>

          {/* editorial cards — lightweight, no glow */}
          <RevealOnScroll delay={80}>
            <div className="grid gap-4 sm:grid-cols-3">
              {editorialCards.map((card) => (
                <div
                  key={card.num}
                  className="about-editorial-card rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
                >
                  <p className="text-label text-zinc-600 mb-2">{card.num}</p>
                  <p className="text-sm font-semibold text-zinc-100 tracking-tight mb-1.5">
                    {card.title}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
