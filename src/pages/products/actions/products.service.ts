import { API } from "core/configs/api.config";
import axiosInstance from "core/configs/axios.config";
import ProductsModel from "../models/products.model";

export const getProductsService = () => {
  return axiosInstance.get(API.products).then((res) => {
    return res.data.map((item: any) => new ProductsModel(item));    
  });
};
