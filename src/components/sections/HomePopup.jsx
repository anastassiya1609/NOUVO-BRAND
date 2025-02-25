export default function HomePopup({formData, closePopup}){
    return(
        <div className="popup-overlay">
        <div className="popup">
          <h3 className="title">Ваш заказ оформлен!</h3>
          <p className="description">
            Менеджер свяжется с вами для подтверждения.
          </p>
          <p>
            <strong className="popup-text">Ваши данные:</strong>
          </p>
          <ul>
            <li className="popup-text">Имя: {formData.name}</li>
            <li className="popup-text">Email: {formData.email}</li>
            <li className="popup-text">Телефон: {formData.phone} </li>
            <li className="popup-text">Адрес: {formData.address} </li>
            <li className="popup-text">Оплата: {formData.payment}</li>
          </ul>
          <button className="btn btn-secondary" onClick={closePopup}>
            Закрыть
          </button>
        </div>
      </div>
    )
}