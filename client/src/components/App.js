import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Provider as FluentProvider, themes } from "@fluentui/react-northstar";

import Auth from "../hoc/auth";
import store from "../store";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import MainPage from "./views/MainPage/MainPage";

import { startSocket, socketEmit } from "../socket";

startSocket();
socketEmit("sayHello");

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FluentProvider theme={themes.teams}>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Auth(MainPage, true)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
          </Switch>
        </Provider>
      </FluentProvider>
    </Suspense>
  );
}

export default App;
