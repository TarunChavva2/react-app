import React, { Component } from 'react';

import { SortingDiv, ItemsSortDropDown } from "./ProductsortStyle";

class ProductSort extends Component {
    onSelectSortBy = (event) => {
        alert(event.target.value);
    }
    render() {
        return (
            <SortingDiv>Sort Price by:
                <ItemsSortDropDown onChange={this.onSelectSortBy}>
                    <option>Select</option>
                    <option value="Lowest to Highest">Lowest to Highest</option>
                    <option value="Highest to Lowest">Highest to Lowest</option>
                </ItemsSortDropDown>
            </SortingDiv>
        )
    }
}

export { ProductSort };