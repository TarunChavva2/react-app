import SignInPage from "../components/SignInForm";
import { Route } from "react-router-dom";
import React from "react";
import { SIGNIN_PAGE_PATH } from "../constants/RouteConstants";

const routes = [
    <Route exact path={SIGNIN_PAGE_PATH} component={SignInPage} />
];

export default routes;