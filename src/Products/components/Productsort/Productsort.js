import React, { Component } from 'react';

import { SortingDiv, ItemsSortDropDown } from "./ProductsortStyle";

class ProductSort extends Component {
    onSelectSortBy = (event) => {
        const { value } = event.target;
        const { productStore } = this.props;
        productStore.onChangeSortBy(value);
    }
    render() {
        return (
            <SortingDiv>Sort Price by:
                <ItemsSortDropDown onChange={this.onSelectSortBy}>
                    <option>Select</option>
                    <option value="AscendingOrder">Lowest to Highest</option>
                    <option value="DescendingOrder">Highest to Lowest</option>
                </ItemsSortDropDown>
            </SortingDiv>
        )
    }
}

export { ProductSort };