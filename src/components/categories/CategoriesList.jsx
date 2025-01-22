import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoriesList({ index, category }) {
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    async function getProductsByCategory() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await res.json();
        console.log(data);
        // setProductsByCategory(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProductsByCategory();
  }, []);

  return (
    <Link key={index} to={category} className="category-card">
      <div className="category-overlay">
        <h2 className="category-title">{category}</h2>
      </div>
    </Link>
  );
}
