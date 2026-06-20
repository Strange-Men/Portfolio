import { projects } from '../../data/projects';
import { BorderGlowCard, Button, RevealOnScroll, SectionLabel, Tag } from '../ui';

export function CodePilotSection() {
  const featured = projects[0];
  const moreProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="px-6 section-y text-zinc-50"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-16">
        {/* Featured Project */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
          <RevealOnScroll delay={0}>
            <div>
              <SectionLabel>Core Project</SectionLabel>

              <h2
                id="projects-title"
                className="text-section-title mt-5 font-semibold text-balance text-white"
              >
                {featured.name}
              </h2>

              <p className="text-body-lg mt-6 max-w-xl text-zinc-300">
                {featured.description}
              </p>

              {featured.painPoint && (
                <p className="text-body-default mt-4 max-w-xl text-zinc-400">
                  {featured.painPoint}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {featured.highlights.map((point) => (
                  <Tag key={point}>{point}</Tag>
                ))}
              </div>

              {featured.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {featured.links.map((link) => (
                    <Button
                      key={link.label}
                      href={link.href}
                      variant={link.type === 'github' ? 'primary' : 'secondary'}
                      external
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </RevealOnScroll>

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

              {featured.flow && (
                <div className="mt-5 space-y-2 text-sm">
                  {featured.flow.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">
                        {index + 1}
                      </span>
                      <span className="text-zinc-300">{step}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </BorderGlowCard>
          </RevealOnScroll>
        </div>

        {/* More Projects */}
        {moreProjects.length > 0 && (
          <RevealOnScroll delay={200}>
            <div className="mt-20">
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-8">
                More Projects
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {moreProjects.map((project) => (
                  <BorderGlowCard
                    key={project.id}
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
                      {project.name}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      {project.subtitle}
                    </p>

                    <p className="text-body-default mt-4 text-zinc-300">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.highlights.map((point) => (
                        <Tag key={point}>{point}</Tag>
                      ))}
                    </div>

                    <div className="mt-5 pt-5 border-t border-white/10">
                      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </div>
                    </div>

                    {project.links.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <Button
                            key={link.label}
                            href={link.href}
                            variant={link.type === 'github' ? 'primary' : 'secondary'}
                            external
                          >
                            {link.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </BorderGlowCard>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
