import { useEffect, useState } from 'react';

interface CircularAllProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  gradientId?: string;
}

const CircularAllProgress = ({
  percentage,
  size = 165,
  strokeWidth = 29.5,
  gradientId = 'progressGradient',
}: CircularAllProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progressOffset = circumference - (percentage / 100) * circumference;
    const timeout = setTimeout(() => setOffset(progressOffset), 100);
    return () => clearTimeout(timeout);
  }, [percentage, circumference]);

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#a3e635" />
        </linearGradient>
      </defs>

      {/* 배경 원 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#334155"
        strokeWidth={strokeWidth}
        fill="none"
      />

      {/* 진행률 원 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transition: 'stroke-dashoffset 0.8s ease-in-out',
        }}
      />
    </svg>
  );
};

export default CircularAllProgress;
