import ProductsModel from "pages/products/models/products.model";
import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";

export const getProductDetailService = (product_id: number): Promise<ProductsModel> => {
  return axiosInstance
    .get(API.products + `/${product_id}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error("Detay getirilerken xeta bas verdi:", error);
      throw new Error("Detaylar getirilemedi");
    });
};
