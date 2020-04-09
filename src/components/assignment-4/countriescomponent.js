/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import './assignment-4.css';
import Countrycard from './countrycard.js';
import { Filterbar } from './countriesfilterbar.js';
import { observer } from 'mobx-react';
@observer
class Countriesdashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			allcountries: [],
			filteredCountries: [],
			selectedRegion: "All",
		};
	}
	componentDidMount() {
		fetch("https://restcountries.eu/rest/v2/all")
			.then(result => result.json())
			.then(this.getCountries);
	}
	getCountries = (countries) => {
		this.setState({ allcountries: countries });
		this.setState({ filteredCountries: countries });
	}
	filterCountriesByRegion = (region) => {
		if (region === "All") {
			this.setState({ filteredCountries: this.state.allcountries, selectedRegion: "All" });
		}
		else {
			let selectedCountriesByRegion = this.state.allcountries.filter(eachcountry => {
				return (eachcountry.region.search(region) !== -1);
			});
			this.setState({ filteredCountries: selectedCountriesByRegion, selectedRegion: region });
		}
	}
	filterCountriesByName = (selectedName) => {
		const { selectedRegion } = this.state;
		selectedName = selectedName.charAt(0).toUpperCase() + selectedName.slice(1);
		if (this.state.selectedRegion === "All") {
			let selectedCountryByName = this.state.allcountries.filter(eachcountry => {
				return eachcountry.name.search(selectedName) !== -1;
			});
			this.setState({ filteredCountries: selectedCountryByName });
		}
		else {
			let selectedCountryName = this.state.allcountries.filter(eachcountry => {
				return eachcountry.name.search(selectedName) !== -1 && eachcountry.region === selectedRegion;
			});
			this.setState({ filteredCountries: selectedCountryName });
		}
	}
	render() {
		const { filteredCountries } = this.state;
		const { selectedTheme } = this.props;
		return (
			<div>
				<Filterbar filterCountriesByRegion={this.filterCountriesByRegion} filterCountriesByName={this.filterCountriesByName} selectedTheme={selectedTheme} />
				<Countrycard countries={filteredCountries} selectedTheme={selectedTheme} />
			</div>
		);
	}
}
export { Countriesdashboard };
