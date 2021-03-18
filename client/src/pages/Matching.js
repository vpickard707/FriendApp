import React from 'react';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import UserCard from '../components/UserCard.js'
import seedUserProfiles from "../seedUserProfiles.json"
import Button from 'react-bootstrap/Button'
import TinderCard from 'react-tinder-card'

const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
   
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

function Matching (){
    return(
        <main className="matching">
        <div className="container">
            <div className="row">
                <div className="card matchingMainCard">
                <h2>Are you my Bffl?:</h2>
                    <div className="row">
                    <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
                        {seedUserProfiles.map(userProfile => (
                            <div>
                            <UserCard
                            key={userProfile.id}
                            name={userProfile.name}
                            image={userProfile.image}
                            gender={userProfile.gender}
                            politics={userProfile.politics}
                            children={userProfile.children}
                            drink={userProfile.drink}
                            smoke={userProfile.smoke}
                            cannabis={userProfile.cannabis}
                            age={userProfile.age}
                            sign={userProfile.sign}
                            interests={userProfile.interests}
                            />
                            <ButtonGroup>
                            <Button variant="danger"><i className="far fa-times-circle"></i></Button>
                            <Button variant="success"><i className="far fa-check-circle"></i></Button>
                        </ButtonGroup>
                        </div>
                        ))}
                    </TinderCard>
                    </div>    
                </div>
            </div>
        </div>
    </main>
    )
}
export default Matching;