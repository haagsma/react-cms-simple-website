import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Site from './site';
import About from "./site/about";
import NavBar from "./site/components/navbar/navbar";
import Footer from "./site/components/footer";

function App() {
  return (
      <Router>
          <NavBar/>
          <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Site} />
          </Switch>
          <Footer/>
      </Router>
  );
}

export default App;
