import React, { useState } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import API from "../utils/API"


function Createprofile2 (){
const [gender, setGender] = useState();
const [politics, setPolitics] = useState();
const [children, setChildren] = useState();
const [drink, setDrink] = useState();
const [smoke, setSmoke] = useState();
const [cannabis, setCannabis] = useState();
const [age, setAge] = useState();
const [sign, setSign] = useState();
const [interests, setInterests] = useState();

    

function handleFormSubmit(event) {
    event.preventDefault();
    const userProfile = {
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
                    <Button onClick={() => setGender('male')}>Male</Button>
                    <Button onClick={() => setGender('female')}>female</Button>
                    <Button onClick={() => setGender('nonbinary')}>Non-binary</Button>
                    <Button onClick={() => setGender('transgender')}>Transgender</Button>
                    <Button onClick={() => setGender('intersex')}>Intersex</Button>
                    <Button onClick={() => setGender('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Political Affiliation:</h4>
                <ButtonGroup>
                    <Button onClick={() => setPolitics('republican')}>Republican</Button>
                    <Button onClick={() => setPolitics('independent')}>Independent</Button>
                    <Button onClick={() => setPolitics('democrat')}>Democrat</Button>
                    <Button onClick={() => setPolitics('noaffliation')}>No affliation</Button>
                    <Button onClick={() => setPolitics('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you have children:</h4>
                <ButtonGroup>
                    <Button onClick={() => setChildren('yes')}>Yes</Button>
                    <Button onClick={() => setChildren('no')}>No</Button>
                    <Button onClick={() => setChildren('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you drink:</h4>
                <ButtonGroup>
                    <Button onClick={() => setDrink('regularly')}>Regularly</Button>
                    <Button onClick={() => setDrink('socially')}>Socially</Button>
                    <Button onClick={() => setDrink('occaionally')}>Occasionally</Button>
                    <Button onClick={() => setDrink('never')}>Never</Button>
                    <Button onClick={() => setDrink('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you smoke:</h4>
                <ButtonGroup>
                    <Button onClick={() => setSmoke('regularly')}>Regularly</Button>
                    <Button onClick={() => setSmoke('socially')}>Socially</Button>
                    <Button onClick={() => setSmoke('occaionally')}>Occasionally</Button>
                    <Button onClick={() => setSmoke('never')}>Never</Button>
                    <Button onClick={() => setSmoke('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>Do you use cannabis:</h4>
                <ButtonGroup>
                    <Button onClick={() => setCannabis('regularly')}>Regularly</Button>
                    <Button onClick={() => setCannabis('socially')}>Socially</Button>
                    <Button onClick={() => setCannabis('occaionally')}>Occasionally</Button>
                    <Button onClick={() => setCannabis('never')}>Never</Button>
                    <Button onClick={() => setCannabis('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>How old are you?:</h4>          
                <ButtonGroup>
                    <Button onClick={() => setAge('18-20')}>18-20</Button>
                    <Button onClick={() => setAge('26-30')}>26-30</Button>
                    <Button onClick={() => setAge('21-25')}>21-25</Button>
                    <Button onClick={() => setAge('31-35')}>31-35</Button>
                    <Button onClick={() => setAge('36-40')}>36-40</Button>
                    <Button onClick={() => setAge('41-45')}>41-45</Button>
                    <Button onClick={() => setAge('46-50')}>46-50</Button>
                    <Button onClick={() => setAge('51-55')}>51-55</Button>
                    <Button onClick={() => setAge('56-60')}>56-60</Button>
                    <Button onClick={() => setAge('61-65')}>61-65</Button>
                    <Button onClick={() => setAge('66-70')}>66-70</Button>
                    <Button onClick={() => setAge('70+')}> over 70</Button>
                    <Button onClick={() => setAge('na')}>I prefer not to say</Button>
                </ButtonGroup>
                <h4>What's your sign?:</h4>
                 <ButtonGroup>
                    <Button onClick={() => setSign('Aquarius')}>Aquarius</Button>
                    <Button onClick={() => setSign('Pisces')}>Pisces</Button>
                    <Button onClick={() => setSign('Aries')}>Aries</Button>
                    <Button onClick={() => setSign('Taurus')}>Taurus</Button>
                    <Button onClick={() => setSign('Gemini')}>Gemini</Button>
                    <Button onClick={() => setSign('Cancer')}>Cancer</Button>
                    <Button onClick={() => setSign('eo')}>Leo</Button>
                    <Button onClick={() => setSign('Virgo')}>Virgo</Button>
                    <Button onClick={() => setSign('Libra')}>Libra</Button>
                    <Button onClick={() => setSign('Scorpio')}>Scorpio</Button>
                    <Button onClick={() => setSign('Sagittarius')}>Sagittarius</Button>
                    <Button onClick={() => setSign('Capricorn')}>Capricorn</Button>
                    <Button onClick={() => setSign('na')}>I prefer not to say</Button>
                 </ButtonGroup>
                <h4>What activities are you looking to build a friendship on:</h4>
                <h5>Pick up to 5:</h5>
                <ButtonGroup>
                    <Button onClick={() =>setInterests('books')}>Books</Button>
                    <Button onClick={() =>setInterests('tv')}>TV Shows</Button>
                    <Button onClick={() =>setInterests('videogames')}>Video Games</Button>
                    <Button onClick={() =>setInterests('boardgames')}>Board Games</Button>
                    <Button onClick={() =>setInterests('music')}>Music</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={() =>setInterests('workingout')}>Working Out</Button>
                    <Button onClick={() =>setInterests('yoga')}>Yoga</Button>
                    <Button onClick={() =>setInterests('hiking')}>Hiking</Button>
                    <Button onClick={() =>setInterests('cycling')}>Biking/Cycling</Button>
                    <Button onClick={() =>setInterests('sports')}>Sports</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={() =>setInterests('gardening')}>Gardening</Button>
                    <Button onClick={() =>setInterests('crafting')}>Crafting</Button>
                    <Button onClick={() =>setInterests('sewing')}>Sewing</Button>
                    <Button onClick={() =>setInterests('shopping')}>Shopping</Button>
                    <Button onClick={() =>setInterests('volunteering')}>Volunteering</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={() =>setInterests('cars')}>Cars</Button>
                    <Button onClick={() =>setInterests('clubbing')}>Going Out/NightClubs</Button>
                    <Button onClick={() =>setInterests('roadtrips')}>Roap Trips</Button>
                    <Button onClick={() =>setInterests('winetasting')}>Wine Tasting</Button>
                    <Button onClick={() =>setInterests('gambling')}>Gambling</Button>
                </ButtonGroup>
                <Button variant="secondary" onClick={handleFormSubmit}>Save</Button>
            </div>
        </div>
            
    )
}

export default Createprofile2;