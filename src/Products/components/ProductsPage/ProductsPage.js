import React from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import { productStore } from "../../stores";

import ProductList from "../ProductList";
import Header from "../Header";
import SizeFilter from "../SizeFilter";

import { ProductsPageScreen, ProductsDisplayContainer, SideBar } from "./ProductPageStyles";

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
                <SideBar>
                    <SizeFilter />
                </SideBar>
                <ProductsDisplayContainer>
                    <Header />
                    <ProductList productsList={productStore.productsList} />
                </ProductsDisplayContainer>
            </ProductsPageScreen>
        )
    }
}

export { ProductsPage };