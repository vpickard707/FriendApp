import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import './style.css'


function UserCard (props){
    return (
    <Card className="userCard" style={{ width: '21rem' }}>
        <Image className="userImage" variant="top" src={props.image} roundedCircle/>
        <Card.Body>
            <h2>{props.username}</h2>
                <h3>
                    <Badge className="badge" variant="info">{props.age}</Badge>
                    <Badge className="badge" variant="info">{props.gender}</Badge> 
                </h3>
                <h5>
                    <Badge className="smbadge" variant="info"><i className="fas fa-landmark" /> {props.politics}</Badge>
                    <Badge className="smbadge" variant="info"><i className="fas fa-child" /> {props.children}</Badge>
                    <Badge className="smbadge" variant="info"><i className="fas fa-glass-martini" /> {props.drink}</Badge>
                    <Badge className="smbadge" variant="info"><i className="fas fa-smoking"/> {props.smoke}</Badge>
                    <Badge className="smbadge" variant="info"><i className="fas fa-cannabis" /> {props.cannabis}</Badge>
                    <Badge className="smbadge" variant="info"><i className="fas fa-star" /> {props.sign}</Badge><br/>
                </h5>
                <h3>
                    Interests:
                    <Badge pill variant="info">{props.interests}</Badge>
                </h3>
            <Button variant="info">Chat</Button>
        </Card.Body>
    </Card>
    )
}

export default UserCard