import React from "react";
import { observer } from "mobx-react";

import { productStore } from "../../stores";

import { ProductsPageScreen } from "./ProductPageStyles";

import Header from "../Header";
import SizeFilter from "../SizeFilter";

@observer
class ProductsPage extends React.Component {
    componentDidMount() {
        productStore.getProductList();
    }
    onClickSignOut = () => {

    }
    render() {
        return (
            <ProductsPageScreen>
                <SizeFilter />
                <Header />
            </ProductsPageScreen>
        )
    }
}

export { ProductsPage };