import React, { useState, useMemo, useEffect } from 'react'
import AuthService from "../services/authService";
import seedUserProfiles from "../seedUserProfiles.json"
import TinderCard from 'react-tinder-card'
import UserCard from '../components/UserCard.js'
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Filter from '../components/Filter'
import getUserProfile from '../utils/getUserProfile'
import API from '../utils/API'
import FilterModal from '../components/FilterModal'


const db = seedUserProfiles

const alreadyRemoved = []
let usersState = db

function Matching () {
  const currentUser = AuthService.getCurrentUser();
  const [users, setusers] = useState(db)
  const [lastDirection, setLastDirection] = useState()
  const [show, setShow] = useState(false);
          

  
  // const { filterGender, filterPolitics, filterChildren, filterDrink, filterSmoke, filterCannabis, filterSign, ageRange, distance } = Filter
  const { filters, filterUpdate, setFilterUpdate } = getUserProfile()
  console.log(filters)
  
  const handleClose = () => {
    setFilterUpdate(!filterUpdate)
    setShow(false)};
  const handleShow = () => setShow(true);

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  useEffect(() => {
    
    let gendering = ["Female", "Male","Non-binary", "Transgender", "Intersex"]
    let politicing = ["Conservative", "Moderate", "Liberal", "No Affiliation"]
    let smoking = ["Regularly", "Socially", "Occasionally", "Never"]
    let drinking = ["Regularly", "Socially", "Occasionally", "Never"]
    let cannabising = ["Regularly", "Socially", "Occasionally", "Never"]
    let kidding = ["Has Children", "No Children"]

    if (filters.gender.length !== 0 && filters.gender.includes("No Preference") === false){
      gendering = filters.gender
    }
    if (filters.politics.length !== 0 && filters.politics.includes("No Preference") === false){
      politicing = filters.politics
    }
    if (filters.smoke.length !== 0 && filters.smoke.includes("No Preference") === false){
      smoking = filters.smoke
    }
    if (filters.drink.length !== 0 && filters.drink.includes("No Preference") === false){
      drinking = filters.drink
    }
    if (filters.cannabis.length !== 0 && filters.cannabis.includes("No Preference") === false){
      cannabising = filters.cannabis
    }
    if (filters.children.length !== 0 && filters.children.includes("No Preference") === false){
      kidding = filters.children
    }

    const query = {
      gender: gendering,
      politics: politicing,
      age: filters.ageRange,
      smoke: smoking,
      drink: drinking,
      cannabis: cannabising,
      children: kidding
    }

    API.filterUsers(query)
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
    
  }, [filters])

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
      {users.length === 0 ? 
      <div><h1>There aren't any users who match your preferences. Keep looking!</h1>
     <Button variant="secondary" onClick={handleShow} style={{position: 'relative',left: '55%',fontSize: 'x-large'}}>
        Filter <i className="fas fa-filter"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter Your BFFL:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Filter />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
     : 
      <div>
      <h1 className='MatchingHeader'style={{textAlign:"center", color:'white'}}>Are you my BFFL?</h1>
      <Button variant="secondary" onClick={handleShow} style={{position: 'relative',left: '55%',fontSize: 'x-large'}}>
        Filter <i className="fas fa-filter"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter Your BFFL:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Filter />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='cardContainer'>
        {users.map((userProfile, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={userProfile.name} onSwipe={(dir) => swiped(dir, userProfile.name)} onCardLeftScreen={() => outOfFrame(userProfile.name)}>
              <div className="card" style={{width: '30%', background: 'transparent'}}>
            <UserCard
                                key={userProfile._id}
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
        {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
      </div> 
    
    </div>
    }
    </div>
  )
}

export default Matching