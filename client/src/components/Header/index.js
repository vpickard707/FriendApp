import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import bffl from "./bffl.png"
import AuthService from "../../services/authService";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const location = useLocation();

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

    return (
    <ul className="nav nav-tabs">
      <Link to="/" className="nav-link">
            <img src={bffl} alt="bffl logo" width="150px" className="navbar-brand" />
      </Link>
      
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
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
                <Link to={"/profile"} className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className={location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                  Sign Up
                </Link>
              </li>
            </div>
          )}
      <li className="nav-item">
        <Link
          to="/createprofile"
          className={location.pathname === "/createprofile" ? "nav-link active" : "nav-link"}
        >
          createprofile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/matching"
          className={location.pathname === "/matching" ? "nav-link active" : "nav-link"}
        >
          matching
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/connections"
          className={location.pathname === "/connections" ? "nav-link active" : "nav-link"}
        >
          connections
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/chat"
          className={location.pathname === "/chat" ? "nav-link active" : "nav-link"}
        >
          chat
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact/favorites"
          className={location.pathname === "/favorites" ? "nav-link active" : "nav-link"}
        >
          favorites
        </Link>
      </li>
    </ul>
  );
}


export default Header;