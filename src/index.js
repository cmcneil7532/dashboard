//Hook up our ReactDOM to the real DOM

import React from "react";
import ReactDOM from "react-dom";

//Importing my index.css file so it can update the my DOM
import "./index.css";
import App from "./App";
import ContextProvider from "./contexts/ContextProvider";

//hook our react app to the root element in the HTML file

//Passing states to our application we wrap the app with out ContextProvider component. Now our app has access to the states

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,

  document.getElementById("root")
);
