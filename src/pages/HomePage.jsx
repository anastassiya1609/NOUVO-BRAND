import OrderForm from "../components/sections/OrderForm";
import PromoSlider from "../components/sections/PromoSlider";
import { useFetchProducts } from "../utils/getAllProducts";
import TopProducts from "./../components/sections/TopProducts";
import Loader from "./../components/shared/Loader";



export default function HomePage() {
  const { products, isLoading } = useFetchProducts();



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
    <div>
      <section className="hero-section">
        <div className="container hero-content">
          <h1 className="hero-title">NOUVO BRAND</h1>
          <p className="description">
            Молодежный стиль, который вдохновляет. Откройте для себя модные
            коллекции.
          </p>
          <a href="#products" className="btn btn-lg">
            Перейти к товарам
          </a>
        </div>
      </section>

      <PromoSlider />

      <TopProducts
        id="products"
        products={products}
        title="Популярные товары"
        num1="5"
        num2="9"
      ></TopProducts>

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
      <TopProducts
        id="discount"
        products={products}
        title="Скидка 50% на всю коллекцию!"
        num1="15"
        num2="19"
      ></TopProducts>

      <OrderForm/>
    </div>
  );
}
