import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = React.lazy(() => import("../src/components/home/Home"));
const About = React.lazy(() => import("../src/components/home/About"));
const Works = React.lazy(() => import("../src/components/home/Works"));
const Art = React.lazy(() => import("../src/components/home/Art"));
const Navbar = React.lazy(() => import("../src/components/home/Navbar"));
const Footer = React.lazy(() => import("../src/components/home/Footer"));

// import Home from "../src/components/home/Home";
// import About from "../src/components/about/About";
// import Works from "../src/components/works/Works";
// import Art from "../src/components/art/Art";
// import Navbar from "../src/components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={Footer}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Works} />
            <Route exact path="/art" component={Art} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
