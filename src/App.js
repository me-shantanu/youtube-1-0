import React from "react";
import "./App.css";
import Header from "./component/top nab/Header";
import Sidebar from "./component/sidenab/Sidebar";
import Recommendedvideo from "./component/video/Recommendedvideo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./component/search/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search/:searchTerm">
            <Header />
            <div className="App__page">
              <Sidebar />
              <Search />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <div className="App__page">
              <Sidebar />
              <Recommendedvideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
