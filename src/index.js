import React from "react"; //React is Object from 'react' Module
import ReactDOM from "react-dom"; //same like above
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// ReactDOM.render(<App />, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

const element = <h1>Welcome to React</h1>;
console.log(element);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
