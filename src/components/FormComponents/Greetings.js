import React from 'react';
import { Link } from 'react-router-dom';
class Greetings extends React.Component {
    state = {
        value: "",
        displayName: ""
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    displayMessage = (event) => {
        this.setState({ displayName: `Hi ${this.state.value}, have a nice day!`, value: "" });
    }
    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
            <div style={{backgroundColor:"black",color:'white',display:'flex'}}><Link to="/FormComponents" style={{marginTop:'22px',marginRight:'10px',marginLeft:'10px'}}>
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg></Link>
  <h3>Greetings</h3></div>
  <div className="contentToUser">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" onClick={this.displayMessage} value="Submit"/>
            </form>
            <p>{this.state.displayName}</p>
            </div>
        </div>
        );
    }
}
export default Greetings;
