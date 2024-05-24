import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";
import Landing from "./views/landing/Landing.js";
import Menu from "./views/Menu/Menu";
import DetailPesanan from "./views/detailPesanan/DetailPesanan";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./data/redux/store";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={Landing} />
          <Route path="/Menu" exact component={Menu} />
          <Route path="/DetailPesanan" exact component={DetailPesanan} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
