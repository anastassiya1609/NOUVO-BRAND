import { Carousel, Button } from "react-bootstrap";
import img1 from "../../assets/img/promo-slider-1.webp";
import img2 from "../../assets/img/promo-slider-2.webp";
import img3 from "../../assets/img/promo-slider-3.webp";



export default function PromoSlider() {
    const promoSliderData = [
        {
          title: "Приобретайте 2 украшения — третье в подарок!",
          offer: "1+1 = 3",
          desc: "Спешите приобрести украшения с выгодой!",
          img:  img1 ,
          btn: "Начать шоппинг",
        },
        {
          title: "Встречай лето с NOUVO BRAND",
          offer: "-10%!",
          desc: "Cкидки на летние товары!",
          img:  img2 ,
          btn: "Подробнее",
        },
        {
          title: "Будь в тренде с",
          offer: "NOUVO BRAND",
          desc: "Модные тренды сезона - выбери свое",
          img: img3 ,
          btn: "Перейти",
        },
      ];
  return (
    <div className="slider">
      <Carousel>
        {promoSliderData.map((item) => (
          <Carousel.Item>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-5">
                  <div className="images">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="d-block w-100"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="slider-content">
                    <h2 className="title">{item.title}</h2>
                    <p className="hero-title"> {item.offer}</p>
                    <p className="hero-description">{item.desc}</p>
                    <Button className="btn" href="/products">
                    {item.btn}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
