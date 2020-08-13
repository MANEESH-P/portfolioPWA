import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/components/footer/Footer";
const Home = React.lazy(() => import("../src/components/home/Home"));
const About = React.lazy(() => import("../src/components/about/About"));
const Works = React.lazy(() => import("../src/components/works/Works"));
const Art = React.lazy(() => import("../src/components/art/Art"));
const Navbar = React.lazy(() => import("../src/components/navbar/Navbar"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={Footer}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/code">
              <Works />
            </Route>
            <Route exact path="/art">
              <Art />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
