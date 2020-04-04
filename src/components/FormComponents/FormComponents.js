import React from 'react';
import './formcomponents.css';
import Greetings from './Greetings.js';
import { FavouriteDessert } from './FavouriteDessert.js';
import { VisitedCities } from './VisitedCities.js';
import { YourState } from './YourState.js';
import { DisableOrEnable } from './DisableOrEnable.js';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
export default function FormComponents() {
    return (
        <Router>
        <div>
            <ul>
                <li>
                <Link to="/greetings">Greetings</Link>
                </li>
                <li>
                <Link to="/favouritedesserts">Favourite Desserts</Link>
                </li>
                <li>
                <Link to="/visitedcities">Visited Cities</Link>
                </li>
                <li>
                <Link to="/yourstate">Your State</Link>
                </li>
                <li>
                <Link to="/disablebutton">Disable Button
                </Link></li>
            </ul>
        </div>
        <Switch>
        <Route path="/greetings">
        <Greetings/>
        </Route>
        <Route path="/favouritedesserts">
        <FavouriteDessert/>
        </Route>
        <Route path="/visitedcities">
        <VisitedCities/>
        </Route>
        <Route path="/yourstate">
        <YourState/>
        </Route>
        <Route path="/disablebutton">
        <DisableOrEnable/>
        </Route>
        </Switch>
        </Router>

    );
}
