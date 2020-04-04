import React from "react";
import { Link } from "react-router-dom";
class YourState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: false,
            selectState: 'Select Your state',
            submittedState: '',
            stateList: ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]
        };
    }
    OnchengeState = (event) => {
        this.state.submittedState = event.target.value;
    }
    OnSubmit = () => {
        this.setState({ submittedState: this.state.submittedState, bool: true });

    }
    renderList = () => {
        const states = this.state.stateList.map((eachState) => {
            return <option value={eachState}>{eachState}
            </option>;
        });
        return states;
    }
    render() {
        return (
            <div>
            <div style={{backgroundColor:"black",color:'white',display:'flex'}}><Link to="/Form components" style={{marginTop:'22px',marginRight:'10px',marginLeft:'10px'}}>
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
  <h3>YourState</h3></div>
  <div className="contentToUser">
  <form onSubmit={this.OnSubmit}>
  <label>
  <select value={this.state.selectedState} onChange={this.OnchengeState}>
  <option value="select Your State">Select Your State</option>
  {
      this.renderList()
  }
  </select>
  </label>
  </form>
  <span onClick={this.OnSubmit} className="displayFavDessert"> Submit</span>
  { this.state.bool === true && <p>I am From {this.state.submittedState}</p>
      
  }
  </div>
  </div>);
    }


}
export { YourState };
