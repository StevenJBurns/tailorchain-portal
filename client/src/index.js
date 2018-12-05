
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

/* ServiceWorker */
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("react-root"));

/* ServiceWorker */
serviceWorker.unregister();
