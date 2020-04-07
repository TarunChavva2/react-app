/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Selectregion } from './selectregion.js';
import { Filterdiv } from './assignment-4-tailwind.js';
import { Searchcountry } from './searchcountry.js';
class Filterbar extends React.Component {
	onChangeRegion = (event) => {
		alert(event.target.value);
	}

	render() {
		const { selectedTheme } = this.props;
		const light = css({
			backgroundColor: '#fff',
			color: 'black'
		})
		const dark = css({
			backgroundColor: '#2b3945',
			color: 'white'
		})
		const color = (selectedTheme === 'Light-Mode') ? light : dark;
		return (
			<Filterdiv css={color}>
				<Searchcountry filterCountriesByName={this.props.filterCountriesByName} selectedTheme={selectedTheme} />
				<Selectregion filterCountriesByRegion={this.props.filterCountriesByRegion} selectedTheme={selectedTheme} />
			</Filterdiv>
		);
	}
}
export { Filterbar };
