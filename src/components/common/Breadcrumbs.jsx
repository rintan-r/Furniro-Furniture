'use client'

import Link from 'next/link'
import { cva } from 'class-variance-authority'
import useBreadcrumbs from '@/src/hooks/useBreadcrumbs'
import Image from 'next/image'

// Class Variance Authority
const breadcrumbStyles = cva(
  'flex flex-row pl-[99px] pr-[100px] pt-[31px] pb-[32px] text-poppins-16-light ', // base class
  {
    variants: {
      variant: {
        default: '!bg-[#F9F1E7]',
        light: '!bg-white',
        transparent: '!bg-transparent'
      },
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

    }
  }
)

export default function Breadcrumbs ({variant, size, theme }) {
  const breadcrumbs = useBreadcrumbs()

  return (
    <nav className={breadcrumbStyles({variant, size, theme })} aria-label='Breadcrumb'>
      <div className='flex items-center'>
        <Link href='/'>Home</Link>
      </div>
      {breadcrumbs.map(crumb => (
        <div key={crumb.href} className='flex items-center'>
          <span className='mx-2 flex items-center'>
            <Image
              src='/icons/arrow-right.svg'
              alt='User Icon'
              width={20}
              height={20}
            />
          </span>
          {crumb.isLast ? (
            <span className='flex flex-row text-poppins-16-medium items-center gap-2'>
              <div className='w-[2px] h-[37px] bg-[#9F9F9F]'></div>
              {crumb.label}
            </span>
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
