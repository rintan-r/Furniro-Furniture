import Image from 'next/image'

export default function Hero () {
    
  return (
    <section className='relative w-full h-screen'>
      <Image
        src='/images/scandinavian-bg.png'
        fill
        alt='scandinavian interior wall decal background'
        style={{ objectFit: 'fit', objectPosition: '0 -75px' }}
        priority
      />
      <div className='absolute right-[58px] top-[110px] pt-[62px] pb-[37px] pl-[39px] pr-[43] bg-[#FFF3E3] rounded-[10px]'>
        <p className='text-black'>New Arrival</p>
        <h1 className='text-black'>
          Discover Our <br /> New Collection
        </h1>
        <p className='text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </div>
    </section>
  )
}
