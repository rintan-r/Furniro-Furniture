import ProductsList from "@/src/components/features/product/ProductList";
import Breadcrumbs from '@/src/components/common/Breadcrumbs';
import DetailProduct from "@/src/components/features/product/DetailProduct";
import Header from "@/src/components/common/Header";

export default async function ProductDetailPage({ params }) {
  const { slug, id } = await params 

  console.log("slug:", slug)
  console.log("id:", id)
  
  return (
    <section>
      <Header />
      <Breadcrumbs />
      <DetailProduct id={id}/>
      <ProductsList productsPerPage={4} />
    </section>
  )
}