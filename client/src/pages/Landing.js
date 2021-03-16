import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import backgroundImage from '../images/friendsbackground.jpeg'
import './css/Landing.css'

function Landing (){

    return(
    <main className="landingMain" style={{ 
        backgroundImage: `url(${backgroundImage})` 
      }}>
        <Card className="text-center landingCard">
            <Card.Header>Find your Bffl Today.</Card.Header>
                <Card.Body>
                    <Card.Title>Build friendships on common interests.</Card.Title>
                    <Card.Text>
                        
                        Sign in or join today to start finding your new Bffl.
                    </Card.Text>
                    <Button variant="info">
                        <Link to="/login">Sign In</Link>
                    </Button>
                    <Button variant="light">
                        <Link to="/register">Sign Up</Link>
                    </Button>
                </Card.Body>
        </Card>
    </main>
    )
}
export default Landing;