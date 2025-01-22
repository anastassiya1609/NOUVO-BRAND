import { useEffect, useState } from "react";
import CategoriesList from "../components/categories/CategoriesList";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoriesList category={category} index={index} />
      ))}
    </div>
  );
}
