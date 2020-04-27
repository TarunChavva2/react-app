import React, { Component } from "react";
import { observable } from "mobx";

class ProductCart extends Component {
    @observable shouldDisplayCart;
    constructor() {
        this.shouldDisplayCart = false;
    }
    showCart = () => {

    }
    hideCart = () => {

    }
}