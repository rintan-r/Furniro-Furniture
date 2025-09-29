//import getProduct  from '@/src/lib/api/getProduct'
"use client";
import ProductCard from '@/src/components/features/product/ProductCard'
import Button from '@/src/components/ui/Button'
import { useQuery } from '@apollo/client/react'
import { gql } from '@apollo/client'
import { slugify } from '@/src/lib/utils/slugify'

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
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

export default function ProductsList ({ productsPerPage }) {
  // const products = await getProduct() 
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.products) return <p>No products found.</p>;

  //console.log(data.products); // Log the fetched products

  return (
    <section className='flex flex-col px-[102px] text-center gap-8 items-center'>
      <div className='pt-[56.47px] pb-[62.29px]'>
        <h2 className='text-2xl font-bold'>Browse The Range</h2>
        <p className='text-gray-500 mt-2'>
          Explore categories to find your style
        </p>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {data.products.slice(0, productsPerPage).map(product => (
          console.log("Product :", product),
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
        {/*
        {products.slice(0, productsPerPage).map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.shortDescription}
            price={product.price}
            originalPrice={product.originalPrice}
            isNew={product.isNew}
            discount={product.discount}
            image={product.image}
            slug={product.slug}
          />
        ))}

        */}
      </div>
      <Button className={Button({ variant: 'outline', size: 'lg' })}>
        Click Me
      </Button>
    </section>
  )
}
