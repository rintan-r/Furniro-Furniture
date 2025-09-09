'use client'

import Link from 'next/link'
import { cva } from 'class-variance-authority'
import useBreadcrumbs from '@/src/hooks/useBreadcrumbs'
import Image from 'next/image'

// Class Variance Authority
const breadcrumbStyles = cva(
  'flex flex-row', // base class
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: ''
      },
      theme: {
        light: '',
        dark: ''
      }
    },
    defaultVariants: {
      size: undefined,
      theme: undefined
    }
  }
)

export default function Breadcrumbs ({ size, theme }) {
  const breadcrumbs = useBreadcrumbs()

  return (
    <nav className={breadcrumbStyles({ size, theme })} aria-label='Breadcrumb'>
      <Link href='/'>Home</Link>
      {breadcrumbs.map(crumb => (
        <div key={crumb.href} className='flex items-center'>
          <span className='mx-2'>
            <Image
              src='/icons/arrow-right.svg'
              alt='User Icon'
              width={20}
              height={20}
            />
          </span>
          {crumb.isLast ? (
            <span className='font-semibold'>{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className='hover:underline'>
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
