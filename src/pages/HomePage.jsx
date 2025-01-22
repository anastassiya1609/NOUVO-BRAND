import CardProduct from "../components/products/CardProduct";
import { useFetchProducts } from "../utils/getAllProducts";



export default function HomePage() {
  const products = useFetchProducts();

  const shuffleProducts = (products, num) => {
    const shuffled = [...products];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + num));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };


  return (
    <>
      <div>
        <section className="hero-section">
          <div className="container hero-content">
            <h1 className="hero-title">NOUVO BRAND</h1>
            <p className="hero-description">
              Молодежный стиль, который вдохновляет. Откройте для себя модные
              коллекции.
            </p>
            <a href="#products" className="btn btn-lg">
              Перейти к товарам
            </a>
          </div>
        </section>

        <section className="discount-banner">
          {" "}
          <img
            src="https://minimal.com.ua/wp-content/uploads/2024/09/113Dekstop-ros.jpg"
            alt=""
          />{" "}
        </section>

        <section className="popular-products py-5" id="products">
          <div className="container">
            <h2 className="mb-4 text-center title">
              Популярные товары
            </h2>
            <div className="row justify-content-between">{
                shuffleProducts}
              {products.slice(0, 4).map((product) => (
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

        <section className="photo-callout ">
          <div className="container-fluid d-flex align-items-center justify-content-between p-0">
            <div className="col-md-6">
              <img
                src="https://ivorytkani.ru/uploads/2024/08/trendy-v-mode-na-2025-god-cto-budet-aktual-no.webp"
                alt="Молодые люди"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 text-center text-md-start px-3">
              <h2 className="title">Будь в центре моды с нами</h2>
              <p className="callout-description">
                Одевайся стильно, будь уверенным. Мы предлагаем лучшие коллекции
                для настоящих лидеров.
              </p>
            </div>
          </div>
        </section>

        <section className="discount-50 py-5">
          <div className="container">
            <h2 className="mb-4 text-center title">
              Скидка 50% на всю коллекцию!
            </h2>
            <div className="row justify-content-between">
              {products.slice(15, 19).map((product) => (
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
      </div>
    </>
  );
}
