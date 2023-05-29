import React from "react";
import Loadable from "react-loadable";
import "../styles/home.scss";
import store from "../store";

import { Provider } from "react-redux";
import Home from "../containers/Home";

const loader = () => <div>Loading...</div>;
//
const HomeLazy = Loadable({
  loader: () => import("../containers/Home"), 
  loading: loader,
});

const Index = () => {
  return (
    <Provider store={store}>
      <HomeLazy />
    </Provider>
  );
};
export default Index;
