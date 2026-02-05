import Header from '@/components/common/Header'
import ProductToolbar from '@/components/common/ProductToolbar'
import USP from '@/components/common/USP'
import ProductList from '@/components/features/product/ProductList'

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
