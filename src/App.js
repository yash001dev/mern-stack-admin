import React from 'react';
import "./App.css";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from './containers/Home/Home.index';
import Signup from './containers/Signup/Signup.index';
import Signin from './containers/Signin/Signin.index';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
