import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='flex flex-col w-full pt-12 pb-[38px] pr-[100px] pl-[99.99px] mt-[50px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          Furniro
          <span className='text-left'>
            400 University Drive Suite 200 <br />
            Coral Gables, <br />
            FL 33134 USA
          </span>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-[71.99px]'>
            <div className='flex flex-row gap-[144px] items-start'>
              <ul className='flex flex-col items-start'>
                <p>Links</p>
                <Link href='/'>Home</Link>
                <Link href='/'>Shop</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
              </ul>
              <ul className='flex flex-col items-start'>
                <p>Links</p>
                <Link href='/'>Home</Link>
                <Link href='/'>Shop</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
              </ul>
            </div>
            <div className='flex flex-col items-start'>
              <p>Newsletter</p>
              <div className='flex flex-row'>
                <input placeholder='Enter Your Email Address'></input>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span>2023 furino. All rights reverved</span>
    </footer>
  )
}
