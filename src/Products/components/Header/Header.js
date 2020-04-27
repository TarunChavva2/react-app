import React, { Component } from 'react';
import { observer } from "mobx-react";

import { productStore } from "../../stores";

import { HeaderDiv, ItemsSortDropDown } from "./HeaderStyle";

@observer
class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                <p>Count of products</p>
                <ItemsSortDropDown>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                </ItemsSortDropDown>
            </HeaderDiv>
        )
    }
}

export default Header;