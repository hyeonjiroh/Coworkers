'use client';

import Icons from '@/components/common/Icons';

interface Props {
  name: keyof typeof Icons;
  size?: number;
  className?: string;
  onClick?: () => void;
  flip?: boolean;
}

export default function IconRenderer({ name, ...props }: Props) {
  const IconComponent = Icons[name];
  return <IconComponent {...props} />;
}
