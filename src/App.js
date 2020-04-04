import React from "react";
import './App.css';
import Apphome from './components/home.js';
import { Todos } from "./components/react-todos/index.js";
import Countrydetailscard from './components/assignment-4/country-details-card.js';
import FormComponents from "./components/FormComponents/FormComponents.js";
import { Countriesdashboard } from "./components/assignment-4/countriescomponent.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    themeOption: "light-mode",
  }
  onChangeTheme = (event) => {
    this.state.themeOption === "light-mode" ? this.setState({ themeOption: "dark-theme" }) : this.setState({ themeOption: "light-theme" });
  }
  render() {
    const { themeOption } = this.state;
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/formcomponents">
            <FormComponents />
          </Route>
          <Route path="/countrieslist">
            <Countriesdashboard />
          </Route>
          <Route exact path="/navigate_to_country_details/:countryCode">
            <Countrydetailscard />
          </Route>
          <Route path="/" component={Apphome}/>
        </Switch>
      </Router>
    )
  }
}
export default App;
