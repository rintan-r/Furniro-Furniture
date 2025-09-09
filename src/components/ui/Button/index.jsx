import React from 'react';
import { buttonVariants } from './styles';
import clsx from 'clsx';

export default function Button({ children, variant, size, className, ...props }) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}