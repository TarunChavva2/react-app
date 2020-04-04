import React from 'react';
import { Selectregion } from './selectregion.js';
import { Searchcountry } from './searchcountry.js';
class Filterbar extends React.Component {
	onChangeRegion = (event) => {
		alert(event.target.value);
	}
	render() {
		return (
			<div className="filter-div">
			<Searchcountry filterCountriesByName={this.props.filterCountriesByName}/>
			<Selectregion filterCountriesByRegion={this.props.filterCountriesByRegion}/>
		</div>
		);
	}
}
export { Filterbar };
