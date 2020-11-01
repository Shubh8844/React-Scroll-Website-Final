import React from "react";
import "./styles.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign from "./pages/Sign";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Sign} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
