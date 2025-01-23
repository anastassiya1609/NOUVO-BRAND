import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProduct from "../components/products/CardProduct";
import Loader from './../components/shared/Loader';

export default function ProductsByCategoryPage() {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const { id } = useParams();
  const [category, setCategory] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getProductsByCategory() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${id}`
        );
        const data = await res.json();
        setProductsByCategory(data);
        if (data.length > 0) {
          setCategory(data[0].category); // Устанавливаем категорию из первого товара
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProductsByCategory();
  }, [id]);

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
    <section className="py-5 category">
      <div className="container">
        <h2 className="mb-4 text-center title">
          {" "}
          ТОВАРЫ КАТЕГОРИИ {category.toUpperCase()}
        </h2>
        <div className="row gy-4">
          {productsByCategory.map((product) => (
            <CardProduct
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
