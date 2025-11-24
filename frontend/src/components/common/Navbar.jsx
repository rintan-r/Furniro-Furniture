'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartDrawer from '../features/cart/CartDrawer'
import { useState } from 'react'

export default function Navbar () {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <nav className='w-full flex flex-row justify-between pl-[54px] pr-[37px] md:pl-[55px] md:pr-[55px] xl:pl-[100px] xl:pr-[74px] pt-[29px] pb-[30px]'>
      {/* Logo Section */}
      <div className='flex flex-row items-center gap-[5px]'>
        <Image src='/logo.svg' alt='Furniro logo' width={50} height={32} />
        <Link href='/' className='text-montserrat-34-bold'>
          Furniro
        </Link>
      </div>
      <ul className='hidden xl:flex  text-poppins-16-medium gap-[75px] items-center'>
        <Link href='/'>Home</Link>
        <Link href='/shop'>Shop </Link>
        <Link href='/'>About</Link>
        <Link href='/contact'>Contact</Link>
      </ul>

      {/* Action Icons */}
      <div className='hidden xl:flex gap-[45px] flex-row  '>
        <button>
          {/* <UserIcon /> */}
          <Image
            src='/icons/account.svg'
            alt='User Icon'
            width={28}
            height={28}
          />
        </button>
        <button>
          {/* <SearchIcon /> */}
          <Image
            src='/icons/search.svg'
            alt='User Icon'
            width={28}
            height={28}
          />
        </button>
        <button>
          {/* <HeartIcon /> */}
          <Image
            src='/icons/heart.svg'
            alt='User Icon'
            width={28}
            height={28}
          />
        </button>
        <button onClick={() => setIsCartOpen(true)}>
          {/* <CartIcon /> */}
          <Image src='/icons/cart.svg' alt='User Icon' width={28} height={28} />
        </button>
      </div>
      {/* <Hamburger Menu /> */}
      <button className='block xl:hidden'>
        {/* <UserIcon /> */}
        <Image
          src='/icons/menu.svg'
          alt='User Icon'
          width={28}
          height={28}
        />
      </button>
      {/* <CartDrawer /> */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  )
}
