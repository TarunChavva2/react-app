import React from 'react';
import { Link } from "react-router-dom";
class DisableOrEnable extends React.Component {
    state = {
        bool: false,
        disabled: false
    }
    onChange = (event) => {
        if (event.target.checked) {
            this.setState({ disabled: true, bool: false });
        }
        else {
            this.setState({ disabled: false });
        }
    }
    onClick = () => {
        this.setState({ bool: true });
    }
    render() {
        return (
            <div>
                        <div style={{backgroundColor:"black",color:'white',display:'flex'}}><Link to="/Form components" style={{marginTop:'22px',marginRight:'10px',marginLeft:'10px'}}>
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
  <h3>DisableOrEnable</h3></div>
  <div className="contentToUser">
  <div>
  <input className="" type="checkbox" onChange={this.onChange}/><label>Disabled</label>
  <button  className="click-me-button" onClick={this.onClick} disabled={this.state.disabled}>Click me</button>
  </div>
  <div className="show-message">
  { this.state.disabled === true && <p>I am Disabled </p>
      
  }
  {
      this.state.bool===true && <p> I am Enabled</p>
  }
  </div>
  </div>
  </div>);
    }
}
export { DisableOrEnable };
