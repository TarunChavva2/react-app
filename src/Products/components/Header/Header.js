import React, { Component } from 'react';
import { observer } from "mobx-react";

import ProductSort from "../Productsort";

import { HeaderDiv } from "./HeaderStyle";

@observer
class Header extends Component {
    render() {
        const { productStore } = this.props;
        return (
            <HeaderDiv>
                <p>{productStore.productsList.length} Product(s) Found.</p>
                <ProductSort productStore={productStore} />
            </HeaderDiv>
        )
    }
}

export default Header;