import React from 'react'
import CTAButton from '../ui/Button'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='flex flex-col w-full pt-12 pb-[38px] pr-[100px] pl-[99.99px] mt-[50px] gap-[73px] xl:gap-12'>
      <div className='flex flex-col lg:flex-row text-center lg:text-left justify-between gap-[46.26px] lg:gap-10'>
        <div className='flex flex-col gap-6 lg:gap-[50px]'>
          <Link href='/' className='text-poppins-24-bold'>
            Furniro
          </Link>
          <span className='text-poppins-16-regular text-center lg:text-left'>
            400 University Drive Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </span>
        </div>
        <div className='flex flex-col lg:flex-row gap-[71.99px]'>
          <div className='text-poppins-16-medium flex flex-col lg:flex-row gap-[73.25px] xl:gap-[144px] items-center lg:items-start'>
            <ul className='flex flex-col items-center lg:items-start'>
              <p className='pb-9 xl:pb-[55px]'>Links</p>
              <Link href='/' className='pb-[46px]'>
                Home
              </Link>
              <Link href='/' className='pb-[46px]'>
                Shop
              </Link>
              <Link href='/' className='pb-[45px]'>
                About
              </Link>
              <Link href='/'>Contact</Link>
            </ul>
            <ul className='w-[140px] flex flex-col items-center lg:items-start pb-9 xl:pb-[55px]'>
              <p className='pb-9 xl:pb-[55px]'>Help</p>
              <Link href='/' className='pb-[46px]'>
                Payment Options
              </Link>
              <Link href='/' className='pb-[46px]'>
                Returns
              </Link>
              <Link href='/'>Privacy Policies</Link>
            </ul>
          </div>
          <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start gap-[53px] w-full text-center'>
            <p className='text-poppins-16-medium'>Newsletter</p>
            <div className='flex flex-col sm:flex-row items-center justify-center w-full'>
              <input
                className='my-2 text-poppins-14-regular underline-offset-3 border-0 border-b border-black focus:outline-none placeholder:text-gray-500 pb-1 text-center sm:text-left w-full sm:w-auto'
                placeholder='Enter Your Email Address'
              />
              <CTAButton variant='newsletter'>SUBSCRIBE</CTAButton>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-[35px]'>
        <hr className='w-full border-[#D9D9D9]' />
        <span className='text-poppins-16-regular text-center lg:text-left'>
          2023 furino. All rights reverved
        </span>
      </div>
    </footer>
  )
}
