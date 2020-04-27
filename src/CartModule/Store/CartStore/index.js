import { observable } from "mobx";

class CartStore {
    @observable cartProductList;
    @observable productStore;
    constructor() {
        this.cartProductList = new Map();
    }
    onClickAddToCart = () => {

    }
    onRemoveCartItem = () => {

    }
    clearCart = () => {

    }
    getProductDetailsById = () => {

    }
}

export default CartStore;
