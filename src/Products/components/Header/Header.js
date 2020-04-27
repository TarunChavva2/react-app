import React, { Component } from 'react';
import { observer } from "mobx-react";

import { productStore } from "../../stores";

import ProductSort from "../Productsort";

import { HeaderDiv } from "./HeaderStyle";

@observer
class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <p>{productStore.productsList.length} Product(s) Found.</p>
                <ProductSort />
            </HeaderDiv>
        )
    }
}

export default Header;