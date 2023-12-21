import { useQuery } from "react-query";
import { getProductsService } from "./products.service";
import ProductsModel from "../models/products.model";

export const useProducts = () => {
  return useQuery<ProductsModel[], Error>("products", () => {
    return getProductsService();
  });
};
