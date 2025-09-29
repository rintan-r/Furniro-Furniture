'use client'

import { DiscountType } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard ({
  id,
  title,
  description,
  price,
  originalPrice,
  isNew,
  discountValue,
  image,
  slug,
}) {
  return (
    <Link
      href={`/shop/${slug}/dp/${id}`}
    >
      <div className='group cursor-pointer hover:scale-105 transition-transform bg-[#F4F5F7]'>
        <div className='relative w-full h-[301px] overflow-hidden'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
          />

          {/* Badge Discount */}
          {discountValue !== null && (
            <span className='absolute w-12 h-12 flex items-center justify-center top-4 right-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10'>
              {discountValue}%
            </span>
          )}

          {/* Badge New */}
          {isNew && (
            <span className='absolute w-12 h-12 flex items-center justify-center top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full z-10'>
              New
            </span>
          )}
        </div>

        <div className='pt-4 pb-[30px] pl-4 pr-[15px] flex flex-col items-start space-y-1'>
          <h3 className='text-lg font-medium text-gray-900 group-hover:underline'>
            {title}
          </h3>
          <p className='text-sm text-gray-500'>{description}</p>

          <div className='w-full flex justify-between items-center mt-2'>
            <p className='text-base font-semibold text-gray-800'>{price}</p>
            <p className='text-sm line-through text-gray-400'>
              {originalPrice}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
