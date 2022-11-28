//Hook up our ReactDOM to the real DOM

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//hook our react app to the root element in the HTML file
ReactDOM.render(<App />, document.getElementById("root"));
