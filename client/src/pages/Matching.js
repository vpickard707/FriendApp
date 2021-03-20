import React, { useState, useMemo, useEffect } from 'react'
import AuthService from "../services/authService";
import seedUserProfiles from "../seedUserProfiles.json"
import TinderCard from 'react-tinder-card'
import UserCard from '../components/UserCard.js'
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Button from 'react-bootstrap/Button'
import API from '../utils/API';

const db = seedUserProfiles


let usersState = db

function Matching () {
  const currentUser = AuthService.getCurrentUser();
  const [users, setusers] = useState(db)
  const [lastDirection, setLastDirection] = useState()
  const alreadyRemoved = []

  
  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  useEffect(() => {
    API.getAll()
    .then(res => {
      console.log(res.data)
      setusers(res.data)
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

  useEffect(() => {
    const query = {
        gender: { $in: ["Female", "Male"]},
        politics: { $in: ["Moderate"]},
        smoke: "Socially",
        age: { $gt: 24, $lt: 40},
    }
    API.filterUsers(query)
        .then(res => {
            console.log(res)
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

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    usersState = usersState.filter(userProfile => userProfile.name !== name)
    setusers(usersState)
  }

  const swipe = (dir) => {
    const cardsLeft = users.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = users.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <h1 style={{textAlign:"center", color:'white'}}>Are you my BFFL?</h1>
      {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
      <div className='cardContainer'>
        {users.map((userProfile, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={userProfile.name} onSwipe={(dir) => swiped(dir, userProfile.name)} onCardLeftScreen={() => outOfFrame(userProfile.name)}>
              <div className="card" style={{width: '30%', background: 'transparent'}}>
            <UserCard
                                key={userProfile.id}
                                name={userProfile.username}
                                image={userProfile.avatar}
                                gender={userProfile.gender}
                                politics={userProfile.politics}
                                children={userProfile.children}
                                drink={userProfile.drink}
                                smoke={userProfile.smoke}
                                cannabis={userProfile.cannabis}
                                age={userProfile.age}
                                sign={userProfile.sign}
                                interests={userProfile.interests[0].interest}
                                />
            <ButtonGroup>
                <Button variant="danger" onClick={() => swipe('left')}><i className="far fa-times-circle"></i></Button>
                <Button variant="success" onClick={() => swipe('right')}><i className="far fa-check-circle"></i></Button>
            </ButtonGroup>
            </div>
          </TinderCard>
        )}
       
      </div>
    </div>
  )
}

export default Matching