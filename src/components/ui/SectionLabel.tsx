import type { ReactNode } from 'react';

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p
      className={[
        'text-label font-semibold text-zinc-500',
        className,
      ].join(' ')}
    >
      {children}
    </p>
  );
}
