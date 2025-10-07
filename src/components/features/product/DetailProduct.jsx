'use client'
import Image from 'next/image'
import AddToCartButton from '../cart/AddToCartButton'
import { useQuery } from '@apollo/client/react'
import { gql } from '@apollo/client'

const GET_PRODUCT_DETAIL = gql`
  query GetProductDetail($id: ID!) {
    product(id: $id) {
      id
      title
      price
      originalPrice
      detail {
        description
        longDescription
        images
        size
        SKU
        category
        tags
        material
        warranty
        origin
      }
    }
  }
`


export default function DetailProduct ({ id }) {
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const product = data.product
  console.log("Product detail data:", product)
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
            src={product.detail.images[0]}
            alt='Asgaard Sofa'
            width={481}
            height={391}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Product info */}
      <div className='flex flex-col gap-4 order-3'>
        <div className='h-8 w-2/3 bg-amber-200 rounded'>{product.title}</div> {/* Price */}
        <div className='h-6 w-1/3 bg-amber-200 rounded'>{product.price}</div> {/* Price */}
        <div className='h-6 w-1/3 bg-amber-200 rounded'>Reviews</div>
        <div className='h-fit w-full bg-amber-200 rounded'>{product.detail.description}</div>
        {/* Description */}
        <div className='h-10 w-1/2 bg-amber-200 rounded'>{product.detail.size}</div>
        {/* Size */}
        <div className='h-10 w-1/2 bg-amber-200 rounded'>colors hex</div>
        {/* Color */}
        <AddToCartButton product={product}>Checkout</AddToCartButton>
      </div>
    </section>
  )
}
