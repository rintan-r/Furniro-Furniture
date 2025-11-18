import Header from '@/src/components/common/Header'
import ProductToolbar from '@/src/components/common/ProductToolbar'
import USP from '@/src/components/common/USP'
import ProductList from '@/src/components/features/product/ProductList'

export default function Shop () {
  return (
    <>
      <Header />
      <ProductToolbar />
      <div className='pt-[46px] pb-[85px]'>
        <ProductList pigination={true} productsPerPage={16} />
      </div>
      <USP />
    </>
  )
}
