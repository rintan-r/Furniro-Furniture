import getCategories from "@/src/lib/api/getCategories";
import CategoryCard from "@/src/components/features/category/CategoryCard";

export default async function CategoryList() {
    const categories = await getCategories();

    return (
        <section className="pr-5 pl-6 xl:pr-[126px] xl:pl-[131px] mb-[56.47px]  text-center">
            <div className="pt-[56.47px] pb-[62.29px]">
                <h2 className="text-poppins-32-bold">Browse The Range</h2>
                <p className="text-poppins-20-regular text-gray-500 mt-2">Explore categories to find your style</p>
            </div>
            <div className="text-poppins-24-semibold grid grid-cols-3 gap-5">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        title={category.title}
                        image={category.image}
                        slug={category.slug}
                    />
                ))}
            </div>
        </section>
    );
}
