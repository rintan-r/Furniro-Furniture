'use client'
import { useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import SliderDots from './SliderDots'

const images = [
  {
    src: '/images/inspirations/img1.png'
  },
  {
    src: '/images/inspirations/img2.png'
  },
  {
    src: '/images/inspirations/img3.png'
  },
  {
    src: '/images/inspirations/img1.png'
  },
  {
    src: '/images/inspirations/img2.png'
  },
  {
    src: '/images/inspirations/img3.png'
  }
]

const totalSlides = 4

export default function Carousel () {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className='relative w-full'>
      <div className='flex flex-row gap-6 h-auto'>
        {images.map((img, index) => (
          <div key={index} className='flex flex-shrink-0 flex-col relative'>
            <div
              className={
                index === 0
                  ? 'relative w-[404px] h-[582px]'
                  : 'relative w-[372px] h-[486px]'
              }
            >
              <Image
                src={img.src}
                alt=''
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover'
                priority={false}
              />
            </div>
            {index === 0 ? (
              <div className='absolute flex flex-row items-end bottom-6 left-6'>
                <div className='bg-white pr-[17px] pt-[32px] pb-[32px] pl-[32px] gap-2'>
                  <div className='flex items-center gap-2'>
                    <p>01</p>
                    <div className='h-px w-[27px] bg-black my-4' />
                    <span className='w-[83px]'>Bed Room</span>
                  </div>
                  <p>Inner Peace</p>
                </div>
                <Button>{'>'}</Button>
              </div>
            ) : index === 1 ? (
              <div className='pt-10'>
                <SliderDots
                  totalSlides={totalSlides}
                  currentIndex={currentIndex}
                  onDotClick={setCurrentIndex}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
