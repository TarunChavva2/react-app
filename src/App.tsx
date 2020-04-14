import React from "react";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './components/home.js';
import CounterPage from './components/CounterPage';
import { Todos } from "./components/react-todos";
import { TodoApp } from './components/MobxTodos'
import Countrydetailscard from './components/assignment-4/country-details-card.js';
import { Header } from './components/assignment-4/header.js';
import FormComponents from "./components/FormComponents/FormComponents.js";
import { Countriesdashboard } from "./components/assignment-4/countriescomponent.js";
import themeStore from './stores/themestore';
import Page from './components/Page1';

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
          <Route path="/page1">
            <Page />
          </Route>
          <Route path="/mobxtodo">
            <TodoApp />
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








// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import HomePage from "./components/HomePage";
// import Page1 from "./components/Page1";

// import "./App.css";

// const App = () => {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Switch>
//         <Route exact path="/page-1">
//           <Page1 />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;





