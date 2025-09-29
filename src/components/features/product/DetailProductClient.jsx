
import Image from 'next/image'
import { getProductDetail } from '@/src/lib/api/getProductDetail'
import AddToCartButton from '../cart/AddToCartButton'
import superjson from 'superjson'

export default async function DetailProduct ({ serialized }) {
  const detail = superjson.deserialize(serialized);

  if (!detail) return <div>Product not found</div>;
  {console.log("DETAIL :", detail)}
  return (
    <section className='grid grid-cols-1 md:grid-cols-[553px_606px] justify-between pl-[99px] pr-[99px] pt-[35px] pb-[55px]'>
      <div className='grid md:grid-cols-[76px_1fr] gap-8 '>
        {/* Left thumbnails */}
        <div className='flex md:flex-col gap-8 order-2 md:order-1'>
          <div className='w-19 h-20 flex items-center justify-center bg-[#F9F1E7] rounded-[10px]'>
            <Image
              src='https://res.cloudinary.com/dvsgc0qcw/image/upload/v1755752701/Outdoor_sofa_set_2_lvsfhg.png'
              alt='Asgaard Sofa'
              width={76}
              height={80}
              priority
            />
          </div>
          <div className='w-19 h-20 flex items-center justify-center bg-[#F9F1E7] rounded-[10px]'>
            <Image
              src='https://res.cloudinary.com/dvsgc0qcw/image/upload/v1755752700/Outdoor_sofa_set_2_1_pm1wkx.png'
              alt='Asgaard Sofa'
              width={76}
              height={80}
              priority
            />
          </div>
          <div className='w-19 h-20 flex items-center justify-center bg-[#F9F1E7] rounded-[10px]'>
            <Image
              src='https://res.cloudinary.com/dvsgc0qcw/image/upload/v1755752701/Stuart_sofa_1_gpjaxg.png'
              alt='Asgaard Sofa'
              width={76}
              height={80}
              priority
            />
          </div>
          <div className='w-19 h-20 flex items-center justify-center bg-[#F9F1E7] rounded-[10px]'>
            <Image
              src='https://res.cloudinary.com/dvsgc0qcw/image/upload/v1755752700/Maya_sofa_three_seater_1_1_nbzx3r.png'
              alt='Asgaard Sofa'
              width={76}
              height={80}
              priority
            />
          </div>
        </div>

        {/* Main product image */}
        <div className='w-[423px] h-[500px] rounded-[10px] flex items-center justify-center bg-[#F9F1E7] order-1 md:order-2'>
            <Image
              src='https://res.cloudinary.com/dvsgc0qcw/image/upload/v1755752700/Asgaard_sofa_3_e23ygd.png'
              alt='Asgaard Sofa'
              width={481}
              height={391}
              priority
            />
        </div>
      </div>

      {/* Product info */}
      <div className='flex flex-col gap-4 order-3'>
        <div className='h-8 w-2/3 bg-amber-200 rounded'> {detail.product.title} </div> {/* Price */}
        <div className='h-6 w-1/3 bg-amber-200 rounded'> {detail.product.price} </div> {/* Price */}
        <div className='h-fit w-full bg-amber-200 rounded'> {detail.description} </div>{/* Description */}
        <div className='h-10 w-1/2 bg-amber-200 rounded'> {detail.size} </div>{/* Size */}
        <div className='h-10 w-1/2 bg-amber-200 rounded'> {detail.color} </div>{/* Color */}
        <AddToCartButton product={detail}>Checkout</AddToCartButton>
      </div>
    </section>
  )
}
