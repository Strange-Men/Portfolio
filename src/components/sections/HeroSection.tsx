import { links } from '../../data/links';
import { profile } from '../../data/profile';
import { BorderGlowCard, Button, SectionLabel } from '../ui';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden px-6 py-28 text-white"
      style={{ minHeight: '100dvh' }}
      aria-labelledby="hero-title"
    >
      {/* background glow layers — simplified, one focal point */}
      <div className="hero-anim hero-glow pointer-events-none absolute inset-0 -z-10 overflow-hidden" style={{ animationDelay: '0.05s' }}>
        <div className="hero-premium-bg" />
        <div className="absolute left-1/2 top-[-20rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/18 blur-[80px]" />
        <div className="absolute right-[-6rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-cyan-400/8 blur-[60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="hero-grid-bg absolute inset-0 opacity-50" />
      </div>

      {/* bottom transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-56 bg-gradient-to-b from-transparent via-[#09090b]/30 to-transparent"
      />

      {/* content shell */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        {/* monogram + portfolio label */}
        <header className="hero-anim hero-fade mb-16 sm:mb-20 flex items-center gap-4" style={{ animationDelay: '0.12s' }}>
          <span className="hero-monogram" aria-hidden="true">LH</span>
          <span className="h-[1px] w-8 bg-white/20" aria-hidden="true" />
          <a
            href="#hero"
            className="text-label text-zinc-500 transition-colors hover:text-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-50"
          >
            PORTFOLIO
          </a>
        </header>

        {/* main hero content + info card */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          {/* left: title / description / CTA */}
          <div>
            <div className="hero-anim hero-fade" style={{ animationDelay: '0.12s' }}>
              <SectionLabel>{profile.heroMeta}</SectionLabel>
            </div>

            <h1
              id="hero-title"
              className="hero-anim hero-reveal text-display mt-6 max-w-3xl text-balance font-semibold"
              style={{ animationDelay: '0.22s' }}
            >
              {profile.heroTitle.split('\n').map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero-anim hero-fade text-body-lg mt-6 max-w-2xl text-zinc-300" style={{ animationDelay: '0.38s' }}>
              {profile.heroDescription}
            </p>

            <div className="hero-anim hero-fade mt-10 flex flex-wrap gap-3" style={{ animationDelay: '0.52s' }}>
              <Button href="#projects">查看项目</Button>
              <Button href={links.github} variant="secondary" external>
                GitHub
              </Button>
              <Button href="#contact" variant="ghost">
                联系我
              </Button>
            </div>

            {/* signature line */}
            <p className="hero-anim hero-fade hero-signature mt-12 text-xs tracking-widest text-zinc-600" style={{ animationDelay: '0.68s' }}>
              Built by 李泓轩
            </p>
          </div>

          {/* right: Selected Work — editorial project index */}
          <BorderGlowCard
            className="hero-anim hero-fade rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm"
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
            <p className="text-label text-zinc-500">{profile.heroSummary.label}</p>

            <h2 className="mt-3 text-lg font-semibold tracking-tight text-white">
              {profile.heroSummary.title}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {profile.heroSummary.body}
            </p>

            {/* editorial project index */}
            <div className="mt-5 space-y-0">
              {profile.heroSummary.projects.map((item, i) => (
                <div
                  key={item.index}
                  className={`group flex items-center gap-4 py-3 ${i < profile.heroSummary.projects.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
                >
                  <span className="hero-project-index shrink-0">
                    {item.index}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-zinc-100 leading-tight">
                      {item.name}
                    </span>
                  </div>
                  <span className="shrink-0 text-[11px] tracking-wide text-zinc-600 uppercase">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </BorderGlowCard>
        </div>
      </div>
    </section>
  );
}
