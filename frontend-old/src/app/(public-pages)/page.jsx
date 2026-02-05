import CategoryList from '@/src/components/features/category/CategoryList'
import Hero from '@/src/components/features/homepage/Hero'
import CTAButton from '@/src/components/ui/Button'
import ProductList from '@/src/components/features/product/ProductList'
import Inspiration from '@/src/components/features/homepage/Inspirations'
import FurniroFurniture from '@/src/components/features/homepage/FurniroFurniture'

export default function Home () {
  return (
    <main>
      <Hero />
      <CategoryList />
      <div className='flex flex-col gap-8'>
        <ProductList pigination={false} productsPerPage={8} />
        <div className='w-full flex justify-center'>
          <CTAButton variant='primaryWhite' className='py-3 pl-[82px] pr-[74px] border border-[#B88E2F] text-poppins-16-semibold-150 '>Show More</CTAButton>
        </div>
      </div>
      <Inspiration />
      <FurniroFurniture />
    </main>
  )
}
