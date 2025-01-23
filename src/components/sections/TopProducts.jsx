import { shuffleProducts } from "../../utils/utils";
import CardProduct from "../products/CardProduct";

export default function TopProducts({ id, title, products }) {
  return (
    <section className="popular-products py-5" id={id}>
      <div className="container">
        <h2 className="mb-4 text-center title">{title}</h2>
        <div className="row justify-content-between">
          {shuffleProducts(
            products
              .slice(0, 4)
              .map((product) => (
                <CardProduct
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  id={product.id}
                />
              )),
            3
          )}
        </div>
      </div>
    </section>
  );
}
