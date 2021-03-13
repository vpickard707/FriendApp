import React, { useEffect, useState } from 'react';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

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
const [user, setUser] = useState();

useEffect(()=>{
    setUser(`
gender: ${gender ? `${gender}` : 'na'},
politics: ${politics ? `${politics}` : 'na'},
children: ${children ? `${children}` : 'na'},
drink: ${drink ? `${drink}` : 'na'},
smoke: ${smoke ? `${smoke}` : 'na'},
cannabis: ${cannabis ? `${cannabis}` : 'na'},
age: ${age ? `${age}` : 'na'},
sign: ${sign ? `${sign}` : 'na'},
interest: ${interests ? `${interests}` : 'na'}

`)})

const saveUser = () => {
    console.log(user)
}
    return(
        <div className="container">
            <div className="profileCard card">
                <h1>Now let's find out more about you:</h1>
                <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option onChange={() => setGender('male')}>Male</option>
                            <option onChange={() => setGender('female')}>Female</option>
                            <option onChange={() => setGender('nonbinary')}>Non binary</option>
                            <option onChange={() => setGender('transgender')}>Transgender</option>
                            <option onChange={() => setGender('intersex')}>Intersex</option>
                            <option onChange={() => setGender('na')}>I prefer not to say</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Political Affliation:</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option onChange={() => setPolitics('republican')}>Republican</option>
                            <option onChange={() => setPolitics('independent')}>Independent</option>
                            <option onChange={() => setPolitics('democrat')}>Democrat</option>
                            <option onChange={() => setPolitics('noaffliation')}>No affliation</option>
                            <option onChange={() => setPolitics('na')}>I prefer not to say</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Do you have children:</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option onChange={() => setChildren('yes')}>Yes</option>
                            <option onChange={() => setChildren('no')}>No</option>
                            <option onChange={() => setChildren('na')}>I prefer not to say</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Do you drink:</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option onChange={() => setDrink('regularly')}>Regularly</option>
                            <option onChange={() => setDrink('socially')}>Socially</option>
                            <option onChange={() => setDrink('occaionally')}>Occasionally</option>
                            <option onChange={() => setDrink('never')}>Never</option>
                            <option onChange={() => setDrink('na')}>I prefer not to say</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Do you smoke:</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option onChange={() => setSmoke('regularly')}>Regularly</option>
                            <option onChange={() => setSmoke('socially')}>Socially</option>
                            <option onChange={() => setSmoke('occaionally')}>Occasionally</option>
                            <option onChange={() => setSmoke('never')}>Never</option>
                            <option onChange={() => setSmoke('na')}>I prefer not to say</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Do you use cannabis:</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option onChange={() => setCannabis('regularly')}>Regularly</option>
                            <option onChange={() => setCannabis('socially')}>Socially</option>
                            <option onChange={() => setCannabis('occaionally')}>Occasionally</option>
                            <option onChange={() => setCannabis('never')}>Never</option>
                            <option onChange={() => setCannabis('na')}>I prefer not to say</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>How old are you?:</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option onChange={() => setAge('18-20')}>18-20</option>
                            <option onChange={() => setAge('21-25')}>21-25</option>
                            <option onChange={() => setAge('26-30')}>26-30</option>
                            <option onChange={() => setAge('31-35')}>31-35</option>
                            <option onChange={() => setAge('36-40')}>36-40</option>
                            <option onChange={() => setAge('41-45')}>41-45</option>
                            <option onChange={() => setAge('46-50')}>46-50</option>
                            <option onChange={() => setAge('51-55')}>51-55</option>
                            <option onChange={() => setAge('56-60')}>56-60</option>
                            <option onChange={() => setAge('61-65')}>61-65</option>
                            <option onChange={() => setAge('66-70')}>66-70</option>
                            <option onChange={() => setAge('70+')}> over 70</option>
                            <option onChange={() => setAge('na')}>I prefer not to say</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>What is your sign?:</Form.Label>
                        <Form.Control as="select" size="lg" custom>
                            <option onChange={() => setSign('Aquarius')}>Aquarius</option>
                            <option onChange={() => setSign('Pisces')}>Pisces</option>
                            <option onChange={() => setSign('Aries')}>Aries</option>
                            <option onChange={() => setSign('Taurus')}>Taurus</option>
                            <option onChange={() => setSign('Gemini')}>Gemini</option>
                            <option onChange={() => setSign('Cancer')}>Cancer</option>
                            <option onChange={() => setSign('eo')}>Leo</option>
                            <option onChange={() => setSign('Virgo')}>Virgo</option>
                            <option onChange={() => setSign('Libra')}>Libra</option>
                            <option onChange={() => setSign('Scorpio')}>Scorpio</option>
                            <option onChange={() => setSign('Sagittarius')}>Sagittarius</option>
                            <option onChange={() => setSign('Capricorn')}>Capricorn</option>
                            <option onChange={() => setSign('na')}>I prefer not to say</option>
                        </Form.Control>
                </Form.Group>
                </Form>
                <h4>What activities are you looking to build a friendship on:</h4>
                <h5>Pick up to 5:</h5>
                <ButtonGroup>
                    <Button onChange={() =>setInterests('books')}>Books</Button>
                    <Button onChange={() =>setInterests('tv')}>TV Shows</Button>
                    <Button onChange={() =>setInterests('videogames')}>Video Games</Button>
                    <Button onChange={() =>setInterests('boardgames')}>Board Games</Button>
                    <Button onChange={() =>setInterests('music')}>Music</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onChange={() =>setInterests('workingout')}>Working Out</Button>
                    <Button onChange={() =>setInterests('yoga')}>Yoga</Button>
                    <Button onChange={() =>setInterests('hiking')}>Hiking</Button>
                    <Button onChange={() =>setInterests('cycling')}>Biking/Cycling</Button>
                    <Button onChange={() =>setInterests('sports')}>Sports</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onChange={() =>setInterests('gardening')}>Gardening</Button>
                    <Button onChange={() =>setInterests('crafting')}>Crafting</Button>
                    <Button onChange={() =>setInterests('sewing')}>Sewing</Button>
                    <Button onChange={() =>setInterests('shopping')}>Shopping</Button>
                    <Button onChange={() =>setInterests('volunteering')}>Volunteering</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onChange={() =>setInterests('cars')}>Cars</Button>
                    <Button onChange={() =>setInterests('clubbing')}>Going Out/NightClubs</Button>
                    <Button onChange={() =>setInterests('roadtrips')}>Roap Trips</Button>
                    <Button onChange={() =>setInterests('winetasting')}>Wine Tasting</Button>
                    <Button onChange={() =>setInterests('gambling')}>Gambling</Button>
                </ButtonGroup>
                <Button variant="secondary" onClick={saveUser}>Save</Button>
            </div>
        </div>
            
    )
}

export default Createprofile2;