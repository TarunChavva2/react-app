/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Countriesdashboarddiv, Countrycards } from './assignment-4-tailwind.js';
import Preloader from './preloader.js';
class Countrycard extends React.Component {
	navigateToCountryDetailsPage = (country) => {
		this.props.history.push(`/navigate_to_country_details/${country.alpha3Code}`);
	}
	render() {
		const { countries } = this.props;
		// const { filteredCountries } = this.props;
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
			<Countriesdashboarddiv css={color} >
				{
					(countries.length === 0) &&
					<Preloader />
				}
				{
					countries.map(country => (
						<Countrycards className="country-cards" css={color} key={country.name} onClick={() => this.navigateToCountryDetailsPage(country)}>
							<img src={country.flag} alt="national-flag" className="image" />
							<div className="country-details-section">
								<h2 className="country-name">{country.name}</h2>
								<p className="country-details"><span className="side-headdings">Population:</span> {country.population}</p>
								<p className="country-details"><span className="side-headdings">Region:</span> {country.region}</p>
								<p className="country-details"><span className="side-headdings">Capital:</span>{country.capital}</p>
							</div>
						</Countrycards>
					))
				}
			</Countriesdashboarddiv >);
	}
}
export default withRouter(Countrycard);
