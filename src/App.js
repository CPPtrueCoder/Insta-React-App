import React from 'react';
import Header from "./components/header/header";
import Feed from "./components/feed/feed";
import Profile from "./components/profile/profile";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
    <div className="App">
          <Header/>
          <Route path="/" component={Feed} exact/>
          <Route path="/profile" component={Profile} exact/>

    </div>
      </Router>
  );
}

export default App;
