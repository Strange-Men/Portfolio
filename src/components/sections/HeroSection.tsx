import { links } from '../../data/links';
import { profile } from '../../data/profile';
import { Button, SectionLabel, Tag } from '../ui';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-zinc-950 px-6 py-24 text-zinc-50"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.13),transparent_34%),linear-gradient(135deg,rgba(39,39,42,0.92),rgba(9,9,11,1)_58%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#hero"
            className="text-sm font-semibold tracking-[0.24em] text-zinc-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-50"
          >
            PORTFOLIO
          </a>

          <nav
            className="flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 sm:gap-2"
            aria-label="Primary navigation"
          >
            <a
              href="#hero"
              className="rounded-full px-4 py-2 text-sm font-medium text-white"
            >
              Hero
            </a>
            <a
              href="#about"
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50"
            >
              About
            </a>
            <a
              href="#codepilot"
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50"
            >
              CodePilot
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50"
            >
              Contact
            </a>
          </nav>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <div className="max-w-4xl">
            <SectionLabel>{profile.identity}</SectionLabel>

            <h1
              id="hero-title"
              className="mt-6 text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {profile.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              {profile.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#codepilot">查看 CodePilot</Button>
              <Button href={links.github} variant="secondary" external>
                GitHub
              </Button>
              <Button href="#contact" variant="ghost">
                联系我
              </Button>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30">
            <p className="text-sm leading-7 text-zinc-300">{profile.about}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.focusTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
