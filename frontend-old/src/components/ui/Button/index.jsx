import React from 'react';
import { buttonVariants } from './styles';
import { cn } from '@/backend/utils/cn.js';

export default function Button({ children, variant, size, className, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  ); //
}