'use client'
import Image from 'next/image'
import furniroFurniture from '@/src/lib/getFurniroFurniture'
import styles from './FurniroFurniture.module.css'

export default function FurniroFurniture () {
  return (
    <section className='text-center'>
      <div className='pt-[75px] pb-[50px]'>
        <h2 className='text-2xl font-bold'>Browse The Range</h2>
        <p className='text-gray-500 mt-2'>
          Explore categories to find your style
        </p>
      </div>

      <div className='max-w-[1799px] mx-auto overflow-hidden'>
        <div className='flex justify-center gap-4'>
          <div className='flex flex-row gap-4 justify-center'>
            {/* Gallery Kiri */}
            <div className={`${styles.gallery} gallery w-[741px] h-[691px]`}>
              {furniroFurniture.slice(0, 4).map((item, index) => (
                <div className={`${styles.box} ${styles[`div${index + 1}`]}`} key={index}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                  />
                </div>
              ))}
            </div>

            {/* Box Tengah */}
            <div className='w-[295px] flex items-center'>
              <Image
                src={furniroFurniture[4].src}
                width={furniroFurniture[4].width}
                height={furniroFurniture[4].height}
                alt={furniroFurniture[4].alt}
              />
            </div>

            {/* Gallery Kanan */}
            <div className={`${styles.gallery} w-[731px] h-[691px]`}>
              {furniroFurniture.slice(5).map((item, index) => (
                <div className={`${styles.box} ${styles[`box${index + 1}`]}`} key={index + 5}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.height}
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
