import { projects } from '../../data/projects';
import { BorderGlowCard, Button, RevealOnScroll, SectionLabel, Tag } from '../ui';

function ProjectCard({
  project,
  index,
  delay,
}: {
  project: (typeof projects)[number];
  index: number;
  delay: number;
}) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <RevealOnScroll delay={delay}>
      <div className="project-card grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
        {/* left: info */}
        <div>
          {/* project number anchor */}
          <div className="flex items-baseline gap-4 mb-5">
            <span className="project-number-anchor" aria-hidden="true">
              {number}
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {project.name}
              </h3>
              <p className="mt-0.5 text-sm text-zinc-500">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-body-lg max-w-xl text-zinc-300">
            {project.description}
          </p>

          {project.painPoint && (
            <p className="text-body-default mt-4 max-w-xl text-zinc-400">
              {project.painPoint}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.highlights.map((point) => (
              <Tag key={point}>{point}</Tag>
            ))}
          </div>

          {project.proof && (
            <div className="proof-block mt-5">
              <p className="proof-block-label">验证方式</p>
              <p className="text-sm leading-relaxed text-zinc-400">
                {project.proof}
              </p>
            </div>
          )}

          {project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
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
        </div>

        {/* right: tech stack / flow */}
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
          {project.flow && project.flow.length > 0 && (
            <>
              <h4 className="text-lg font-semibold tracking-tight text-white">
                项目流程
              </h4>
              <div className="mt-5 space-y-2 text-sm">
                {project.flow.map((step, stepIndex) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">
                      {stepIndex + 1}
                    </span>
                    <span className="text-zinc-300">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10" />
            </>
          )}

          <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </BorderGlowCard>
      </div>
    </RevealOnScroll>
  );
}

export function CodePilotSection() {
  return (
    <section
      id="projects"
      className="px-6 section-y text-zinc-50"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-16">
        <RevealOnScroll delay={0}>
          <SectionLabel>Core Projects</SectionLabel>
          <h2
            id="projects-title"
            className="text-section-title mt-5 font-semibold text-balance text-white"
          >
            项目实践
          </h2>
        </RevealOnScroll>

        <div className="mt-14 space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
