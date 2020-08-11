import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About";
import Works from "../src/components/works/Works";
import Art from "../src/components/art/Art";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/code" component={Works} />
          <Route exact path="/art" component={Art} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
