import { Link } from "react-router-dom";

export default function CardProduct({ image, title, price, id }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{price} $</p>
        </div>
        <Link to={("/products/:id").replace(":id", id)} className="btn ">
          Подробнее
        </Link>
      </div>
    </div>
  );
}
