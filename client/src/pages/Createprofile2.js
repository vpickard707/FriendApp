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
        name: props.name,
        image: props.url,
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
    API.saveProfile(userProfile)
    .catch(err => console.log(err));
}
    return(
        <div className="container">
            <div className="profileCard card">
                <h1>Now let's find out more about you:</h1>
                <h4>Gender:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setGender('Male')}>Male</Button>
                    <Button variant="secondary" onClick={() => setGender('Female')}>Female</Button>
                    <Button variant="secondary" onClick={() => setGender('Non-Binary')}>Non-binary</Button>
                    <Button variant="secondary" onClick={() => setGender('Transgender')}>Transgender</Button>
                    <Button variant="secondary" onClick={() => setGender('Intersex')}>Intersex</Button>
                    <Button variant="secondary" onClick={() => setGender('null')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Political Affiliation:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setPolitics('Republican')}>Republican</Button>
                    <Button variant="secondary" onClick={() => setPolitics('Independent')}>Independent</Button>
                    <Button variant="secondary" onClick={() => setPolitics('Democrat')}>Democrat</Button>
                    <Button variant="secondary" onClick={() => setPolitics('No Affliation')}>No affliation</Button>
                    <Button variant="secondary" onClick={() => setPolitics('null')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you have children:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setChildren('Has Children')}>Yes</Button>
                    <Button variant="secondary" onClick={() => setChildren('No Children')}>No</Button>
                    <Button variant="secondary" onClick={() => setChildren('null')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you drink:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setDrink('Regularly')}>Regularly</Button>
                    <Button variant="secondary" onClick={() => setDrink('Socially')}>Socially</Button>
                    <Button variant="secondary" onClick={() => setDrink('Occaionally')}>Occasionally</Button>
                    <Button variant="secondary" onClick={() => setDrink('Never')}>Never</Button>
                    <Button variant="secondary" onClick={() => setDrink('null')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you smoke:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setSmoke('Regularly')}>Regularly</Button>
                    <Button variant="secondary" onClick={() => setSmoke('Socially')}>Socially</Button>
                    <Button variant="secondary" onClick={() => setSmoke('Occaionally')}>Occasionally</Button>
                    <Button variant="secondary" onClick={() => setSmoke('Never')}>Never</Button>
                    <Button variant="secondary" onClick={() => setSmoke('null')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you use cannabis:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => setCannabis('Regularly')}>Regularly</Button>
                    <Button variant="secondary" onClick={() => setCannabis('Socially')}>Socially</Button>
                    <Button variant="secondary" onClick={() => setCannabis('Occaionally')}>Occasionally</Button>
                    <Button variant="secondary" onClick={() => setCannabis('Never')}>Never</Button>
                    <Button variant="secondary" onClick={() => setCannabis('null')}>I prefer not to say</Button>
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
                    <Button variant="secondary" onClick={() => setAge('null')}>I prefer not to say</Button>
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
                    <Button variant="secondary" onClick={() => setSign('Leo')}>Leo</Button>
                    <Button variant="secondary" onClick={() => setSign('Virgo')}>Virgo</Button>
                    <Button variant="secondary" onClick={() => setSign('Libra')}>Libra</Button>
                    <Button variant="secondary" onClick={() => setSign('Scorpio')}>Scorpio</Button>
                    <Button variant="secondary" onClick={() => setSign('Sagittarius')}>Sagittarius</Button>
                    <Button variant="secondary" onClick={() => setSign('Capricorn')}>Capricorn</Button>
                    <Button variant="secondary" onClick={() => setSign('na')}>I prefer not to say</Button>
                 </ButtonGroup>
                <h4>What activities are you looking to build a friendship on:</h4>
                <ButtonGroup>
                    <Button variant="secondary" onClick={ interestsClick } value="Books ">Books</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Watching TV ">TV Show</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Video games ">Video Games</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Boardgames ">Board Games</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Music ">Music</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary" onClick={ interestsClick } value="Working out ">Working Out</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Yoga ">Yoga</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Hiking ">Hiking</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Biking ">Biking/Cycling</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Sports ">Sports</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary" onClick={ interestsClick } value="Gardening ">Gardening</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Crafting ">Crafting</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Sewing ">Sewing</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Shopping ">Shopping</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Volunteering ">Volunteering</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button variant="secondary" onClick={ interestsClick } value="Cars ">Cars</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Going out ">Going Out/NightClubs</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Road trips ">Roap Trips</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Wine tasting ">Wine Tasting</Button>
                    <Button variant="secondary" onClick={ interestsClick } value="Gambling ">Gambling</Button>
                </ButtonGroup>
                <br></br>
                <Button variant="secondary" onClick={handleFormSubmit}>Save</Button>
            </div>
        </div>
            
    )
}

export default Createprofile2;