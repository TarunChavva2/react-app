import React from 'react';
import { Headerdiv, Headdingtext, Themebutton } from './assignment-4-tailwind.js';
class Header extends React.Component {
	render() {
		return (
			<Headerdiv>
				<Headdingtext>Where in the World ?</Headdingtext>
				<Themebutton onClick={this.props.onChangeTheme}>Change Theme</Themebutton>
			</Headerdiv>
		);
	}
}
export { Header };
