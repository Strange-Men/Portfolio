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
  coneSpread?: number;
  colors?: string[];
  fillOpacity?: number;
};

function parseHSL(color: string): string {
  // If already HSL format like "225 90 78", wrap it
  const parts = color.split(' ');
  if (parts.length === 3) {
    return `${parts[0]}deg ${parts[1]}% ${parts[2]}%`;
  }
  return color;
}

function buildGlowVars(
  colors: string[],
  glowIntensity: number
): Record<string, string> {
  const vars: Record<string, string> = {};

  // Primary glow color (for box-shadow)
  vars['--glow-color'] = `hsl(${parseHSL('225 90 78')} / 90%)`;
  vars['--glow-color-40'] = `hsl(${parseHSL('225 90 78')} / 40%)`;
  vars['--glow-color-20'] = `hsl(${parseHSL('225 90 78')} / 20%)`;
  vars['--glow-color-50'] = `hsl(${parseHSL('225 90 78')} / 50%)`;
  vars['--glow-color-30'] = `hsl(${parseHSL('225 90 78')} / 30%)`;

  // Gradient colors for border effects
  const defaultColors = ['#818cf8', '#22d3ee', '#c084fc'];

  vars['--gradient-one'] = `conic-gradient(from calc(var(--cursor-angle) - 90deg) at 25% 0%, ${colors[0] || defaultColors[0]} 0deg, transparent 90deg)`;
  vars['--gradient-two'] = `conic-gradient(from calc(var(--cursor-angle) - 90deg) at 75% 0%, ${colors[1] || defaultColors[1]} 0deg, transparent 90deg)`;
  vars['--gradient-three'] = `conic-gradient(from calc(var(--cursor-angle) - 90deg) at 100% 50%, ${colors[2] || defaultColors[2]} 0deg, transparent 90deg)`;
  vars['--gradient-four'] = `conic-gradient(from calc(var(--cursor-angle) - 90deg) at 75% 100%, ${colors[0] || defaultColors[0]} 0deg, transparent 90deg)`;
  vars['--gradient-five'] = `conic-gradient(from calc(var(--cursor-angle) - 90deg) at 25% 100%, ${colors[1] || defaultColors[1]} 0deg, transparent 90deg)`;
  vars['--gradient-six'] = `conic-gradient(from calc(var(--cursor-angle) - 90deg) at 0% 50%, ${colors[2] || defaultColors[2]} 0deg, transparent 90deg)`;
  vars['--gradient-seven'] = `conic-gradient(from calc(var(--cursor-angle) - 90deg) at 50% 50%, ${colors[0] || defaultColors[0]} 0deg, transparent 180deg)`;
  vars['--gradient-base'] = `conic-gradient(from calc(var(--cursor-angle) - 90deg) at center, hsl(225deg 90% 78% / 30%), hsl(255deg 90% 78% / 0%) 120deg, hsl(225deg 90% 78% / 0%) 240deg, hsl(225deg 90% 78% / 30%))`;

  return vars;
}

function buildGradientVars(): Record<string, string> {
  return {};
}

function getCenterOfElement(rect: DOMRect): { x: number; y: number } {
  return {
    x: rect.width / 2,
    y: rect.height / 2,
  };
}

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

  // Manhattan distance from center (0 to ~1.41 at corners)
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Map to 0-100 range, clamped
  const proximity = Math.min(dist * 100, 100);

  return proximity;
}

function getCursorAngle(
  x: number,
  y: number,
  rect: DOMRect
): number {
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const dx = x - centerX;
  const dy = y - centerY;

  // Angle in radians, converted to degrees
  let angle = Math.atan2(dy, dx) * (180 / Math.PI);

  // Normalize to 0-360
  if (angle < 0) angle += 360;

  return angle;
}

export function BorderGlowCard({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '225 90 78',
  backgroundColor = '#101014',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 0.8,
  coneSpread = 25,
  colors = ['#818cf8', '#22d3ee', '#c084fc'],
  fillOpacity = 0.22,
}: BorderGlowCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const glowVars = buildGlowVars(colors, glowIntensity);
  const gradientVars = buildGradientVars();

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const edgeProximity = getEdgeProximity(x, y, rect, edgeSensitivity);
      const cursorAngle = getCursorAngle(x, y, rect);

      card.style.setProperty('--edge-proximity', `${edgeProximity}`);
      card.style.setProperty('--cursor-angle', `${cursorAngle}deg`);
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
          '--cone-spread': coneSpread,
          '--fill-opacity': fillOpacity,
          ...glowVars,
          ...gradientVars,
        } as CSSProperties
      }
    >
      <span className="edge-light" aria-hidden="true" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}
