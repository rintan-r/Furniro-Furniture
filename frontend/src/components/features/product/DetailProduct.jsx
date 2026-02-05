'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import QuantityInput from '../../ui/quantitiyInput'
import AddToCartButton from '../cart/AddToCartButton'
import { useQuery } from '@apollo/client/react'
import { gql } from '@apollo/client'
import Button from '../../ui/Button'
import Tabs from '../../ui/Tabs'

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

const formatPrice = price => {
  return price !== 0
    ? `Rp ${price.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`
    : 'Price not available, contact seller'
}

const colorOptions = ['#816DFA', '#000000', '#B88E2F']

export default function DetailProduct ({ id }) {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState('#3b82f6')
  const [activeIndex, setActiveIndex] = useState(0)

  const [qty, setQty] = useState(1)

  const toggleSize = size => {
    setSelectedSize(size)
  }

  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const product = data.product
  console.log('Product detail data:', product.detail.size)
  return (
    <section className='w-full flex flex-col'>
      <div className='grid grid-cols-1 md:grid-cols-[553px_606px] justify-between px-[99px] pt-[35px] pb-[55px]'>
        <div className='grid md:grid-cols-[76px_1fr] gap-8'>
          {/* Thumbnail */}
          <div className='flex md:flex-col gap-8 '>
            {product.detail.images.map((src, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-19 h-20 flex items-center justify-center transition
          ${activeIndex === index ? 'ring-2 ring-[#B88E2F] rounded-[10px]' : 'bg-transparent'}`}
              >
                <Image
                  src={src}
                  alt={`${product.title} thumbnail ${index}`}
                  width={76}
                  height={80}
                  className='rounded-[10px] '
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className='w-[423px] h-[500px] rounded-[10px] flex items-center justify-center bg-[#F9F1E7] order-1 md:order-2'>
            <Image
              src={product.detail.images[activeIndex]}
              alt='Main image'
              width={481}
              height={391}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        {/*}
        <div className='grid md:grid-cols-[76px_1fr] gap-8 '>
          <div className='flex md:flex-col gap-8 order-2 md:order-1'>
            {product.detail.images.slice(1).map((src, index) => (
              <div
                key={index}
                className='w-19 h-20 flex items-center justify-center bg-[#F9F1E7] rounded-[10px]'
              >
                <Image
                  src={src}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  width={76}
                  height={80}
                  priority
                />
              </div>
            ))}
          </div>
          <div className='w-[423px] h-[500px] rounded-[10px] flex items-center justify-center bg-[#F9F1E7] order-1 md:order-2'>
            <Image
              src={product.detail.images[0]}
              alt='Asgaard Sofa'
              width={481}
              height={391}
              className='w-full h-full object-cover'
              priority
            />
          </div>
        </div>
        */}
        <div className='flex flex-col order-3'>
          <div className='w-2/3 py-2 text-poppins-42-regular rounded'>
            {product.title}
          </div>{' '}
          <div className='w-1/3 pb-[15px] text-poppins-24-medium rounded'>
            {formatPrice(product.price)}
          </div>{' '}
          <div className='w-1/3 pb-[18px] rounded'>Reviews</div>
          <div className='w-[60%] pb-[22px] text-poppins-13-regular rounded'>
            {product.detail.description}
          </div>
          <div className='w-fit flex flex-col flex-wrap gap-3 pb-[18px]'>
            Size
            <div className='flex flex-row flex-wrap gap-3'>
              {product.detail.size.map((size, index) => (
                <button
                  key={index}
                  onClick={() => toggleSize(size)}
                  className={`px-3 py-1 rounded-[5px] border transition
            ${
              selectedSize === size
                ? 'bg-[#B88E2F] text-white border-transparent'
                : 'bg-[#F9F1E7] text-black border-transparent'
            }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className='w-1/2 rounded flex flex-col gap-3 pb-8'>
            Color
            <div className='flex flex-row flex-wrap gap-4'>
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition
            ${
              selectedColor === color
                ? 'border-[#B88E2F] scale-110'
                : 'border-transparent'
            }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-[18px] items-center justify-start'>
            <QuantityInput value={qty} onChange={setQty} min={1} max={10} />
            <div className='flex flex-row gap-[10px] items-center'>
              <AddToCartButton product={product}>Checkout</AddToCartButton>
              <Button
                variant='secondary'
                className='pl-[47px] pr-[46px] py-[17px] flex flex-row items-center gap-[10px]'
              >
                <Image
                  src='/icons/plus-medium.svg'
                  alt='arrow right'
                  width={16}
                  height={35}
                />
                Compare
              </Button>
            </div>
          </div>
          <div className='w-full h-px bg-gray-300 mt-15 mb-[41px]'></div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row'>
              <div className='w-32 text-poppins-16-medium'>SKU</div>
              <div className='text-poppins-16-regular'>
                {product.detail.SKU}
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='w-32 text-poppins-16-medium'>Category</div>
              <div className='text-poppins-16-regular'>
                {product.detail.category}
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='w-32 text-poppins-16-medium'>Tags</div>
              <div className='text-poppins-16-regular'>
                <div className='flex gap-2'>
                  {product.detail.tags
                    .map(tag => tag.charAt(0).toUpperCase() + tag.slice(1))
                    .join(', ')}
                </div>
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='w-32 text-poppins-16-medium'>Share</div>
              <div className='text-poppins-16-regular flex flex-row gap-6'>
                <button>
                  <Image
                    src='/icons/facebook.svg'
                    alt='Facebook Icon'
                    width={20}
                    height={20}
                  />
                </button>
                <button>
                  <Image
                    src='/icons/linkedin.svg'
                    alt='Linkedin Icon'
                    width={20}
                    height={20}
                  />
                </button>
                <button>
                  <Image
                    src='/icons/twitter.svg'
                    alt='Twitter Icon'
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-px bg-gray-300 mt-15 mb-[41px]'></div>
      <div className='w-full flex flex-col justify-center'>
        <Tabs
          tabs={[
            { label: 'Description', content: <p>Ini deskripsi produk...</p> },
            {
              label: 'Additional Information',
              content: <p>Additional Information...</p>
            },
            { label: 'Reviews [ 5 ]', content: <p>List review...</p> }
          ]}
        />
      </div>
    </section>
  )
}
