import React, { useState, useMemo } from 'react'
import seedUserProfiles from "../seedUserProfiles.json"
import TinderCard from 'react-tinder-card'
import UserCard from '../components/UserCard.js'
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Button from 'react-bootstrap/Button'
import FilterModal from '../components/FilterModal'

const db = seedUserProfiles

const alreadyRemoved = []
let usersState = db

function Matching () {
  const [users, setusers] = useState(db)
  const [lastDirection, setLastDirection] = useState()
  

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

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
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <h1 style={{textAlign:"center", color:'white'}}>Are you my BFFL?</h1>
      <div className='cardContainer'>
      <FilterModal />
        {users.map((userProfile, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={userProfile.name} onSwipe={(dir) => swiped(dir, userProfile.name)} onCardLeftScreen={() => outOfFrame(userProfile.name)}>
              <div className="card" style={{width: '30%', background: 'transparent'}}>
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
                <Button variant="danger" onClick={() => swipe('left')}><i className="far fa-times-circle"></i></Button>
                <Button variant="success" onClick={() => swipe('right')}><i className="far fa-check-circle"></i></Button>
            </ButtonGroup>
            </div>
          </TinderCard>
        )}
        {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
      </div>
    </div>
  )
}

export default Matching