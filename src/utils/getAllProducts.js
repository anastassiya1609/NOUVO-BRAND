import { useState, useEffect } from "react";
import { axiosInstance } from "../services/axios";

export function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductsData() {
      try {
        setLoading(true);
        const res = await axiosInstance.get("");
        setProducts(res.data);
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
