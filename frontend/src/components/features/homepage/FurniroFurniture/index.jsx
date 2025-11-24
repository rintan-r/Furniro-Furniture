'use client'
import Image from 'next/image'
import furniroFurniture from '@/lib/api/getFurniroFurniture'
import styles from './FurniroFurniture.module.css'

export default function FurniroFurniture () {
  return (
    <section className='text-center'>
      <div className='pt-[75px] pb-[50px]'>
        <p className='text-poppins-20-semibold-150 text-gray-500 mt-2'>
          Share your setup with
        </p>
        <h2 className='text-poppins-40-bold-120'>#FuniroFurniture</h2>
      </div>

      <div className='w-full h-[691px] overflow-y-auto lg:h-fit lg:overflow-hidden scrollbar-hide'>
        <div className='w-full flex gap-4'>
          <div className='w-full flex flex-col lg:flex-row gap-2 xl:gap-4 justify-center lg:items-center'>
            {/* Gallery Kiri */}
            <div className={`${styles.gallery} gallery lg:w-2/5 h-[691px]`}>
              {furniroFurniture.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className={`${styles.box} ${
                    styles[`div${index + 1}`]
                  } relative`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className='object-cover object-bottom'
                  />
                </div>
              ))}
            </div>

            {/* Box Tengah */}
            <div className='relative w-full aspect-[4/5] lg:w-1/6 lg:aspect-[3/4] md:max-h-[691px] lg:max-h-[392px] overflow-hidden'>
              <Image
                src={furniroFurniture[4].src}
                alt={furniroFurniture[4].alt}
                fill
                className='object-cover object-center'
              />
            </div>

            {/* Gallery Kanan */}
            <div className={`${styles.gallery} lg:w-2/5 h-[691px]`}>
              {furniroFurniture.slice(5).map((item, index) => (
                <div
                  key={index + 5}
                  className={`${styles[`box${index + 1}`]} relative`}
                >
                  <Image
                    src={item.src}
                    fill
                    className='object-cover object-bottom'
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
