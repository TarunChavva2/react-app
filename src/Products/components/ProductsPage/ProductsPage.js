import { Redirect, withRouter } from "react-router-dom";
import React from "react";
import { observer, inject } from "mobx-react";

import { getAccessToken } from "../../../utils/StorageUtils";
import ProductCart from "../../../CartModule/Components/ProductCart";
import { SIGNIN_PAGE_PATH } from "../../../Authentication/constants/RouteConstants";


import ProductList from "../ProductList";
import Header from "../Header";
import SizeFilter from "../SizeFilter";

import {
    ProductsPageScreen,
    ProductsDisplayContainer,
    SideBar,
    MainHeader,
    SignOutButton,
} from "./ProductPageStyles";

@inject("productStore", "authStore")
@observer
class ProductsPage extends React.Component {
    componentDidMount() {
        if (getAccessToken() === undefined) {
            this.redirectToLoginPage();
        }
        this.props.productStore.getProductList();
    }
    onClickSignOut = () => {
        this.props.productStore.clearStore();
        this.props.authStore.userSignOut();
        this.redirectToLoginPage();
    }
    redirectToLoginPage = () => {
        const { history } = this.props;
        history.replace({ pathname: SIGNIN_PAGE_PATH });
    }
    render() {
        const { productStore } = this.props;
        return (
            <div>
                <MainHeader>
                    <SignOutButton onClick={this.onClickSignOut}>Sign Out</SignOutButton>
                    <ProductCart />
                </MainHeader>
                <ProductsPageScreen>
                    <SideBar>
                        <SizeFilter />
                    </SideBar>
                    <ProductsDisplayContainer>
                        <Header productStore={productStore} />
                        <ProductList productsList={productStore.productsList} />
                    </ProductsDisplayContainer>
                </ProductsPageScreen>
            </div>
        )
    }
}

export default withRouter(ProductsPage);