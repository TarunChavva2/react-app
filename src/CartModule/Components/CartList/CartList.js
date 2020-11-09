import React, { Component } from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

import CartItem from "../CartItem";

import { CartlistDisplay, Icon, CartListDisplayContainer, CloseButton } from "./CartListStyles";

@inject("cartStore")
@observer
class CartList extends Component {
    closeCart = () => {
        const { hideCart } = this.props;
        hideCart();
    }

    render() {
        console.log("cartList", toJS(this.props.cartStore.cartProductList));
        const { cartProductList } = this.props.cartStore;
        return (
            <CartListDisplayContainer>
                <CartlistDisplay>
                    <CloseButton onClick={this.closeCart}>X</CloseButton>
                    <Icon><FiShoppingCart /></Icon>
                </CartlistDisplay>
                {cartProductList.map((eachProduct) => <CartItem eachProduct={eachProduct} key={eachProduct.cartItemId} />)}
            </CartListDisplayContainer>
        )
    }
}
export { CartList };