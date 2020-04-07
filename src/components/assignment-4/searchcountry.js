/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
// import { IoIosSearch } from 'react-icons/io';
import { Searchboxdiv } from './assignment-4-tailwind.js';
class Searchcountry extends React.Component {
	submit = (event) => {
		this.props.filterCountriesByName(event.target.value);
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
			<Searchboxdiv css={color} >
				{/*<IoIosSearch className="search-icon"/>*/}
				<input type="text" placeholder="Search for a country..." className="search-box" onChange={this.submit} css={color} />
			</Searchboxdiv>
		);
	}
}
export { Searchcountry };
