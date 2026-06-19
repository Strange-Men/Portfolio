import { codepilot } from '../../data/codepilot';
import { BorderGlowCard, Button, RevealOnScroll, SectionLabel, Tag } from '../ui';

export function CodePilotSection() {
  return (
    <section
      id="codepilot"
      className="bg-zinc-950 px-6 section-y text-zinc-50"
      aria-labelledby="codepilot-title"
    >
      <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
          {/* 左侧：项目定位与入口 */}
          <RevealOnScroll delay={0}>
            <div>
              <SectionLabel>Core Project</SectionLabel>

              <h2
                id="codepilot-title"
                className="text-section-title mt-5 font-semibold text-balance text-white"
              >
                {codepilot.name}
              </h2>

              <p className="text-body-lg mt-6 max-w-xl text-zinc-300">
                {codepilot.description}
              </p>

              <p className="text-body-default mt-4 max-w-xl text-zinc-400">
                {codepilot.painPoint}
              </p>

              {/* 证明关键词 */}
              <div className="mt-6 flex flex-wrap gap-2">
                {codepilot.proofPoints.map((point) => (
                  <Tag key={point}>{point}</Tag>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={codepilot.githubUrl} external>
                  查看 GitHub / README
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          {/* 右侧：紧凑流程与技术栈 */}
          <RevealOnScroll delay={120}>
            <BorderGlowCard
              className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
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
              <h3 className="text-lg font-semibold tracking-tight text-white">
                项目流程
              </h3>

              <div className="mt-5 space-y-2 text-sm">
                {codepilot.flow.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">
                      {index + 1}
                    </span>
                    <span className="text-zinc-300">{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {codepilot.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </BorderGlowCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
