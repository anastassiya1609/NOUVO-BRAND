import CardProduct from "../components/products/CardProduct";
import { useFetchProducts } from "../utils/getAllProducts";
import Loader from './../components/shared/Loader';

export default function AllProductsPage() {
  const {products, isLoading} = useFetchProducts();

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
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center title">Все товары нашего бренда</h2>
        <div className="row justify-content-between gy-4">
          {products.map((product) => (
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
