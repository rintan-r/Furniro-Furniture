import Button from '@/components/ui/Button'
import Carousel from '@/components/ui/Carousel'

export default function Inspiration () {
  return (
    <section className='w-full h-fit bg-[#FCF8F3]'>
      <div className='relative w-full h-fit flex flex-col xl:flex-row lg:ml-[100px] gap-[42px] mt-[69px] py-11 items-center'>
        <div className='w-full px-4 xl:w-4/12 flex flex-col items-center xl:items-start justify-center lg:justify-start'>
          <h2 className='text-poppins-30-bold  xl:text-poppins-40-bold-120 text-center xl:text-left'>
            50+ Beautiful rooms <br className='hidden 2xl:block' /> inspiration
          </h2>
          <p className='text-poppins-14-medium xl:text-poppins-16-medium-150 pt-[7px] pb-[25px] text-center lg:text-left'>
            Our designer already made a lot of beautiful <br /> prototipe of
            rooms that inspire you{' '}
          </p>
          <Button variant='primary' className='px-9 py-3 text-poppins-16-semibold-150'>Explore More</Button>
        </div>
        <div className='w-full xl:w-8/12 items-start px-2'>
          <Carousel />
        </div>
      </div>
    </section>
  )
}
