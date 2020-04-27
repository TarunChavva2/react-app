import { observable, action, toJS } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

import ProductModel from "../models/ProductModel";

class ProductStore {
    @observable getProductListAPIStatus = API_INITIAL;
    @observable getProductListAPIError = null;
    @observable sizeFilter;
    @observable sortBy;
    @observable productsList = [];
    productsAPIService;
    constructor(productService) {
        this.productsAPIService = productService;
        this.sizeFilter = ["XS", "S", "M", "L", "XL", "XXL"];
        this.sortBy = "SELECT";
    }
    @action.bound
    setProductListResponse(response) {
        this.productsList = response.map(eachProduct => {
            return new ProductModel(eachProduct);
        });
    }
    @action.bound
    setGetProductListAPIError(error) {
        this.getProductListAPIError = error;
    }
    @action.bound
    setGetProductListAPIStatus(status) {
        this.getProductListAPIStatus = status;
    }
    @action.bound
    getProductList() {
        const productListPromise = this.productsAPIService.getProductsAPI();
        return bindPromiseWithOnSuccess(productListPromise)
            .to(this.setGetProductListAPIStatus, this.setProductListResponse)
            .catch(this.setGetProductListAPIError);

    }
    @action.bound
    onChangeSortBy() {

    }
    @action.bound
    onSelectSize() {

    }
}

export default ProductStore;