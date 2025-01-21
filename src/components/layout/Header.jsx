export default function Header() {
  return (
    <header class="bg-dark text-white p-3">
      <div class="container">
        <div class="d-flex justify-content-between">
          <a href="index.html" class="text-white h3">
            NOUVO BRAND
          </a>
          <nav>
            <a href="index.html" class="text-white mx-2">
              Главная
            </a>
            <a href="categories.html" class="text-white mx-2">
              Категории
            </a>
            <a href="products.html" class="text-white mx-2">
              Все товары
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
