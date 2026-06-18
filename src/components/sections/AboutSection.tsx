import { codepilot } from '../../data/codepilot';
import { profile } from '../../data/profile';
import { SectionLabel, Tag } from '../ui';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-6 py-24 text-zinc-50"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 border-t border-white/10 pt-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2
            id="about-title"
            className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl"
          >
            先把一个核心项目讲清楚。
          </h2>
        </div>

        <div className="space-y-8">
          <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            {profile.about}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-zinc-500">身份</p>
              <p className="mt-3 text-base font-medium text-zinc-100">
                {profile.identity}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-zinc-500">方向</p>
              <p className="mt-3 text-base font-medium text-zinc-100">
                {profile.directions.join(' / ')}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm text-zinc-500">核心项目</p>
              <p className="mt-3 text-base font-medium text-zinc-100">
                {codepilot.name}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {profile.focusTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
