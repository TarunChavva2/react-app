import React from 'react';
import { Link } from "react-router-dom";
class FavouriteDessert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDessert: '',
      favoriteDessert: '',
      isChecked: false,
      selectedOption: ''
    };
    this.OnSubmit = () => {
      this.state.favoriteDessert = this.state.selectedDessert;
      this.setState({ favoriteDessert: this.state.favoriteDessert, isChecked: true });
    };
    this.onChageDessert = (event) => {
      this.state.selectedDessert = event.target.value;
    };
  }


  render() {
    return (
      <div>
              <div style={{backgroundColor:"black",color:'white',display:'flex'}}><Link to="/Form components" style={{marginTop:'22px',marginRight:'10px',marginLeft:'10px'}}>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
                <h3>Favourite Dessert</h3></div>
                <div  className="contentToUser">
                <p>What is Your FavouriteDessert?</p>
              <form>
              <div className="radio">
      <label>
        <input type="radio" value="Vanilla" name="Dessert" onChange={this.onChageDessert}/>
        Vanilla
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Butterscotch" name="Dessert" onChange={this.onChageDessert} />
        Butterscotch
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value=" Gulab Jamum" name="Dessert"  onChange={this.onChageDessert}/>
        Gulab Jamum
      </label>
      </div>
      <div className="radio">
      <label>
        <input type="radio" value=" Yoghurt Pots" name="Dessert" onChange={this.onChageDessert} />
        Yoghurt Pots
      </label>
      </div>
      <div className="radio">
      <label>
        <input type="radio" value="Baked Banana" name="Dessert" onChange={this.onChageDessert} />
        Baked Banana
      </label>
      </div>
      <div className="radio">
      <label>
        <input type="radio" value="Chocolate" name="Dessert" onChange={this.onChageDessert}/>
        Chocolate
      </label>
    </div>
  </form>
<span className='favorite-button' onClick={this.OnSubmit} className="displayFavDessert">Make Your Choice</span>
{this.state.isChecked === true && <p>{`My favorite dessert is ${this.state.favoriteDessert}`}</p>}
</div>
</div>);
  }
}
export { FavouriteDessert };
