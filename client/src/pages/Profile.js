import React from 'react';
import AuthService from "../services/authService";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from 'react-router-dom'

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

    return(
        <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <div className="card">
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <img src={currentUser.avatar} alt='avatar'/>
            <h2>{currentUser.name}</h2>
                <ul>
                    <li>Age Group:{currentUser.age}</li>
                    <li>Gender:{currentUser.gender}</li>
                    <li><i className="fas fa-landmark" /> {currentUser.politics}</li>
                    <li><i className="fas fa-child" /> {currentUser.children}</li>
                    <li><i className="fas fa-glass-martini" /> {currentUser.drink}</li>
                    <li><i className="fas fa-smoking"/> {currentUser.smoke}</li>
                    <li><i className="fas fa-cannabis" /> {currentUser.cannabis}</li>
                    <li><i className="fas fa-star" /> {currentUser.sign}</li><br/>
                </ul>
                <h3>Interests:</h3>
                   <p>{currentUser.interests}</p>
                
        <ButtonGroup>
          <Button variant="secondary">
            <Link to="/createprofile">Edit Account</Link>
          </Button>
          <Button variant="secondary">
            <Link to="/createprofile">Edit Avatar</Link>
          </Button>
          <Button variant="secondary">
            <Link to="/createprofile2">Edit Profile</Link>
          </Button>
        </ButtonGroup>
        </div>
      </div>
    )
}

export default Profile;