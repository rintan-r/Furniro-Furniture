import CategoryList from "@/src/components/features/category/CategoryList";
import Hero from "@/src/components/features/homepage/Hero";
import ProductList from "@/src/components/features/product/ProductList";
import Inspiration from "@/src/components/features/homepage/Inspirations";
import FurniroFurniture from "@/src/components/features/homepage/FurniroFurniture";

export default function Home() {
  return (
      <main>
        <Hero />
        <CategoryList />
        <ProductList productsPerPage={8}/>
        <Inspiration />
        <FurniroFurniture />
      </main>
  );
}
