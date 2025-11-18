'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard ({ title, image, slug }) {
  return (
    <Link
      href={`/category/${slug}`}
      className='hover:scale-105 transition-transform'
    >
      <div className='relative w-full h-30 md:h-80 lg:h-120'>
        <Image
          src={image}
          alt={title}
          fill={true}
          className='object-cover rounded-[10px]'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>
      <div className='pt-[30px] text-center font-semibold'>{title}</div>
    </Link>
  )
}
