import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  openInNewTab?: boolean;
  ariaLabel?: string;
};

export function ExternalLink({
  href,
  children,
  className = '',
  openInNewTab = true,
  ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={[
        'inline-flex items-center rounded-md text-sm font-medium text-zinc-200 underline-offset-4 transition-colors',
        'hover:text-white hover:underline',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-50',
        className,
      ].join(' ')}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noreferrer noopener' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
