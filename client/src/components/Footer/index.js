import React from 'react'
import "./style.css";

function Footer(){
    return(
    <footer className="fixed-bottom footer mt-auto py-3">
        <div className="container">
            <span>
                <a href="https://github.com/vpickard707/FriendApp" className="fa fa-github"> repo   </a>
                <a href="https://unsplash.com/" className="fab fa-unsplash"> backgrounds</a>
            </span>
        </div>
  </footer>
    )
}

export default Footer;