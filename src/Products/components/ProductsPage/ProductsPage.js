import React from "react";
import { observer } from "mobx-react";
import { FiShoppingCart } from 'react-icons/fi';

import { productStore } from "../../stores";

import ProductList from "../ProductList";
import Header from "../Header";
import SizeFilter from "../SizeFilter";

import { ProductsPageScreen, ProductsDisplayContainer, SideBar, MainHeader, SignOutButton } from "./ProductPageStyles";

@observer
class ProductsPage extends React.Component {
    componentDidMount() {
        productStore.getProductList();
    }
    onClickSignOut = () => {

    }
    render() {
        return (
            <div>
                <MainHeader>
                    <SignOutButton>Sign Out</SignOutButton>
                    <FiShoppingCart />
                </MainHeader>
                <ProductsPageScreen>
                    <SideBar>
                        <SizeFilter />
                    </SideBar>
                    <ProductsDisplayContainer>
                        <Header />
                        <ProductList productsList={productStore.productsList} />
                    </ProductsDisplayContainer>
                </ProductsPageScreen>
            </div>
        )
    }
}

export { ProductsPage };