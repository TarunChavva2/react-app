import React from 'react';
class Selectregion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRegion: "All",
		};
	}
	onChangeValue = (event) => {
		this.setState({ selectedRegion: event.target.value });
		this.props.filterCountriesByRegion(event.target.value);
	}
	render() {
		return (
			<div>
		<select value={this.state.selectedRegion} onChange={this.onChangeValue} className="select-region">
			 <option value="All">All</option>
			 <option value="Asia">Asia</option>
			 <option value="Africa">Africa</option>
			 <option value="Americas">Americas</option>
			 <option value="Europe">Europe</option>
			 <option value="Oceania">Oceania</option>
		</select>
		</div>
		);
	}
}
export { Selectregion };
