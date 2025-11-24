'use client'
import ProductCard from '@/src/components/features/product/ProductCard'
import { useQuery } from '@apollo/client/react'
import { gql } from '@apollo/client'
import { slugify } from '@/backend/utils/slugify'
import { usePagination } from '@/src/hooks/usePigination'
import PiginationControls from '@/src/components/common/PiginationControls'

const GET_PRODUCTS = gql`
  query GetProducts($limit: Int, $offset: Int) {
    products(limit: $limit, offset: $offset) {
      id
      title
      shortDescription
      price
      originalPrice
      isNew
      discountValue
      image
    }
  }
`
const slug = (title, description) => {
  return slugify(title, description)
}

export default function ProductsList ({ productsPerPage, pigination = true }) {
  const { page, offset, nextPage, prevPage } = usePagination({
    itemsPerPage: productsPerPage
  })

  const variables = {
    limit: productsPerPage,
    offset
  }

  const { loading, error, data } = useQuery(GET_PRODUCTS, { variables })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  console.log('Fetched products:', data)
  if (!data?.products?.length) return <p>No products found.</p>

  const hasNextPage = data.products.length === productsPerPage

  return (
    <section className='flex flex-col px-12 md:px-20 lg:px-[102px] text-center gap-8 items-center'>
      <div>
        <h2 className='text-poppins-40-bold-120'>Our Products</h2>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {data.products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.shortDescription}
            price={product.price}
            originalPrice={product.originalPrice}
            isNew={product.isNew}
            discountValue={product.discountValue}
            slug={slug(product.title, product.shortDescription)}
            image={product.image}
          />
        ))}
      </div>
      {pigination && (
        <PiginationControls
          page={page}
          hasNextPage={hasNextPage}
          onPrev={prevPage}
          onNext={nextPage}
        />
      )}
    </section>
  )
}
