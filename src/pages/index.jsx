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

// const Index = () => {
//   return (
//     <Provider store={store}>
//       <HomeLazy />
//     </Provider>
//   );
// };

const Index = () => {
  // Check if the code is running in a browser environment
  if (typeof window !== 'undefined') {
    return (
      <Provider store={store}>
        <HomeLazy />
      </Provider>
    );
  }
  
  // If not in a browser environment, return null or a placeholder
  return null; // Or any other content you prefer
};
export default Index;
