import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-white/15 bg-zinc-50 text-zinc-950 hover:bg-white focus-visible:outline-zinc-50',
  secondary:
    'border border-white/15 bg-white/10 text-zinc-50 hover:bg-white/15 focus-visible:outline-zinc-50',
  ghost:
    'border border-transparent bg-transparent text-zinc-300 hover:bg-white/10 hover:text-zinc-50 focus-visible:outline-zinc-50',
};

export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variantClasses[variant],
        className,
      ].join(' ')}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
