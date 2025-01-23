import { Link } from "react-router-dom";

export default function CategoriesList({ index, category }) {
  return (
    <Link
      key={index}
      to={"/category/:id".replace(":id", category)}
      className="category-card"
    >
      <div className="category-overlay">
        <h2 className="category-title">{category}</h2>
      </div>
    </Link>
  );
}
