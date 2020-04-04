import React from 'react';
import { Link } from "react-router-dom";
class VisitedCities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visitedCities: '',
            cityOptions: '',
            cityList: ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"],
            selectedCities: [],
            bool: false
        };
    }
    OnChangeCity = (event) => {
        if (event.target.checked) {
            let city = event.target.value;
            this.setState({ selectedCities: [...this.state.selectedCities, city] });
        }
        else {
            const finalCities = this.state.selectedCities.filter((city) => {
                return city !== event.target.value;
            });
            this.setState({ selectedCities: finalCities });
        }
    }
    OnSubmit = () => {
        this.setState({ bool: true });
        this.setState({ visitedCities: `I have visted these cities ${this.state.selectedCities}` });

    }
    renderList = () => {
        console.log(this.state.cityList);
        const a = this.state.cityList.map((eachCity) => {
            console.log(eachCity);
            return (
                <div><input type="checkbox" onChange = {this.OnChangeCity} value={eachCity}/><label>{eachCity}</label></div>
            );
        });
        return a;
    }
    render() {
        return (
            <div>
            <div style={{backgroundColor:"black",color:'white',display:'flex'}}><Link to="/Form components" style={{marginTop:'22px',marginRight:'10px',marginLeft:'10px'}}>
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
  <h3>VisitedCities</h3></div>
  <div className="contentToUser">
  <p>What is Your VisitedCities?</p>
  <form>
  {this.renderList()}
  </form>
  <span  onClick={this.OnSubmit}className="favorite-city-submit-button displayFavDessert">Make your Choice</span>
  { this.state.bool === true&&
  <p>{this.state.visitedCities} </p>}
  </div></div>);
    }
}
export { VisitedCities };
