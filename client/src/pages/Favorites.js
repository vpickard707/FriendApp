import React from 'react';
import UserCard from '../components/UserCard.js'
import seedUserProfiles from "../seedUserProfiles.json"
import './css/Favorites.css'

function Favorites (){
    return(
    <main className="favorites">
        <h1 className='FavoritesHeader'>Your Favorites:</h1>
        <div className="container">
            <div className="row">
                <div className="card favoritesCard">
                    <div className="row">
                        {seedUserProfiles.map(userProfile => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
export default Favorites;