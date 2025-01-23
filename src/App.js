import "../src/assets/css/index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import AllProducts from "./pages/AllProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductSinglePage from "./pages/ProductSinglePage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<AllProducts/>} />
        <Route path="/products/:id" element={<ProductSinglePage/>}/>
        <Route path="/category/:id" element={<ProductsByCategoryPage/>}/>

        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
