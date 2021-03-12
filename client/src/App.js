import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Chat from "./components/pages/Chat"
import Connections from "./components/pages/Connections"
import Createprofile from "./components/pages/Createprofile"
import Favorites from "./components/pages/Favorites"
import Landing from "./components/pages/Landing"
import Login from "./components/pages/Login"
import Matching from "./components/pages/Matching"
import Profile from "./components/pages/Profile"
import Register from "./components/pages/Registration"
import User from "./components/pages/User"
import './App.css';



function App() {
  return (

<Router>
  <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/user" component={User} />
        <Route exact path="/createprofile" component={Createprofile} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/matching" component={Matching} />
        <Route exact path="/connections" component={Connections} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/favorites" component={Favorites} />
  </div>
</Router>
  );
}

export default App;
