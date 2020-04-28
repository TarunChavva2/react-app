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

class Product extends Component {
    render() {
        const { eachProduct } = this.props;
        const { price, installmentsCount, currencyFormat, title, isFreeShipping, imageURL } = eachProduct;
        console.log(eachProduct);
        const instalmentsPrice = (price / installmentsCount).toFixed(2);
        return (
            <EachProductDiv>
                {isFreeShipping ? <FreeShippingDiv>FreeShipping</FreeShippingDiv> : null}
                <Image src={imageURL} />
                <ProductContent>
                    <ProductName>{title}</ProductName>
                    <hr />
                    {currencyFormat}{price}
                    <Installments>
                        {
                            (installmentsCount !== 0) ? <span>or {installmentsCount} x {currencyFormat} {instalmentsPrice}</span> : <span>No Installments ☹️</span>
                        }
                    </Installments>
                    <AddToCartButton>Add to Cart</AddToCartButton>
                </ProductContent>
            </EachProductDiv>
        )
    }
}

export { Product };