import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import './style.css'


function UserCard (props){

    return (
    <>
        <Card.Body>
            <h2>{props.name}</h2>
            <Image className="userImage" variant="top" src={props.avatar} roundedCircle/>
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
                <h3>Interests:</h3>
                <div className="row">
                  <h3 style={{margin:"auto"}}>
                {props.interests.map(item => (
                  <Badge pill variant="info">{item.interest}</Badge>
                ))}
                </h3>
                </div>
        </Card.Body>
    </>
    )
}

export default UserCard