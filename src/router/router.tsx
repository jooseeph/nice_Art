import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import HomeComponent from "../pages/home/home.component";
import PublicComponent from "../core/layouts/public/public.component";
import AboutComponent from "../pages/about/about.component";
import ProductsComponent from "../pages/products/products.component";
import PartnersComponent from "../pages/partners/partners.components";
import ContactComponent from "../pages/contact/contact.component";
import ProductDetailComponent from "pages/product-detail/productDetail.component";
const router = createBrowserRouter(
  [
    {
      path: Routes.default,
      element: <PublicComponent />,
      children: [
        {
          index: true,
          element: <HomeComponent />,
        },
        {
          path: Routes.home,
          element: <HomeComponent />,
        },
        {
          path: Routes.about,
          element: <AboutComponent />,
        },
        {
          path: Routes.products,
          element: <ProductsComponent />,
        },
        {
          path: Routes.productdetail,
          element: <ProductDetailComponent />,
        },
        {
          path: Routes.partners,
          element: <PartnersComponent />,
        },
        {
          path: Routes.contact,
          element: <ContactComponent />,
        },
      ],
    },
  ],
  { basename: "/" }
);
  
export default router;
