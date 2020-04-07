import React from 'react';
import { Headerdiv, Rightheader, Themebutton } from './headerstyle.js';

class Navbar extends React.Component {
    render() {
        return (
            <Headerdiv>
                <h1 className="text-3xl">Emoji game</h1>
                <Rightheader>
                    <h2>Score:</h2>
                    <h2>TopScore:</h2>
                    <Themebutton>Change Theme</Themebutton>
                </Rightheader>
            </Headerdiv>
        )
    }
}
export default Navbar;