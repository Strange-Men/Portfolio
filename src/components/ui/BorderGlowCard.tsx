import type { ReactNode, PointerEvent, CSSProperties } from 'react';
import { useCallback, useRef } from 'react';

type BorderGlowCardProps = {
  children: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  colors?: string[];
  fillOpacity?: number;
};

function getEdgeProximity(
  x: number,
  y: number,
  rect: DOMRect,
  sensitivity: number
): number {
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Distance from center (0-1 normalized)
  const dx = (x - centerX) / centerX;
  const dy = (y - centerY) / centerY;

  // Euclidean distance from center (0 to ~1.41 at corners)
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Map to 0-100 range, clamped
  const proximity = Math.min(dist * 100, 100);

  return proximity;
}

export function BorderGlowCard({
  children,
  className = '',
  edgeSensitivity = 30,
  backgroundColor = '#120f17',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  colors = ['#c084fc', '#eb1f94', '#f838ea'],
  fillOpacity = 0.03,
}: BorderGlowCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const edgeProximity = getEdgeProximity(x, y, rect, edgeSensitivity);

      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
      card.style.setProperty('--edge-proximity', `${edgeProximity}`);
    },
    [edgeSensitivity]
  );

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty('--edge-proximity', '0');
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`border-glow-card ${className}`.trim()}
      style={
        {
          '--card-bg': backgroundColor,
          '--edge-sensitivity': edgeSensitivity,
          '--border-radius': `${borderRadius}px`,
          '--glow-padding': `${glowRadius}px`,
          '--glow-intensity': glowIntensity,
          '--glow-color-1': colors[0] ?? '#c084fc',
          '--glow-color-2': colors[1] ?? '#eb1f94',
          '--glow-color-3': colors[2] ?? '#f838ea',
          '--fill-opacity': fillOpacity,
        } as CSSProperties
      }
    >
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}
