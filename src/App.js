import React from "react";
import './App.css';
import Home from './components/home.js';
import { Todos } from "./components/react-todos/index.js";
import Countrydetailscard from './components/assignment-4/country-details-card.js';
import { Header } from './components/assignment-4/header.js';
import FormComponents from "./components/FormComponents/FormComponents.js";
import Emojigame from "./components/Emojigame/index/index.js";
import { Countriesdashboard } from "./components/assignment-4/countriescomponent.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    themeOption: "Light-Mode",
  }
  onChangeTheme = (event) => {
    let theme = (this.state.themeOption === "Light-Mode") ? "Dark-Mode" : "Light-Mode";
    this.setState({ themeOption: theme });
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/formcomponents">
            <FormComponents />
          </Route>
          <Route path="/emojigame">
            <Emojigame />
          </Route>
          <Route path="/countrieslist">
            <Header selectedTheme={this.state.themeOption} onChangeTheme={this.onChangeTheme} />
            <Countriesdashboard selectedTheme={this.state.themeOption} onChangeTheme={this.onChangeTheme} />
          </Route>
          <Route exact path="/navigate_to_country_details/:countryCode">
            <Header selectedTheme={this.state.themeOption} onChangeTheme={this.onChangeTheme} />
            <Countrydetailscard selectedTheme={this.state.themeOption} onChangeTheme={this.onChangeTheme} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
export default App;

