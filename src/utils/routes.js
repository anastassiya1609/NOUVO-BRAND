import HomePage from "../pages/HomePage";
import CategoriesPage from "../pages/CategoriesPage";
import AllProducts from "../pages/AllProductsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductSinglePage from "../pages/ProductSinglePage";
import ProductsByCategoryPage from "../pages/ProductsByCategoryPage";

import {
  HOME_PAGE_ROUTE,
  CATEGORIES_PAGE_ROUTE,
  ALL_PRODUCTS_PAGE_ROUTE,
  PRODUCTS_SINGLE_PAGE_ROUTE,
  PRODUCTS_BY_CATEGORY_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from "./consts";

export const routes = [
  {
    path: HOME_PAGE_ROUTE,
    element: HomePage,
  },
  {
    path: CATEGORIES_PAGE_ROUTE,
    element: CategoriesPage,
  },
  {
    path: ALL_PRODUCTS_PAGE_ROUTE,
    element: AllProducts,
  },
  {
    path: PRODUCTS_SINGLE_PAGE_ROUTE,
    element: ProductSinglePage,
  },
  {
    path: PRODUCTS_BY_CATEGORY_PAGE_ROUTE,
    element: ProductsByCategoryPage,
  },
  {
    path: NOT_FOUND_PAGE_ROUTE,
    element: NotFoundPage,
  },
];
