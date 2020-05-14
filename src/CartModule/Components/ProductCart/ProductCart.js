import React, { Component } from "react";
import { observable } from "mobx";
import { FiShoppingCart } from 'react-icons/fi';
import { observer } from "mobx-react";

import { Icon } from "./ProductcartStyles";

import CartList from "../CartList";

@observer
class ProductCart extends Component {
    @observable shouldDisplayCart;
    constructor() {
        super()
        this.shouldDisplayCart = false;
    }
    showCart = () => {
        this.shouldDisplayCart = true;
    }
    hideCart = () => {
        this.shouldDisplayCart = false;
    }
    render() {
        if (this.shouldDisplayCart) {
            return <CartList hideCart={this.hideCart} />
        }
        return (
            <Icon>
                <FiShoppingCart onClick={this.showCart} />
            </Icon>
        )
    }
}

export { ProductCart };