import React, { Component } from "react";
import {
    EachProductDiv,
    FreeShippingDiv,
    Image,
    ProductContent,
    ProductName,
    Installments,
    AddToCartButton
} from './ProductStyle';
import { inject } from "mobx-react";

@inject("cartStore", "authStore", "productStore")
class Product extends Component {
    onClickAddToCart = () => {
        const { eachProduct } = this.props;
        this.props.cartStore.onClickAddToCart(eachProduct);
    }
    render() {
        const { eachProduct } = this.props;
        const { price, installmentsCount, currencyFormat, title, isFreeShipping, imageURL } = eachProduct;
        const instalmentsPrice = (price / installmentsCount).toFixed(2);
        return (
            <EachProductDiv>
                {isFreeShipping ? <FreeShippingDiv>FreeShipping</FreeShippingDiv> : null}
                <Image src={imageURL} />
                <ProductContent>
                    <ProductName>{title}</ProductName>
                    {currencyFormat} {price}
                    <Installments>
                        {
                            (installmentsCount !== 0) ? <span>or {installmentsCount} x {currencyFormat} {instalmentsPrice}</span> : <span>No Installments ☹️</span>
                        }
                    </Installments>
                    <AddToCartButton onClick={this.onClickAddToCart}>Add to Cart</AddToCartButton>
                </ProductContent>
            </EachProductDiv>
        )
    }
}

export { Product };