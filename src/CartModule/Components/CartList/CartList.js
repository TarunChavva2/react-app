import React, { Component } from "react";
import { FiShoppingCart } from 'react-icons/fi';

import { CartlistDisplay, Icon, CartListDisplayContainer, CloseButton } from "./CartListStyles";

class CartList extends Component {
    closeCart = () => {
        const { hideCart } = this.props;
        hideCart();
    }

    render() {
        return (
            <CartListDisplayContainer>
                <CartlistDisplay>
                    <CloseButton onClick={this.closeCart}>X</CloseButton>
                    <Icon><FiShoppingCart /></Icon>
                </CartlistDisplay>
            </CartListDisplayContainer>
        )
    }
}
export { CartList };