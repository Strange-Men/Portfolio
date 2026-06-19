import { codepilot } from '../../data/codepilot';
import { Button, SectionLabel, Tag } from '../ui';

export function CodePilotSection() {
  return (
    <section
      id="codepilot"
      className="bg-zinc-950 px-6 py-24 text-zinc-50"
      aria-labelledby="codepilot-title"
    >
      <div className="mx-auto w-full max-w-6xl border-t border-white/10 pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionLabel>Core Project</SectionLabel>

            <h2
              id="codepilot-title"
              className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl"
            >
              {codepilot.name}
            </h2>

            <p className="mt-3 text-base font-medium text-zinc-400">
              {codepilot.subtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
              {codepilot.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={codepilot.githubUrl} external>
                查看 CodePilot GitHub
              </Button>
            </div>

            {codepilot.demoUrl ? (
              <p className="mt-4 text-sm text-zinc-500">
                Demo link is available.
              </p>
            ) : (
              <p className="mt-4 text-sm text-zinc-500">
                Demo 暂未展示，当前只提供真实 GitHub 仓库链接。
              </p>
            )}
          </div>

          <div className="space-y-6">
            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                核心流程
              </h3>

              <ol className="mt-6 space-y-4">
                {codepilot.flow.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-zinc-300">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm leading-6 text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                技术栈
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {codepilot.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                可讲技术点
              </h3>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {codepilot.talkingPoints.map((point) => (
                  <li
                    key={point}
                    className="min-w-0 break-words rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
