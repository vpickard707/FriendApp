import React, {Component} from "react";
import { Link } from "react-router-dom";
import bffl from "./bffl.png"
import AuthService from "../../services/authService";

class Header extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }

  logOut() {
    AuthService.logout();
  }
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
 

  render () {
    
    const { currentUser} = this.state;

    return (
    <ul className="nav nav-tabs">
      <Link to="/" className="nav-link">
            <img src={bffl} alt="bffl logo" width="150px" className="navbar-brand" />
      </Link>
      
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className={this.props.location === "/" ? "nav-link active" : "nav-link"}>
            Landing
          </Link>
        </li>

        {currentUser && (
          <li className="nav-item">
            <Link to={"/user"} className="nav-link">
              User
            </Link>
          </li>
        )}
      </div>
      {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className={this.props.location === "/profile" ? "nav-link active" : "nav-link"}>
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className={this.props.location === "/login" ? "nav-link active" : "nav-link"}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className={this.props.location === "/register" ? "nav-link active" : "nav-link"}>
                  Sign Up
                </Link>
              </li>
            </div>
          )}
      <li className="nav-item">
        <Link
          to="/createprofile"
          className={this.props.location === "/createprofile" ? "nav-link active" : "nav-link"}
        >
          createprofile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/matching"
          className={this.props.location === "/matching" ? "nav-link active" : "nav-link"}
        >
          matching
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/connections"
          className={this.props.location === "/connections" ? "nav-link active" : "nav-link"}
        >
          connections
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/chat"
          className={this.props.location === "/chat" ? "nav-link active" : "nav-link"}
        >
          chat
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/favorites"
          className={this.props.location === "/favorites" ? "nav-link active" : "nav-link"}
        >
          favorites
        </Link>
      </li>
    </ul>
  );
}
}

export default Header;