import { HashLink } from "react-router-hash-link";

export default function PopupFromOrder({ closePopup, setPopupOpen }) {
  return (
    <HashLink smooth to="/#main-form">
      <div className="popup-overlay " onClick={() => setPopupOpen(false)}>
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <h4 className="title">Спасибо за выбор нашего магазина</h4>
          <p className="description">
            Извините за неудобства, корзина заказов находится в разработке.
            Заполните форму на главной странице и наш менеджер с вами свяжется.
          </p>
          <HashLink smooth to="/#main-form">
            <button className="btn btn-secondary" onClick={closePopup}>
              Закрыть
            </button>
          </HashLink>
        </div>
      </div>
    </HashLink>
  );
}
