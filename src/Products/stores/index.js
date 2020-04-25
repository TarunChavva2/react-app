import ProductStore from "./ProductStore";
import ProductService from "../services/ProductService/ProductAPI";

const productService = new ProductService();
const productStore = new ProductStore(productService);

export { productStore };