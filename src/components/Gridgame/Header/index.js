import React, { Component } from 'react';
import { Headerdiv, SubHeader, TopLevel, Level, Theme } from './Headerstyles';
import { observer } from "mobx-react";

@observer
class Header extends Component {
    onChangeSelectedTheme() {
    }
    render() {
        return (
            <Headerdiv>
                <TopLevel>
                    <p>TopLevel:<span>0</span></p>
                </TopLevel>
                <SubHeader>
                    <Level>
                        <p>Level:<span>0</span></p>
                    </Level>
                    <Theme>
                        <p>Mode:</p>
                    </Theme>
                </SubHeader>
            </Headerdiv>
        )
    }
}

export default Header;