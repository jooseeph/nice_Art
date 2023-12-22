import { useQuery } from "react-query";
import ProductsModel from "pages/products/models/products.model";
import { getProductDetailService } from "./productDetail.service";

export const useProductDetail = (product_id: number) => {
  return useQuery<ProductsModel, Error>(
    ["products", product_id],
    () => {
      return getProductDetailService(product_id);
    },
    {
      enabled: !!product_id,
    }
  );
};
