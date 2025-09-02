import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar () {
  return (
    <nav className='w-full pr-[54px] pl-[100px] pt-[29px] pb-[30px] flex flex-row justify-between'>
      {/* Logo Section */}
      <div className='flex flex-row items-center gap-[5px]'>
        <Image src='/logo.svg' alt='Furniro logo' width={50} height={32} />
        <h5>Furniro</h5>
      </div>
      <ul className='flex gap-[75px] items-center'>
        <Link href='/'>Home</Link>
        <Link href='/shop'>Shop </Link>
        <Link href='/'>About</Link>
        <Link href='/contact'>Contact</Link>
      </ul>

      {/* Action Icons */}
      <div className='flex gap-[45px] flex-row'>
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
        <button>
          {/* <CartIcon /> */}
          <Image src='/icons/cart.svg' alt='User Icon' width={28} height={28} />
        </button>
      </div>
    </nav>
  )
}
