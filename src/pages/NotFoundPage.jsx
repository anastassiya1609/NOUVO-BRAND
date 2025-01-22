import { Link } from "react-router-dom";
import ErrorImage from "../assets/img/nf-image.svg";

export default function NotFoundPage() {
  return (
    <div className="nf-container ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={ErrorImage} alt="error" />
          </div>
          <div className="col-md-6">
            <h2 className="nf-title">
              Произошла ошибка! Перейдите на <Link to="/">главную</Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
