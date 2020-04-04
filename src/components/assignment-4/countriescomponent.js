/*global fetch*/
import React from 'react';
import './assignment-4.css';
import { Header } from './header.js';
import Countrycard from './countrycard.js';
import { Filterbar } from './countriesfilterbar.js';
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
	onChangeTheme = () => {
		if (parseInt(this.state.theme.id) === 0) {
			this.setState({ theme: this.theme.dark });
		}
		else {
			this.setState({ theme: this.theme.light });
		}
	}
	render() {
		const { filteredCountries } = this.state;
		return (
			<div>
			 <Header/>
			 <Filterbar backgroundColor={this.state.theme} filterCountriesByRegion={this.filterCountriesByRegion} filterCountriesByName={this.filterCountriesByName}/>
			<Countrycard backgroundColor={this.state.theme} countries={filteredCountries}/>
		  </div>
		);
	}
}
export { Countriesdashboard };
