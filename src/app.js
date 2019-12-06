import React from "react";
import ReactDOM from "react-dom";
import 'normalize.css/normalize.css';
import "./styles/styles.scss";


const BaseComp = () => (
  <div className="centered">
    <h1>Test 👍</h1>
    <p>It works!</p>
  </div>
);


ReactDOM.render(<BaseComp />, document.getElementById('app'));
