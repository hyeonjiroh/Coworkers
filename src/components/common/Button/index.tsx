'use client';
import { ReactNode } from 'react';
import {
  baseStyles,
  disabledStyles,
  radiusStyles,
  sizeStyles,
  variantStyles,
  iconStyles,
  ButtonVariant,
  ButtonStyleType,
} from '@/components/common/Button/style';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import Check from '@/assets/icons/check_white.svg';
import CheckGreen from '@/assets/icons/check_green.svg';
import Plus from '@/assets/icons/plus.svg';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: ButtonVariant;
  styleType: ButtonStyleType;
  disabled?: boolean;
  radius?: 'sm' | 'lg';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: ReactNode;
  startIcon?: 'check' | 'check_green' | 'plus';
}

const isValidStyleType = (
  variant: ButtonVariant,
  styleType: string
): styleType is ButtonStyleType => {
  return styleType in variantStyles[variant];
};

const Button = ({
  variant = 'primary',
  styleType = 'filled',
  className,
  disabled = false,
  radius = 'lg',
  size = 'md',
  onClick,
  children,
  startIcon,
  ...props
}: ButtonProps) => {
  if (!isValidStyleType(variant, styleType)) {
    throw new Error(
      `Invalid styleType "${styleType}" for variant "${variant}"`
    );
  }

  const buttonStyles = twMerge(
    clsx(
      baseStyles,
      className,
      disabled
        ? disabledStyles[styleType === 'outlined' ? 'outlined' : 'filled']
        : variantStyles[variant][styleType],
      radiusStyles[radius],
      sizeStyles[size]
    )
  );

  const renderIcon = () => {
    if (!startIcon) return null;

    const iconProps = {
      width: 16,
      height: 16,
      className: iconStyles.start,
    };

    switch (startIcon) {
      case 'check':
        return <Check {...iconProps} />;
      case 'check_green':
        return <CheckGreen {...iconProps} />;
      case 'plus':
        return <Plus {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {renderIcon()}
      {children}
    </button>
  );
};

export default Button;
