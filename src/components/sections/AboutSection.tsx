import { profile } from '../../data/profile';
import { BorderGlowCard, RevealOnScroll, SectionLabel } from '../ui';

const aboutCards = [
  {
    num: '01',
    label: '身份',
    body: '2027 届人工智能本科生',
  },
  {
    num: '02',
    label: '方向',
    body: 'AI 应用开发 · Agent 开发 · Python 后端',
  },
  {
    num: '03',
    label: '当前重点',
    body: 'CodePilot / EnterpriseAiDataAgent / CustomerOpsAgent',
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
            <p className="text-body-lg max-w-3xl text-zinc-300">
              {profile.about}
            </p>
          </RevealOnScroll>

          {/* info cards — with glow animation */}
          <RevealOnScroll delay={80}>
            <div className="grid gap-4 sm:grid-cols-3">
              {aboutCards.map((card) => (
                <BorderGlowCard
                  key={card.num}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
                  edgeSensitivity={40}
                  glowColor="260 80 70"
                  backgroundColor="#0f0f13"
                  borderRadius={16}
                  glowRadius={30}
                  glowIntensity={0.6}
                  coneSpread={20}
                  colors={['#818cf8', '#a78bfa', '#c084fc']}
                  fillOpacity={0.05}
                >
                  <p className="text-label text-zinc-600 mb-2">{card.num}</p>
                  <p className="text-sm font-semibold text-zinc-100 tracking-tight mb-1.5">
                    {card.label}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {card.body}
                  </p>
                </BorderGlowCard>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
