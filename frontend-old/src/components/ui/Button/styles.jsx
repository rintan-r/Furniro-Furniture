// components/common/Button/styles.js
import { cva } from 'class-variance-authority';
import React from 'react';

export const buttonVariants = cva(
  'w-fit items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-[#B88E2F] !text-white',
        primaryWhite: 'bg-white !text-[#B88E2F]',
        secondary: 'text-black border border-black rounded-[15px] text-poppins-20-regular',
        pill: 'text-black border border-black',
        icon: 'bg-[#B88E2F] p-3'
      },
      size: {

      },
    },
    defaultVariants: {

    },
  }
);
