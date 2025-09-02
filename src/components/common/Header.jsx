import React from 'react'
import Image from 'next/image'
import Breadcrumbs from './Breadcrumbs'

export default function Header () {
  return (
    <header className='relative w-full flex justify-center items-center'>
      <Image
        src='/images/banner-bg.png'
        alt=''
        width={1440}
        height={316}
        priority
        style={{ opacity: 0.5, filter: 'blur(3px)' }}
    
      />
      <div className='absolute flex flex-col items-center'>
        <h4>Shop</h4>
        <Breadcrumbs />
      </div>
    </header>
  )
}
