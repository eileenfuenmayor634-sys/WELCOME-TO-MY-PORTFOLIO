import React from 'react';

type SparkleProps = {
  className?: string;
  color?: string;
  opacity?: number;
};

export function Sparkle({ className, color = '#FFD93D', opacity = 0.8 }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label=""
    >
      <path
        d="M50 0 L55 35 L90 40 L55 50 L50 100 L45 50 L10 40 L45 35 Z"
        fill={color}
        opacity={opacity}
      />
    </svg>
  );
}

