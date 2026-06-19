import type { ReactNode, PointerEvent, CSSProperties } from 'react';
import { useCallback, useRef } from 'react';

type BorderGlowCardProps = {
  children: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
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
  edgeSensitivity = 28,
  glowColor = '225 90 78',
  backgroundColor = '#101014',
  borderRadius = 28,
  glowRadius = 38,
  glowIntensity = 0.72,
  colors = ['#818cf8', '#22d3ee', '#c084fc'],
  fillOpacity = 0.12,
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
          '--fill-opacity': fillOpacity,
        } as CSSProperties
      }
    >
      <span className="edge-light" aria-hidden="true" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}
