import React, { Component } from "react";

import { ProductListDiv } from "./ProductListStyles";
import Product from "../Product";

class ProductList extends Component {

    render() {
        const { productsList } = this.props;
        return (
            <ProductListDiv>
                {productsList.map((eachProduct) => <Product eachProduct={eachProduct} key={eachProduct.productId} />)}
            </ProductListDiv>
        )
    }
}

export { ProductList };