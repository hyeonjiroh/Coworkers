interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  percentage: number;
}

const CircularProgress = ({
  size = 12,
  strokeWidth = 2,
  percentage,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size}>
      {/* 배경 원 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="white"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* 진행률 원 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#10b981"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(${size / 2} ${size / 2})`}
      />
    </svg>
  );
};

export default CircularProgress;
