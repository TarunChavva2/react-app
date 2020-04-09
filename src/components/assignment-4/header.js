/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Headerdiv, Headdingtext, Themebutton } from './assignment-4-tailwind.js';
class Header extends React.Component {
	render() {
		console.log("header:", this.props);
		const { selectedTheme } = this.props;
		const { onChangeTheme } = this.props;
		const light = css({
			backgroundColor: '#fff',
			color: 'black'
		})
		const dark = css({
			backgroundColor: '#2b3945',
			color: 'white'
		})
		const color = (selectedTheme === 'light') ? light : dark;
		return (
			<Headerdiv css={color}>
				<Headdingtext>Where in the World ?</Headdingtext>
				<Themebutton onClick={onChangeTheme}>{selectedTheme} Mode</Themebutton>
			</Headerdiv>
		);
	}
}
export { Header };
