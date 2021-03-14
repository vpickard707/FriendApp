import React, { useState } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import API from "../utils/API"


function Createprofile2 (props){

const [gender, setGender] = useState();
const [politics, setPolitics] = useState();
const [children, setChildren] = useState();
const [drink, setDrink] = useState();
const [smoke, setSmoke] = useState();
const [cannabis, setCannabis] = useState();
const [age, setAge] = useState();
const [sign, setSign] = useState();
const [interests, setInterests] = useState([]);

function interestsClick(e){
const value = e.target.value
setInterests(prevState => [
    ...prevState, value
])
};

function handleFormSubmit(event) {
    event.preventDefault();
    const userProfile = {
        url: props.url,
        gender: gender, 
        politics: politics, 
        children: children, 
        drink: drink, 
        smoke: smoke, 
        cannabis: cannabis, 
        age: age,
        sign:sign,
        interests: interests}
        console.log(userProfile)
    API.saveUser(userProfile)
    .catch(err => console.log(err));
}
    return(
        <div className="container">
            <div className="profileCard card">
                <h1>Now let's find out more about you:</h1>
                <h4>Gender:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setGender('male')}>Male</Button>
                    <Button variant="secondary" onClick={() => setGender('female')}>Female</Button>
                    <Button variant="secondary" onClick={() => setGender('nonbinary')}>Non-binary</Button>
                    <Button variant="secondary" onClick={() => setGender('transgender')}>Transgender</Button>
                    <Button variant="secondary" onClick={() => setGender('intersex')}>Intersex</Button>
                    <Button variant="secondary" onClick={() => setGender('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Political Affiliation:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setPolitics('republican')}>Republican</Button>
                    <Button variant="secondary" onClick={() => setPolitics('independent')}>Independent</Button>
                    <Button variant="secondary" onClick={() => setPolitics('democrat')}>Democrat</Button>
                    <Button variant="secondary" onClick={() => setPolitics('noaffliation')}>No affliation</Button>
                    <Button variant="secondary" onClick={() => setPolitics('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you have children:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setChildren('yes')}>Yes</Button>
                    <Button variant="secondary" onClick={() => setChildren('no')}>No</Button>
                    <Button variant="secondary" onClick={() => setChildren('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you drink:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setDrink('regularly')}>Regularly</Button>
                    <Button variant="secondary" onClick={() => setDrink('socially')}>Socially</Button>
                    <Button variant="secondary" onClick={() => setDrink('occaionally')}>Occasionally</Button>
                    <Button variant="secondary" onClick={() => setDrink('never')}>Never</Button>
                    <Button variant="secondary" onClick={() => setDrink('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you smoke:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setSmoke('regularly')}>Regularly</Button>
                    <Button variant="secondary" onClick={() => setSmoke('socially')}>Socially</Button>
                    <Button variant="secondary" onClick={() => setSmoke('occaionally')}>Occasionally</Button>
                    <Button variant="secondary" onClick={() => setSmoke('never')}>Never</Button>
                    <Button variant="secondary" onClick={() => setSmoke('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you use cannabis:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setCannabis('regularly')}>Regularly</Button>
                    <Button variant="secondary" onClick={() => setCannabis('socially')}>Socially</Button>
                    <Button variant="secondary" onClick={() => setCannabis('occaionally')}>Occasionally</Button>
                    <Button variant="secondary" onClick={() => setCannabis('never')}>Never</Button>
                    <Button variant="secondary" onClick={() => setCannabis('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>How old are you?:</h4>          
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setAge('18-20')}>18-20</Button>
                    <Button variant="secondary" onClick={() => setAge('26-30')}>26-30</Button>
                    <Button variant="secondary" onClick={() => setAge('21-25')}>21-25</Button>
                    <Button variant="secondary" onClick={() => setAge('31-35')}>31-35</Button>
                    <Button variant="secondary" onClick={() => setAge('36-40')}>36-40</Button>
                    <Button variant="secondary" onClick={() => setAge('41-45')}>41-45</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setAge('46-50')}>46-50</Button>
                    <Button variant="secondary" onClick={() => setAge('51-55')}>51-55</Button>
                    <Button variant="secondary" onClick={() => setAge('56-60')}>56-60</Button>
                    <Button variant="secondary" onClick={() => setAge('61-65')}>61-65</Button>
                    <Button variant="secondary" onClick={() => setAge('65+')}> over 65</Button>
                    <Button variant="secondary" onClick={() => setAge('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>What's your sign?:</h4>
                 <ButtonGroup>
                    <Button variant="secondary" onClick={() => setSign('Aquarius')}>Aquarius</Button>
                    <Button variant="secondary" onClick={() => setSign('Pisces')}>Pisces</Button>
                    <Button variant="secondary" onClick={() => setSign('Aries')}>Aries</Button>
                    <Button variant="secondary" onClick={() => setSign('Taurus')}>Taurus</Button>
                    <Button variant="secondary" onClick={() => setSign('Gemini')}>Gemini</Button>
                    <Button variant="secondary" onClick={() => setSign('Cancer')}>Cancer</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setSign('leo')}>Leo</Button>
                    <Button variant="secondary" onClick={() => setSign('Virgo')}>Virgo</Button>
                    <Button variant="secondary" onClick={() => setSign('Libra')}>Libra</Button>
                    <Button variant="secondary" onClick={() => setSign('Scorpio')}>Scorpio</Button>
                    <Button variant="secondary" onClick={() => setSign('Sagittarius')}>Sagittarius</Button>
                    <Button variant="secondary" onClick={() => setSign('Capricorn')}>Capricorn</Button>
                    <Button variant="secondary" onClick={() => setSign('na')}>I prefer not to say</Button>
                 </ButtonGroup>
                <h4>What activities are you looking to build a friendship on:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={ interestsClick } value="books">Books</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="tv">TV Shows</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="videogames">Video Games</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="boardgames">Board Games</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="music">Music</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary" onClick={ interestsClick } value="workingout">Working Out</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="yoga">Yoga</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="hiking">Hiking</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="biking">Biking/Cycling</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="sports">Sports</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary" onClick={ interestsClick } value="gardening">Gardening</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="crafting">Crafting</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="sewing">Sewing</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="shopping">Shopping</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="volunteering">Volunteering</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary" onClick={ interestsClick } value="cars">Cars</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="goingout">Going Out/NightClubs</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="roadtrips">Roap Trips</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="wine">Wine Tasting</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="gambling">Gambling</Button>
                </ButtonGroup>
                <br></br>
                <Button variant="secondary" onClick={handleFormSubmit}>Save</Button>
            </div>
        </div>
            
    )
}

export default Createprofile2;