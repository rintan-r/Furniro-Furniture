import getProducts from '@/src/lib/getProducts'
import ProductCard from '@/src/components/features/product/ProductCard'
import Button from '@/src/components/ui/Button'

export default async function ProductsList ({productsPerPage}) {
  const products = await getProducts()

  return (
    <section className='flex flex-col px-[102px] text-center gap-8 items-center'>
      <div className='pt-[56.47px] pb-[62.29px]' >
        <h2 className='text-2xl font-bold'>Browse The Range</h2>
        <p className='text-gray-500 mt-2'>
          Explore categories to find your style
        </p>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
        {products.slice(0, productsPerPage).map((product) => (
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
      </div>
      <Button className={Button({ variant: "outline", size: "lg" })}>Click Me</Button>
    </section>
  )
}
