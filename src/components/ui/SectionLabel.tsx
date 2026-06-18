import type { ReactNode } from 'react';

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={[
        'text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500',
        className,
      ].join(' ')}
    >
      {children}
    </p>
  );
}
