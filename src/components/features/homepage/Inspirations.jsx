import Button from '@/src/components/ui/Button'
import Carousel from '@/src/components/ui/Carousel'

export default function Inspiration () {
  return (
    <section className='relative w-full h-screen flex flex-row ml-[100px] gap-[42px] mt-[69px] items-center'>
      <div className='w-4/12flex flex-col'>
        <p>
          50+ Beautiful rooms <br /> inspiration
        </p>
        <p>
          Our designer already made a lot of beautiful <br /> prototipe of rooms that
          inspire you{' '}
        </p>
        <Button className={Button({ variant: 'outline', size: 'lg' })}>
          Explore More
        </Button>
      </div>
      <div className='w-8/12 items-start'>
        <Carousel />
      </div>
    </section>
  )
}
