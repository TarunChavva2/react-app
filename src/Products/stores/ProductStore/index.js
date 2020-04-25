import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class ProductStore {
    @observable getProductListAPIStatus = API_INITIAL;
    @observable getProductListAPIError = null;
    @observable sizeFilter;
    @observable sortBy;
    productsAPIService;
    constructor(productService) {
        this.productsAPIService = productService;
        this.sizeFilter = [];
        this.sortBy = "SELECT";
    }
    @action.bound
    setProductListResponse(response) {
        console.log(response);
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
            .to(this.setProductListResponse, this.setGetProductListAPIStatus)
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