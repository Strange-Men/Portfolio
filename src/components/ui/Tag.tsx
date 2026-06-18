import type { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
