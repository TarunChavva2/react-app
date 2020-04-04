import React from 'react';
import { IoIosSearch } from 'react-icons/io';
class Searchcountry extends React.Component {
	submit = (event) => {
		this.props.filterCountriesByName(event.target.value);
	}
	render() {
		return (
			<div className="search-div">
			<IoIosSearch className="search-icon"/>
		<input type="text" placeholder="Search for a country..." className="search-box" onChange={this.submit}/>
		</div>
		);
	}
}
export { Searchcountry };
