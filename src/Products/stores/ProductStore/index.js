import { observable, action, toJS } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

import ProductModel from "../models/ProductModel";

class ProductStore {
    @observable getProductListAPIStatus;
    @observable getProductListAPIError;
    @observable sizeFilter;
    @observable sortBy;
    @observable productsList;
    productsAPIService;
    constructor(productService) {
        this.productsAPIService = productService;
        this.init();
    }
    init = () => {
        this.getProductListAPIStatus = API_INITIAL;
        this.getProductListAPIError = null;
        this.sizeFilter = [];
        this.sortBy = "SELECT";
        this.productsList = [];
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
    onChangeSortBy(value) {
        if (value === "AscendingOrder") {
            this.productsList = this.productsList.sort((a, b) => a.price - b.price);
        }
        else if (value === "DescendingOrder") {
            this.productsList = this.productsList.sort((a, b) => b.price - a.price);
        }
    }
    @action.bound
    onSelectSize() {

    }
    @action.bound
    clearStore = () => {
        this.init()
    }
}

export default ProductStore;