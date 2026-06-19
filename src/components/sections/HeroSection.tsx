import { codepilot } from '../../data/codepilot';
import { links } from '../../data/links';
import { profile } from '../../data/profile';
import { Button, SectionLabel, Tag } from '../ui';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden bg-zinc-950 px-5 py-28 text-white sm:px-6"
      style={{ minHeight: '100dvh' }}
      aria-labelledby="hero-title"
    >
      {/* background glow layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.10),transparent_34%),linear-gradient(to_bottom,rgba(9,9,11,0.30),rgba(9,9,11,1))]" />
        <div className="hero-grid-bg absolute inset-0 opacity-60" />
      </div>

      {/* content shell */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col">
        {/* portfolio label */}
        <header className="mb-16 sm:mb-20">
          <a
            href="#hero"
            className="text-label text-zinc-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-50"
          >
            PORTFOLIO
          </a>
        </header>

        {/* main hero content + info card */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          {/* left: title / description / CTA */}
          <div>
            <SectionLabel>{profile.identity}</SectionLabel>

            <h1
              id="hero-title"
              className="text-display mt-6 max-w-3xl text-balance font-semibold"
            >
              {profile.heroTitle}
            </h1>

            <p className="text-body-lg mt-6 max-w-2xl text-zinc-300">
              {profile.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="#codepilot">查看 CodePilot</Button>
              <Button href={links.github} variant="secondary" external>
                GitHub
              </Button>
              <Button href="#contact" variant="ghost">
                联系我
              </Button>
            </div>
          </div>

          {/* right: CodePilot info card */}
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <p className="text-label text-zinc-500">Core Project</p>

            <h2 className="mt-3 text-lg font-semibold tracking-tight text-white">
              {codepilot.name}
            </h2>

            <p className="mt-1 text-sm font-medium text-zinc-400">
              {codepilot.subtitle}
            </p>

            <p className="text-body-default mt-4 text-zinc-300">
              {codepilot.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {codepilot.techStack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </aside>
        </div>

        {/* bottom value tags */}
        <div className="mt-16 flex flex-wrap items-center gap-3 sm:mt-20">
          {profile.directions.map((d) => (
            <span
              key={d}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-400 sm:text-sm"
            >
              {d}
            </span>
          ))}
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-400 sm:text-sm">
            {codepilot.name}
          </span>
        </div>
      </div>
    </section>
  );
}
