import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Auth from "../hoc/auth";
import store from "../store";
// pages for this product
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import MainPage from "./views/MainPage/MainPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Auth(MainPage, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
        </Switch>
      </Provider>
    </Suspense>
  );
}

export default App;
