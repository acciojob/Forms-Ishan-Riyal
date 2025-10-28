// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Form from "../pages/Form";
import FormRef from "../pages/FormRef";
import FormState from "../pages/FormState";
import "../styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>React Form Assignment</h1>

        <nav>
          <ul>
            <li id="form-link">
              <Link to="/form">Section 1 - Plain Form</Link>
            </li>
            <li id="form-ref-link">
              <Link to="/form-ref">Section 2 - useRef Form</Link>
            </li>
            <li id="form-state-link">
              <Link to="/form-state">Section 3 - useState Form</Link>
            </li>
          </ul>
        </nav>

        {/* React Router v5 uses Switch instead of Routes */}
        <Switch>
          <Route path="/form" component={Form} />
          <Route path="/form-ref" component={FormRef} />
          <Route path="/form-state" component={FormState} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
