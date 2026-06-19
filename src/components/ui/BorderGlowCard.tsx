import type { ReactNode, PointerEvent } from 'react';
import { useCallback, useRef } from 'react';

type BorderGlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function BorderGlowCard({ children, className = '' }: BorderGlowCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
    card.style.setProperty('--glow-opacity', '1');
  }, []);

  const handlePointerLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;

    card.style.setProperty('--glow-opacity', '0');
  }, []);

  return (
    <div
      ref={ref}
      className={`border-glow-card ${className}`.trim()}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}
