import React from 'react';
import UserCard from '../components/UserCard.js/index.js'
import seedUserProfiles from "../seedUserProfiles.json"
import './css/Favorites.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Favorites (props){

    const goToChat=()=>{
        props.history.push('/chat')
        window.location.reload()
    }
    return(
    <main className="favorites">
        <h1 className='FavoritesHeader'>Your Matches:</h1>
        <div className="container">
            <div className="row">
                <div className="card favoritesCard">
                    <div className="row">
                        {seedUserProfiles.map(userProfile => (
                        <Card className="userCard" style={{ width: '21rem' }}>
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
                            <Button variant="info" onClick={goToChat}>chat</Button>
                        </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
export default Favorites;