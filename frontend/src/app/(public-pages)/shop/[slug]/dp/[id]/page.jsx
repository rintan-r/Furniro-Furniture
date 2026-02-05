import ProductList from '@/components/features/product/ProductList'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import DetailProduct from '@/components/features/product/DetailProduct'
import Header from '@/components/common/Header'

export default async function ProductDetailPage ({ params }) {
  const { slug, id } = await params

  console.log('slug:', slug)
  console.log('id:', id)

  return (
    <section>
      <Header />
      <Breadcrumbs variant='default' />
      <DetailProduct id={id} />
      <div className='w-full h-px bg-gray-300 mt-15 mb-[41px]'></div>
      <ProductList pigination={false} productsPerPage={4} />
    </section>
  )
}
