import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Landing
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
        >
          Login
        </Link>
      </li>
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
          to="/profile"
          className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          profile
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