import { useState, useEffect } from "react";

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductsData() {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally{
        setLoading(false);
      }
    }
    fetchProductsData();
  }, []);

  return {products, isLoading};
}
