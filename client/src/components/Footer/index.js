import React from 'react'
import "./style.css";

function Footer(){
    return(
    <footer className="fixed-bottom footer mt-auto py-3">
        <div className="container">
            <span>
                <a href="https://github.com/vpickard707/FriendApp" className="fa fa-github"> </a>
                <a href="https://unsplash.com/" className="fab fa-unsplash"> </a>
                <p className="collaborators">
                    Collaborators: Rebecca Blanton, Robert Koepp, Joshua Ordaz, Jessica Tax, Violet Pickard and Alex Bachicha
                </p>
            </span>
        </div>
  </footer>
    )
}

export default Footer;