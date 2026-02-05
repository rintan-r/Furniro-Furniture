// /lib/getCategories.js
export default async function getCategories() {
  // Dummy data, 
  return [
    {
      id: "dining",
      title: "Dining",
      image: "/images/categories/dining.png",
      slug: "dining"
    },
    {
      id: "living",
      title: "Living",
      image: "/images/categories/living.png",
      slug: "living"
    },
    {
      id: "bedroom",
      title: "Bedroom",
      image: "/images/categories/bedroom.png",
      slug: "bedroom"
    },
  ];
}
