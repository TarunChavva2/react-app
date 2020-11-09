import { observable, toJS } from "mobx";

import CartItemModel from "../model/cartModel";

class CartStore {
    @observable cartProductList;
    @observable productStore;
    constructor() {
        this.cartProductList = [];
    }
    onClickAddToCart = (eachProduct) => {
        const EachProduct = new CartItemModel(eachProduct);
        this.cartProductList.push(EachProduct);
        // console.log("cartstore", toJS(this.cartProductList));
    }
    onRemoveCartItem = () => {

    }
    clearCart = () => {

    }
    getProductDetailsById = () => {

    }
}

export default CartStore;
