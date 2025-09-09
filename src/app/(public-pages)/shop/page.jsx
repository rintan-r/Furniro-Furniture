import Header from '@/src/components/common/Header'
import ProductToolbar from '@/src/components/common/ProductToolbar'
import USP from '@/src/components/common/USP'
import ProductList from '@/src/components/features/product/ProductList'

export default function Shop () {
  return (
    <>
      <Header />
      <ProductToolbar />
      <ProductList productsPerPage={16}/>
      <USP />
    </>
  )
}
