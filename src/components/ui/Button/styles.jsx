// components/common/Button/styles.js
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'w-fit inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
        ghost: 'text-blue-600 hover:bg-blue-100',
        cart: 'text-blue-600 hover:bg-blue-100',
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg ',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);
