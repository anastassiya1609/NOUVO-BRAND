import { Link } from "react-router-dom";



export default function Header() {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center" >
          <Link to="/" className="text-white h3">
            NOUVO BRAND
          </Link>
          <nav>
            <Link to="/" className="text-white mx-2">
              Главная
            </Link>
            <Link to="/categories" className="text-white mx-2">
              Категории
            </Link>
            <Link to="/products" className="text-white mx-2">
              Все товары
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
