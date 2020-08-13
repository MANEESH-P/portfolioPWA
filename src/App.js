import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../src/components/footer/Footer";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About";
import Works from "../src/components/works/Works";
import Art from "../src/components/art/Art";
import Navbar from "../src/components/navbar/Navbar";

// const Home = React.lazy(() => import("../src/components/home/Home"));
// const About = React.lazy(() => import("../src/components/about/About"));
// const Works = React.lazy(() => import("../src/components/works/Works"));
// const Art = React.lazy(() => import("../src/components/art/Art"));
// const Navbar = React.lazy(() => import("../src/components/navbar/Navbar"));

function App() {
  return (
    <div className="App">
      {/* <Suspense
        fallback={
          <div
            style={{
              backgroundColor: "#303455",
              height: "100vh",
              color: "white",
            }}
          >
            <Footer />
          </div>
        }
      > */}
      <Router>
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
      </Router>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
