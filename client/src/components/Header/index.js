import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import bffl from "./smBffl.png"
import AuthService from "../../services/authService";
import "./style.css"
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
      {currentUser ? (
        <Link to="/matching" className="nav-link">
          <img src={bffl} alt="bffl logo" width="80px" className="navbar-brand" />
        </Link>
      ) : (
        <Link to="/" className="nav-link">
            <img src={bffl} alt="bffl logo" width="80px" className="navbar-brand" />
        </Link>
      )}
      
      {currentUser ? (
            <div className="navbar mr-auto">
              <li className="nav-item">
                <Link to={"/profile"} className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}>
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  log Out
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar mr-auto">
              <li className="nav-item">
                <Link to={"/login"} className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                  login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className={location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                  sign Up
                </Link>
              </li>
            </div>
          )}
      
      

        {currentUser && (
          <div className="navbar ml-auto">
            <li className="nav-item">
              <Link 
               to="/user"
               className={location.pathname === "/user" ? "nav-link active" : "nav-link"}>
                account
              </Link>
            </li>
            <li className="nav-item">
            <Link
              to="/createprofile"
              className={location.pathname === "/createprofile" ? "nav-link active" : "nav-link"}>
              createprofile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/matching"
              className={location.pathname === "/matching" ? "nav-link active" : "nav-link"}>
              matching
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/chat"
              className={location.pathname === "/chat" ? "nav-link active" : "nav-link"}>
              chat
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/favorites"
              className={location.pathname === "/favorites" ? "nav-link active" : "nav-link"}>
              favorites
            </Link>
          </li>
        </div>
        )}
    </ul>
  );
}


export default Header;