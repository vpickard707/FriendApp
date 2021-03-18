import React, { useState } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../utils/API"
import ToggleButtonGroup from'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'


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

const handleGenderChange = (val) => setGender(val);
const handlePoliticsChange = (val) => setPolitics(val);
const handleChildrenChange = (val) => setChildren(val);
const handleDrinkChange = (val) => setDrink(val);
const handleSmokeChange = (val) => setSmoke(val);
const handleCannabisChange = (val) => setCannabis(val);
const handleAgeChange = (val) => setAge(val);
const handleSignChange = (val) => setSign(val);

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
                <ToggleButtonGroup type="radio" name="gender" defaultValue={'null'} onChange={handleGenderChange}>
                    <ToggleButton variant="secondary" value={'Male'}>Male</ToggleButton>
                    <ToggleButton variant="secondary" value={'Female'}>Female</ToggleButton>
                    <ToggleButton variant="secondary" value={ 'Non-Binary'}>Non-binary</ToggleButton>
                    <ToggleButton variant="secondary" value={ 'Transgender'}>Transgender</ToggleButton>
                    <ToggleButton variant="secondary" value={ 'Intersex' }>Intersex</ToggleButton>
                    <ToggleButton variant="secondary" value={ 'null'}>I prefer not to say</ToggleButton>
                </ToggleButtonGroup>
                <h4>Political Affiliation:</h4>
                <ToggleButtonGroup type="radio" name="politics" defaultValue={'null'} onChange={handlePoliticsChange}>
                    <ToggleButton variant="secondary" value={'Conservative'}>Conservative</ToggleButton>
                    <ToggleButton variant="secondary" value={'Moderate'}>Moderate</ToggleButton>
                    <ToggleButton variant="secondary" value={'Liberal'}>Liberal</ToggleButton>
                    <ToggleButton variant="secondary" value={'No Affliation'}>No affliation</ToggleButton>
                    <ToggleButton variant="secondary" value={'null'}>I prefer not to say</ToggleButton>
                </ToggleButtonGroup>
                <h4>Do you have children:</h4>
                <ToggleButtonGroup type="radio" name="children" defaultValue={'null'} onChange={handleChildrenChange}>
                    <ToggleButton variant="secondary" value={'Has Children'}>Yes</ToggleButton>
                    <ToggleButton variant="secondary" value={'No Children'}>No</ToggleButton>
                    <ToggleButton variant="secondary" value={'null'}>I prefer not to say</ToggleButton>
                </ToggleButtonGroup>
                <h4>Do you drink:</h4>
                <ToggleButtonGroup type="radio" name="drink" defaultValue={'null'} onChange={handleDrinkChange}>
                    <ToggleButton variant="secondary" value={'Regularly'}>Regularly</ToggleButton>
                    <ToggleButton variant="secondary" value={'Socially'}>Socially</ToggleButton>
                    <ToggleButton variant="secondary" value={'Occaionally'}>Occasionally</ToggleButton>
                    <ToggleButton variant="secondary" value={'Never'}>Never</ToggleButton>
                    <ToggleButton variant="secondary" value={'null'}>I prefer not to say</ToggleButton>
                </ToggleButtonGroup>
                <h4>Do you smoke:</h4>
                <ToggleButtonGroup type="radio" name="smoke" defaultValue={'null'} onChange={handleSmokeChange}>
                    <ToggleButton variant="secondary" value={'Regularly'}>Regularly</ToggleButton>
                    <ToggleButton variant="secondary" value={'Socially'}>Socially</ToggleButton>
                    <ToggleButton variant="secondary" value={'Occaionally'}>Occasionally</ToggleButton>
                    <ToggleButton variant="secondary" value={'Never'}>Never</ToggleButton>
                    <ToggleButton variant="secondary" value={'null'}>I prefer not to say</ToggleButton>
                </ToggleButtonGroup>
                <h4>Do you use cannabis:</h4>
                <ToggleButtonGroup type="radio" name="cannabis" defaultValue={'null'} onChange={handleCannabisChange}>
                    <ToggleButton variant="secondary" value={'Regularly'}>Regularly</ToggleButton>
                    <ToggleButton variant="secondary" value={'Socially'}>Socially</ToggleButton>
                    <ToggleButton variant="secondary" value={'Occasionally'}>Occasionally</ToggleButton>
                    <ToggleButton variant="secondary" value={'Never'}>Never</ToggleButton>
                    <ToggleButton variant="secondary" value={'null'}>I prefer not to say</ToggleButton>
                </ToggleButtonGroup>
                <h4>How old are you?:</h4>          
                <ToggleButtonGroup type="radio" name="age" defaultValue={'null'} onChange={handleAgeChange}>
                    <ToggleButton variant="secondary" value={'18-20'}>18-20</ToggleButton>
                    <ToggleButton variant="secondary" value={'26-30'}>26-30</ToggleButton>
                    <ToggleButton variant="secondary" value={'21-25'}>21-25</ToggleButton>
                    <ToggleButton variant="secondary" value={'31-35'}>31-35</ToggleButton>
                    <ToggleButton variant="secondary" value={'36-40'}>36-40</ToggleButton>
                    <ToggleButton variant="secondary" value={'41-45'}>41-45</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup type="radio" name="age" defaultValue={'null'} onChange={handleAgeChange}>
                    <ToggleButton variant="secondary" value={'46-50'}>46-50</ToggleButton>
                    <ToggleButton variant="secondary" value={'51-55'}>51-55</ToggleButton>
                    <ToggleButton variant="secondary" value={'56-60'}>56-60</ToggleButton>
                    <ToggleButton variant="secondary" value={'61-65'}>61-65</ToggleButton>
                    <ToggleButton variant="secondary" value={'65+'}> over 65</ToggleButton>
                    <ToggleButton variant="secondary" value={'null'}>I prefer not to say</ToggleButton>
                </ToggleButtonGroup>
                <h4>What's your sign?:</h4>
                 <ToggleButtonGroup type="radio" name="sign" defaultValue={'null'} onChange={handleSignChange}>
                    <ToggleButton variant="secondary" value={'Aquarius'}>Aquarius</ToggleButton>
                    <ToggleButton variant="secondary" value={'Pisces'}>Pisces</ToggleButton>
                    <ToggleButton variant="secondary" value={'Aries'}>Aries</ToggleButton>
                    <ToggleButton variant="secondary" value={'Taurus'}>Taurus</ToggleButton>
                    <ToggleButton variant="secondary" value={'Gemini'}>Gemini</ToggleButton>
                    <ToggleButton variant="secondary" value={'Cancer'}>Cancer</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup type="radio" name="sign" defaultValue={'null'} onChange={handleSignChange}>
                    <ToggleButton variant="secondary" value={'Leo'}>Leo</ToggleButton>
                    <ToggleButton variant="secondary" value={'Virgo'}>Virgo</ToggleButton>
                    <ToggleButton variant="secondary" value={'Libra'}>Libra</ToggleButton>
                    <ToggleButton variant="secondary" value={'Scorpio'}>Scorpio</ToggleButton>
                    <ToggleButton variant="secondary" value={'Sagittarius'}>Sagittarius</ToggleButton>
                    <ToggleButton variant="secondary" value={'Capricorn'}>Capricorn</ToggleButton>
                    <ToggleButton variant="secondary" value={'null'}>I prefer not to say</ToggleButton>
                 </ToggleButtonGroup>
                <h4>What activities are you looking to build a friendship on:</h4>
                <ToggleButtonGroup type="checkbox" defaultValue={['Books','Watching TV']}> 
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Books ">Books</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Watching TV ">TV Show</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Video games ">Video Games</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Boardgames ">Board Games</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Music ">Music</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup type="checkbox" defaultValue={['Books','Watching TV']}>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Working out ">Working Out</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Yoga ">Yoga</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Hiking ">Hiking</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Biking ">Biking/Cycling</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Sports ">Sports</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup type="checkbox" defaultValue={['Books','Watching TV']}>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Gardening ">Gardening</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Crafting ">Crafting</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Sewing ">Sewing</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Shopping ">Shopping</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Volunteering ">Volunteering</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup type="checkbox" defaultValue={['Books','Watching TV']}>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Cars ">Cars</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Going out ">Going Out/NightClubs</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Road trips ">Roap Trips</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Wine tasting ">Wine Tasting</ToggleButton>
                    <ToggleButton variant="secondary" onClick={ interestsClick } value="Gambling ">Gambling</ToggleButton>
                </ToggleButtonGroup>
                <br></br>
                <Button variant="secondary" onClick={handleFormSubmit}>Save</Button>
            </div>
        </div>
            
    )
}

export default Createprofile2;