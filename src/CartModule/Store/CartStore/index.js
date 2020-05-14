import { observable } from "mobx";

class CartStore {
    @observable cartProductList;
    @observable productStore;
    constructor() {
        this.cartProductList = new Map();
    }
    onClickAddToCart = () => {
        alert("added");
    }
    onRemoveCartItem = () => {

    }
    clearCart = () => {

    }
    getProductDetailsById = () => {

    }
}

export default CartStore;
