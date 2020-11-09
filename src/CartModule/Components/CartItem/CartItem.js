import React, { Component } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";

@observer
class CartItem extends Component {
    onRemoveCartItem = () => {

    }
    render() {
        console.log("cartItem", toJS(this.props));
        return (
            <div>

            </div>
        )
    }
}

export { CartItem };