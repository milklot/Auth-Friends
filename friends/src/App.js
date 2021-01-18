import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'

function App() {

  // const logout = () => {
  //   localStorage.removeItem("token");
  // };

  return (
    <Router>
      <div className="App">
        <h1>Friend List</h1>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendList}/>
          <Route path="/login" component={Login} />
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;