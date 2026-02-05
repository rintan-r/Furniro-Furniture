'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import CTAButton from './Button'
import SliderDots from './SliderDots'

const images = [
  { src: '/images/inspirations/img1.png' },
  { src: '/images/inspirations/img2.png' },
  { src: '/images/inspirations/img3.png' },
  { src: '/images/inspirations/img1.png' },
  { src: '/images/inspirations/img2.png' },
  { src: '/images/inspirations/img3.png' }
]

export default function Carousel () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = images.length
  const carouselRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // ✅ Scroll handler
  const handleWheel = useCallback(
    e => {
      if (!isHovered) return // hanya aktif kalau hover
      e.preventDefault()

      if (e.deltaY > 0) {
        setCurrentIndex(prev => (prev + 1) % totalSlides)
      } else if (e.deltaY < 0) {
        setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1))
      }
    },
    [isHovered, totalSlides]
  )

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    if (isHovered) {
      el.addEventListener('wheel', handleWheel, { passive: false })
    } else {
      el.removeEventListener('wheel', handleWheel)
    }

    return () => el.removeEventListener('wheel', handleWheel)
  }, [isHovered, handleWheel])

  // 🔁 rotasi array supaya currentIndex selalu di paling kiri
  const rotatedImages = [
    ...images.slice(currentIndex),
    ...images.slice(0, currentIndex)
  ]

  return (
    <div
      ref={carouselRef}
      className='relative w-full overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='flex flex-row gap-6 h-auto transition-transform duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]'>
        {rotatedImages.map((img, index) => {
          const isActive = index === 0
          return (
            <div
              key={`${img.src}-${index}`}
              className='flex flex-shrink-0 flex-col relative'
            >
              <div
                className={`relative transition-all duration-700 ease-[cubic-bezier(0.45,0,0.55,1)] transform ${
                  isActive
                    ? 'w-[260px] h-[400px] sm:w-[354px] sm:h-[482px] md:w-[400px] md:h-[482px] xl:w-[404px] xl:h-[582px]'
                    : 'w-[230px] h-[345px] sm:w-[272px] sm:h-[386px] md:w-[272px] md:h-[386px] xl:w-[372px] xl:h-[486px]'
                }`}
              >
                <Image
                  src={img.src}
                  alt=''
                  fill
                  className='object-cover rounded-lg'
                  priority={false}
                />
              </div>

              {/* Overlay CTA hanya untuk gambar aktif */}
              {isActive && (
                <div className='absolute flex flex-row items-end bottom-6 left-6'>
                  <div className='bg-white xl:pr-[17px] pt-3 xl:pt-8 pb-3 xl:pb-8 pl-3 xl:pl-8 gap-2'>
                    <div className='text-poppins-14-medium lg:text-poppins-16-medium-150 flex items-center gap-2'>
                      <p>{String(currentIndex + 1).padStart(2, '0')}</p>
                      <div className='h-px w-[27px] bg-black my-4' />
                      <span className='w-[83px]'>Bed Room</span>
                    </div>
                    <p className='text-poppins-16-bold sm:text-poppins-20-semibold-150 lg:text-poppins-28-semibold-120'>Inner Peace</p>
                  </div>
                  <CTAButton variant='icon'>
                    <Image
                      src='/icons/arrow_right_long.svg'
                      alt='arrow right'
                      width={24}
                      height={24}
                    />
                  </CTAButton>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Navigasi Dots */}
      <div className='mt-8 flex justify-center'>
        <SliderDots
          totalSlides={totalSlides}
          currentIndex={currentIndex}
          onDotClick={index => setCurrentIndex(index)}
        />
      </div>
    </div>
  )
}
