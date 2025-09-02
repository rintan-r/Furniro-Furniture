import getCategories from "@/src/lib/getCategories";
import CategoryCard from "@/src/components/features/category/CategoryCard";

export default async function CategoryList() {
    const categories = await getCategories();

    return (
        <section className="pr-[126px] pl-[131px] text-center">
            <div className="pt-[56.47px] pb-[62.29px]">
                <h2 className="text-2xl font-bold">Browse The Range</h2>
                <p className="text-gray-500 mt-2">Explore categories to find your style</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
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
