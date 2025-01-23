import { useEffect, useState } from "react";
import CategoriesList from "../components/categories/CategoriesList";
import Loader from './../components/shared/Loader';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);



  useEffect(() => {
    async function fetchCategories() {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="album-wrapper">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <CategoriesList category={category} index={index} />
      ))}
    </div>
  );
}
