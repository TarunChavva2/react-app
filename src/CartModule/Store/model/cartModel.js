import { observable } from "mobx";

export default class CartItemModel {
    @observable cartItemId;
    @observable productId;
    @observable quantity;
    constructor(eachProduct) {
        this.cartItemId = Math.random();
        this.productId = eachProduct.productId;
        this.quantity = 1;
    }
    incrementQuantity = () => {
        this.quantity += 1;
    }
}