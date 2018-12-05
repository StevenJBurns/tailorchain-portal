/* React, Redux and Router Imports */ 
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";

/* Local Dependencies */
import App from "./components/app/App.jsx";
import "./index.css";

/* ServiceWorker */
import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
document.getElementById("react-root"));


// If you want your app to work offline and load faster, you can change unregister() to register() below.
// Note this comes with some pitfalls. Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
