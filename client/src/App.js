import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Chat from "./pages/Chat"
import Createprofile from "./pages/Createprofile"
import Createprofile2 from "./pages/Createprofile2"
import Createprofile3 from "./pages/Createprofile3"
import Matches from "./pages/Matches"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Matching from "./pages/Matching"
import Profile from "./pages/Profile"
import Register from "./pages/Registration"
import User from "./pages/User"
import Footer from './components/Footer'
import './App.css'

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
        <Route exact path="/createprofile2" component={Createprofile2} />
        <Route exact path="/createprofile3" component={Createprofile3} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/matching" component={Matching} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/matches" component={Matches} />
        <Footer/>
  </div>
</Router>

  );
}

export default App;
