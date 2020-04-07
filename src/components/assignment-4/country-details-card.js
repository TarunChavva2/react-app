/*global fetch*/
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
// import { IoIosArrowRoundBack } from "react-icons/io";
class Countrydetailscard extends React.Component {
	state = {
		countryDetails: []
	}
	componentDidMount() {
		fetch("https://restcountries.eu/rest/v2/all")
			.then(result => result.json())
			.then(this.getCountries);
	}
	getCountries = (countries) => {
		let requiredCountry = countries.filter(eachCountry => {
			return eachCountry.alpha3Code === this.props.match.params.countryCode;
		});
		this.setState({ countryDetails: requiredCountry });
	}
	redirectToSelectedBorderCountry = (item) => {
		this.props.history.push(`/navigate_to_country_details/${item}`);
		this.componentDidMount();
	}
	goBackHome = () => {
		this.props.history.push(`/countrieslist`);
	}
	render() {
		let { countryDetails } = this.state;
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
			<div className="individual-country-background-color" css={color}>
				<button className="back-button" onClick={this.goBackHome} css={color}>{/*<IoIosArrowRoundBack/>*/}Back</button> {
					(countryDetails.length > 0) &&
					<div className="individual-country-details-div">
						<img src={this.state.countryDetails[0].flag} alt="national-flag" className="country-details-image" />
						<div className="individual-country-name-content">
							<h1 className="individual-country-headding">{countryDetails[0].name}</h1>
							<div className="individual-country-content">
								<div className="individual-country-single-data">
									<p className="p-tag"><b>Native name:</b>{countryDetails[0].nativeName}</p>
									<p className="p-tag"><b>Population:</b>{countryDetails[0].population}</p>
									<p className="p-tag"><b>Region:</b>{countryDetails[0].region}</p>
									<p className="p-tag"><b>Sub Region:</b>{countryDetails[0].subregion}</p>
									<p className="p-tag"><b>Capital:</b>{countryDetails[0].capital}</p>
								</div>
								<div className="individual-country-single-data">
									<p className="p-tag"><b>Top-Level-Domain:</b>{countryDetails[0].topLevelDomain}</p>
									<p className="p-tag"><b>Currencies:</b>{countryDetails[0].currencies.map((item) => item.name).join(",")}</p>
									<p className="p-tag"><b>Languages:</b>{countryDetails[0].languages.map(item => item.name).join(",")}</p>
								</div>
							</div>
							<div>
								<p className="border-countries-div"><b>Border-Countries:</b></p>
								{countryDetails[0].borders.map((item) => { return <button className="individual-country-button" css={color} onClick={() => this.redirectToSelectedBorderCountry(item)}>{item}</button> }
								)}
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}
export default withRouter(Countrydetailscard);
