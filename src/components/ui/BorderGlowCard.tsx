import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import { useCallback, useMemo, useRef } from 'react';

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

// ── React Bits gradient geometry ──────────────────────────────

const GRADIENT_POSITIONS = [
  [0, 50],
  [100, 50],
  [50, 0],
  [50, 100],
  [25, 0],
  [75, 100],
  [50, 50],
] as const;

const GRADIENT_KEYS = [
  'gradient-one',
  'gradient-two',
  'gradient-three',
  'gradient-four',
  'gradient-five',
  'gradient-six',
  'gradient-seven',
] as const;

const COLOR_MAP: Record<string, string> = {
  '#c084fc': '#b471ee',
  '#eb1f94': '#d41b86',
  '#f838ea': '#e032d4',
};

// ── Helpers ───────────────────────────────────────────────────

function parseHSL(hslStr: string): { h: number; s: number; l: number } {
  const [h, s, l] = hslStr.split(' ').map(Number);
  return { h, s, l };
}

function buildGlowVars(glowColor: string, intensity: number): CSSProperties {
  const { h, s, l } = parseHSL(glowColor);
  const baseAlpha = Math.round(intensity * 92) / 100;
  return {
    '--glow-color': `hsl(${h}deg ${s}% ${l}% / ${baseAlpha * 100}%)`,
    '--glow-color-60': `hsl(${h}deg ${s}% ${l}% / ${Math.round(baseAlpha * 60)}%)`,
    '--glow-color-40': `hsl(${h}deg ${s}% ${l}% / ${Math.round(baseAlpha * 40)}%)`,
    '--glow-color-20': `hsl(${h}deg ${s}% ${l}% / ${Math.round(baseAlpha * 20)}%)`,
  } as CSSProperties;
}

function buildGradientVars(colors: string[]): CSSProperties {
  const vars: Record<string, string> = {};
  GRADIENT_KEYS.forEach((key, i) => {
    const [px, py] = GRADIENT_POSITIONS[i];
    const base = colors[i] ?? colors[0];
    const mapped = COLOR_MAP[base] ?? base;
    const stop = i < 4 ? '30%' : '20%';
    vars[`--${key}`] = `radial-gradient(circle at ${px}% ${py}%, ${base} 0%, ${mapped} ${stop}, transparent 80%)`;
  });
  vars['--gradient-base'] = `conic-gradient(from 0deg at 50% 50%, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[0]})`;
  return vars as CSSProperties;
}

// ── Component ─────────────────────────────────────────────────

export function BorderGlowCard({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '315 90 78',
  backgroundColor = '#120F17',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 0.82,
  coneSpread = 25,
  colors = ['#c084fc', '#eb1f94', '#f838ea'],
  fillOpacity = 0.08,
}: BorderGlowCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const touchResetTimer = useRef<number | null>(null);

  // ── Geometry callbacks ─────────────────────────────────────

  const getCenterOfElement = useCallback((el: HTMLDivElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2] as const;
  }, []);

  const getEdgeProximity = useCallback(
    (el: HTMLDivElement, x: number, y: number) => {
      const [cx, cy] = getCenterOfElement(el);
      const dx = x - cx;
      const dy = y - cy;
      let kx = Infinity;
      let ky = Infinity;
      if (dx !== 0) kx = cx / Math.abs(dx);
      if (dy !== 0) ky = cy / Math.abs(dy);
      return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    },
    [getCenterOfElement],
  );

  const getCursorAngle = useCallback(
    (el: HTMLDivElement, x: number, y: number) => {
      const [cx, cy] = getCenterOfElement(el);
      const dx = x - cx;
      const dy = y - cy;
      if (dx === 0 && dy === 0) return 0;
      const radians = Math.atan2(dy, dx);
      let degrees = radians * (180 / Math.PI) + 90;
      if (degrees < 0) degrees += 360;
      return degrees;
    },
    [getCenterOfElement],
  );

  // ── Memoised CSS vars ──────────────────────────────────────

  const glowVars = useMemo(
    () => buildGlowVars(glowColor, glowIntensity),
    [glowColor, glowIntensity],
  );

  const gradientVars = useMemo(
    () => buildGradientVars(colors),
    [colors],
  );

  // ── Touch timer helpers ─────────────────────────────────────

  const clearTouchTimer = useCallback(() => {
    if (touchResetTimer.current !== null) {
      window.clearTimeout(touchResetTimer.current);
      touchResetTimer.current = null;
    }
  }, []);

  // ── Pointer handlers ───────────────────────────────────────

  const updateGlowFromPointer = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const edge = getEdgeProximity(card, x, y);
      const angle = getCursorAngle(card, x, y);

      card.style.setProperty('--edge-proximity', String(edge * 100));
      card.style.setProperty('--cursor-angle', `${angle}deg`);
    },
    [getEdgeProximity, getCursorAngle],
  );

  const endTouchGlow = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    clearTouchTimer();
    touchResetTimer.current = window.setTimeout(() => {
      card.classList.remove('is-touch-active');
      card.style.setProperty('--edge-proximity', '0');
      touchResetTimer.current = null;
    }, 520);
  }, [clearTouchTimer]);

  const handlePointerDown = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      if (event.pointerType !== 'mouse') {
        clearTouchTimer();
        card.classList.add('is-touch-active');
        updateGlowFromPointer(event);
      }
    },
    [clearTouchTimer, updateGlowFromPointer],
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      updateGlowFromPointer(event);
    },
    [updateGlowFromPointer],
  );

  const handlePointerUp = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType !== 'mouse') {
        endTouchGlow();
      }
    },
    [endTouchGlow],
  );

  const handlePointerCancel = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType !== 'mouse') {
        endTouchGlow();
      }
    },
    [endTouchGlow],
  );

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--edge-proximity', '0');
  }, []);

  // ── Render ─────────────────────────────────────────────────

  return (
    <div
      ref={cardRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
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
