import Image from 'next/image'
import CTAButton from '../../ui/Button'

export default function Hero () {
  return (
    <section className='relative w-full h-screen'>
      <Image
        src='/images/scandinavian-bg.png'
        fill
        alt='Scandinavian interior wall decal background'
        className='
          object-cover
          object-[-520px_-100px]
          sm:object-[-480px_-100px]
          md:object-[-420px_-100px]
          lg:object-[center_-100px]
          xl:object-[center_-100px]  
          2xl:object-[-100px_-100px]   
        '
      />
      <div className='absolute flex flex-col gap-4 lg:gap-0 mx-10 lg:mx-0 md:right-[58px] top-10 lg:top-auto lg:bottom-[272px] xl:bottom-[116.53px] py-7 lg:pt-[62px] lg:pb-[37px] pl-5 pr-7 lg:pl-[39px] lg:pr-[43px] h-fit w-fit md:w-150 lg:w-[643px] bg-[#FFF3E3] rounded-[10px]'>
        <h2 className='text-poppins-16-semibold sm:text-poppins-16-bold md:text-poppins-20-bold text-black pb-1'>
          New Arrival
        </h2>
        <h1 className='text-poppins-36-bold sm:text-poppins-40-bold-120 md:text-poppins-40-bold-120 lg:text-poppins-52-bold text-[#B88E2F] lg:pb-[17px]'>
          Discover Our <br /> New Collection
        </h1>
        <p className='text-poppins-12-medium sm:text-poppins-14-medium md:text-poppins-20-medium-150 lg:text-poppins-18-medium text-black lg:pb-[46px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut{' '}
          <br className='hidden md:block' />
          elit tellus, luctus nec ullamcorper mattis.
        </p>
        <CTAButton variant='primary' className='px-18 py-[25px] text-poppins-16-bold'>BUY NOW</CTAButton>
      </div>
    </section>
  )
}
