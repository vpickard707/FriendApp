import React, { useState, useEffect} from 'react';
import AuthService from "../services/authService";
import API from "../utils/API";
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Link } from 'react-router-dom'

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  const [profile, setProfile] = useState({
                                  avatar: "",
                                  username: "",
                                  location: "",
                                  gender: "",
                                  politics: "",
                                  children: "",
                                  drink: "",
                                  smoke: "",
                                  cannabis: "",
                                  age: "",
                                  sign: "",
                                  interests: []
                                })
  
  

  useEffect (() => {
      API.findProfileByName(currentUser.username)
          .then((res) => {
              console.log(res.data[0])
              setProfile(res.data[0])
          })
          .catch(err => { 
          if (err.response) { 
          console.log('error with response')
          } else if (err.request) { 
              console.log('error with request') 
          } else { 
              console.log('um, sh*ts really broken') 
          } });
  }, [])
  

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
        <img src={profile.avatar} alt='avatar' style={{width: "300px"}}/>
            <h2>{profile.username}</h2>
                <ul>
                    <li>Age Group:{profile.age}</li>
                    <li>Gender:{profile.gender}</li>
                    <li><i className="fas fa-landmark" /> {profile.politics}</li>
                    <li><i className="fas fa-child" /> {profile.children}</li>
                    <li><i className="fas fa-glass-martini" /> {profile.drink}</li>
                    <li><i className="fas fa-smoking"/> {profile.smoke}</li>
                    <li><i className="fas fa-cannabis" /> {profile.cannabis}</li>
                    <li><i className="fas fa-star" /> {profile.sign}</li><br/>
                </ul>
                <h3>Interests:</h3>
                {profile.interests.map(item => (
                  <p>{item.interest}</p>
                ))}
                
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