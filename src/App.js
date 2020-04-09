import React from "react";
import { observer } from "mobx-react";
import './App.css';
import Home from './components/home.js';
import Apphome from './components/home.js';
import CounterPage from './components/CounterPage';
import { Todos } from "./components/react-todos";
import Countrydetailscard from './components/assignment-4/country-details-card.js';
import { Header } from './components/assignment-4/header.js';
import FormComponents from "./components/FormComponents/FormComponents.js";
import Emojigame from "./components/Emojigame/index/index.js";
import { Countriesdashboard } from "./components/assignment-4/countriescomponent.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import themeStore from './stores/themestore';
import { configure } from 'mobx';

@observer
class App extends React.Component {
  getCurrentTheme = () => {
    return themeStore.themeOption;
  }

  onChangeTheme = () => {
    themeStore.setCurrentTheme(themeStore.themeOption)
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/counter-page" component={CounterPage} />
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
            <Header selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme} />
            <Countriesdashboard selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme} />
          </Route>
          <Route exact path="/navigate_to_country_details/:countryCode">
            <Header selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme} />
            <Countrydetailscard selectedTheme={this.getCurrentTheme()} onChangeTheme={this.onChangeTheme} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
export default App;

