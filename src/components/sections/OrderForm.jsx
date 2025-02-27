import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useState } from "react";
import HomePopup from "./HomePopup";

export default function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  function onSubmit(data) {
    setPopupOpen(true);
    setFormData(data);
    reset();
  }

  function closePopup() {
    setFormData(null);
    setPopupOpen(false);
  }

  return (
    <section className="feedback">
      <div className="container mb-5">
        <h2 className="title text-center mt-4">Оформление заказа</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container order-form-container col-lg-6"
          id="main-form"
        >
          <div className="mb-3">
            <label for="name" className="form-label">
              Ваше имя
            </label>
            <input
              type="text"
              className={classNames("form-control", {
                "error-input": errors.name,
              })}
              id="name"
              placeholder="Введите ваше имя"
              {...register("name", { required: "Заполните ваше имя" })}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">
              Ваш email
            </label>
            <input
              type="email"
              className={classNames("form-control", {
                "error-input": errors.email,
              })}
              id="email"
              placeholder="Введите ваш email"
              {...register("email", { required: "Заполните поле Email" })}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label for="phone" className="form-label">
              Ваш телефон
            </label>
            <input
              type="tel"
              className={classNames("form-control", {
                "error-input": errors.phone,
              })}
              id="phone"
              placeholder="Введите ваш телефон"
              {...register("phone", {
                required: "Введите вш номер телефона",
                minLength: {
                  value: 11,
                  message:
                    "Некорректно введен номер телефона. Введите в формате: 87776665544",
                },
                maxLength: {
                  value: 11,
                  message:
                    "Некорректно введен номер телефона. Введите в формате: 87776665544",
                },
              })}
            />
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label for="address" className="form-label">
              Адрес доставки
            </label>
            <textarea
              className={classNames("form-control", {
                "error-input": errors.address,
              })}
              id="address"
              rows="3"
              placeholder="Введите адрес доставки"
              {...register("address", { required: "Введите адрес доставки." })}
            ></textarea>
            {errors.address && (
              <p className="error-message">{errors.address.message}</p>
            )}
          </div>

          <div className="mb-3">
            <label for="paymentMethod" className="form-label">
              Метод оплаты
            </label>
            <select
              className={classNames("form-control", {
                "error-input": errors.payment,
              })}
              id="paymentMethod"
              {...register("payment", { required: "Выберите метод оплаты" })}
            >
              <option value=""></option>
              <option value="card">Карта</option>
              <option value="cash">Наличными</option>
              <option value="paypal">PayPal</option>
            </select>
            {errors.payment && (
              <p className="error-message">{errors.payment.message}</p>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn ">
              Оформить заказ
            </button>
          </div>
        </form>
        {isPopupOpen && (
          <HomePopup formData={formData} closePopup={closePopup} setPopupOpen={setPopupOpen}/>
        )}
      </div>
    </section>
  );
}
