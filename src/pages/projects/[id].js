import React from "react";
import Loadable from "react-loadable";
import store from "../../store";

import { Provider } from "react-redux";
import Project from "../../components/Project";
import Home from "../../containers/Home";
import CustomCursor from "../../CustomCursor";


const loader = () => <div>Loading.</div>;
//
const HomeLazy = Loadable({
  loader: () => import("../../containers/Home"), 
  loading: loader,
});

const ProjectPage = ({id}) => {
  return (
    <Provider store={store}>
        <CustomCursor/>
      <Project id={id} />
    </Provider>
  );
};
export default ProjectPage;