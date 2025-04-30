export const baseStyles =
  'box-border px-2 flex items-center justify-center transition-colors duration-100 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis';

export type ButtonVariant = 'primary' | 'secondary' | 'floating';
export type ButtonStyleType = {
  primary: 'filled' | 'outlined' | 'danger';
  secondary: 'filled' | 'outlined';
  floating: 'default' | 'outlined' | 'transparent';
}[ButtonVariant];

interface ButtonStyles {
  [key: string]: string;
}

const primaryStyles: ButtonStyles = {
  filled:
    'bg-green-700 text-lg-semibold text-white hover:bg-green-800 focus:bg-green-900 active:bg-green-900',
  outlined:
    'border text-lg-semibold bg-white border-green-700 text-green-700 hover:border-green-800 hover:text-green-800 focus:border-green-900 focus:text-green-900 active:border-green-900 active:text-green-900',
  danger:
    'bg-danger text-lg-semibold text-white hover:bg-red-700 focus:bg-red-800 active:bg-red-800',
};

const secondaryStyles: ButtonStyles = {
  filled:
    'bg-green-700 text-md-semibold text-white hover:bg-green-800 focus:bg-green-900 active:bg-green-900',
  outlined:
    'border text-md-semibold bg-transparent border-green-700 text-green-700 hover:border-green-800 hover:text-green-800 focus:border-green-900 focus:text-green-900 active:border-green-900 active:text-green-900',
};

const floatingStyles: ButtonStyles = {
  default:
    'bg-green-700 text-lg-semibold text-white hover:bg-green-800 focus:bg-green-900 active:bg-green-900 w-auto px-4',
  outlined:
    'border text-md-semibold bg-white border-green-700 text-green-700 w-auto px-4 [&_svg_path]:stroke-green-700 hover:border-green-800 hover:text-green-800 hover:[&_svg_path]:stroke-green-800 focus:border-green-900 focus:text-green-900 focus:[&_svg_path]:stroke-green-900 active:border-green-900 active:text-green-900 active:[&_svg_path]:stroke-green-900',
  transparent:
    'border text-md-semibold bg-transparent border-white text-white w-auto px-4 [&_svg_path]:stroke-white hover:border-green-800 hover:text-green-800 hover:[&_svg_path]:stroke-green-800 focus:border-green-900 focus:text-green-900 focus:[&_svg_path]:stroke-green-900 active:border-green-900 active:text-green-900 active:[&_svg_path]:stroke-green-900',
};

export const variantStyles = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  floating: floatingStyles,
} as const;

export const disabledStyles = {
  filled: 'bg-slate-400 text-white cursor-not-allowed [&_svg]:text-white',
  outlined:
    'border border-slate-400 text-slate-400 cursor-not-allowed bg-white [&_svg_path]:stroke-slate-400',
};

export const radiusStyles = {
  sm: 'rounded-xl',
  lg: 'rounded-[40px]',
};

export const sizeStyles = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-[48px]',
};

export const iconStyles = {
  start: 'mr-1',
};
