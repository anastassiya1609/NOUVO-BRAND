export default function HomePage() {
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

        <section className="discount-banner"> <img src="https://minimal.com.ua/wp-content/uploads/2024/09/113Dekstop-ros.jpg" alt="" /> </section>

        {/* Секция 3: Популярные товары */}
        <section className="popular-products py-5" id="products">
          <div className="container">
            <h2 className="mb-4 text-center">Популярные товары</h2>
            <div className="row">
              {/* Карточки товаров */}
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div className="col-md-2" key={index}>
                  <div className="card">
                    <img
                      src={`https://via.placeholder.com/300x300`}
                      alt={`Товар ${item}`}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Товар {item}</h5>
                      <p className="card-text">
                        Краткое описание товара {item}
                      </p>
                      <a href="#" className="btn btn-success">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Секция 4: Фото и минималистичный призыв */}
        <section className="photo-callout py-5">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500x500"
                alt="Молодые люди"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 text-center text-md-start">
              <h2 className="callout-title">Будь в центре моды с нами</h2>
              <p className="callout-description">
                Одевайся стильно, будь уверенным. Мы предлагаем лучшие коллекции
                для настоящих лидеров.
              </p>
            </div>
          </div>
        </section>

        {/* Секция 5: Скидка 50% на товары */}
        <section className="discount-50 py-5">
          <div className="container">
            <h2 className="mb-4 text-center">Скидка 50% на всю коллекцию!</h2>
            <div className="row">
              {/* Карточки товаров для скидки 50% */}
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div className="col-md-2" key={index}>
                  <div className="card">
                    <img
                      src={`https://via.placeholder.com/300x300`}
                      alt={`Товар ${item}`}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Товар {item}</h5>
                      <p className="card-text">
                        Краткое описание товара {item}
                      </p>
                      <a href="#" className="btn btn-light">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
