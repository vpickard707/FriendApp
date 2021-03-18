import React from 'react';
import UserCard from '../components/UserCard.js'
import seedUserProfiles from "../seedUserProfiles.json"

function Favorites (){
    return(
    <main className="favorites">
        <div className="container">
            <div className="row">
                <h2>Your Favorites:</h2>
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
    </main>
    )
}
export default Favorites;