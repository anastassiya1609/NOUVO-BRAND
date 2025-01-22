import { useState, useEffect } from "react";

export function useFetchProducts() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      async function fetchProductsData() {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
          } catch (error) {
            console.log(error);
          }
      }
      fetchProductsData();
    }, []);
  
    return products;
  }