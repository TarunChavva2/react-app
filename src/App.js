import React from "react";
import { observer, Provider } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './components/home.js';
import CounterPage from './components/CounterPage';
import { Todos } from "./components/react-todos";
import { TodoApp } from './components/MobxTodos'
import Countrydetailscard from './components/assignment-4/country-details-card.js';
import { Header } from './components/assignment-4/header.js';
// import FormComponents from "./components/FormComponents/FormComponents.js";
import { Countriesdashboard } from "./components/assignment-4/countriescomponent.js";
import themeStore from './stores/themestore';
import UsersPage from "./components/Userspage";
// import GridMemoryGame from "./components/Gridgame";
import stores from "./stores";
// import SignInPage from "./Authentication/components/SignInForm";
import ProductsPage from "./Products/components/ProductsPage";
import EcommerceStore from "./common/stores";
import authRoutes from "./Authentication/routes";

@observer class App extends React.Component {

  getCurrentTheme = () => {
    return themeStore.themeOption;
  }

  onChangeTheme = () => {
    themeStore.setCurrentTheme(themeStore.themeOption)
  }
  render() {
    return (
      <Provider {...stores}{...EcommerceStore}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/counter-page" component={CounterPage} />
            <Route path="/todos" component={Todos} />
            <Route path="/products" component={ProductsPage} />
            {/* <Route path="/formcomponents">
              <FormComponents />
            </Route> */}
            <Route path="/GridMemoryGame">
              <GridMemoryGame />
            </Route>
            {authRoutes}
            <Route path="/mobxtodo" component={TodoApp} />
            <Route path="/commoncomponent" component={UsersPage} />
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
      </Provider >
    )
  }
}
export default App;
