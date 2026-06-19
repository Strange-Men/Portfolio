import { codepilot } from '../../data/codepilot';
import { profile } from '../../data/profile';
import { SectionLabel, Tag } from '../ui';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-zinc-950 px-6 section-y text-zinc-50"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 border-t border-white/10 pt-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2
            id="about-title"
            className="text-section-title mt-5 font-semibold text-balance text-white"
          >
            关于我
          </h2>
        </div>

        <div className="space-y-8">
          <p className="text-body-lg max-w-3xl text-zinc-300">
            {profile.about}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-label text-zinc-500">身份</p>
              <p className="mt-3 text-base font-medium leading-relaxed text-zinc-100">
                {profile.identity}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-label text-zinc-500">方向</p>
              <p className="mt-3 text-base font-medium leading-relaxed text-zinc-100">
                {profile.directions.join(' / ')}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-label text-zinc-500">当前重点</p>
              <p className="mt-3 text-base font-medium leading-relaxed text-zinc-100">
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
