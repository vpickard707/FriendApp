import React, { useEffect, useState } from 'react';
import API from "../utils/API";
import AuthService from "../services/authService";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Createprofile3 (){
const currentUser = AuthService.getCurrentUser();
const [interestList, setInterestList] = useState([]);

useEffect(() => {
    
    API.getInterests()
        .then(res => {
            setInterestList(res.data)
            })
        .catch(err => { 
            if (err.response) { 
            console.log('error with response')
            } else if (err.request) { 
                console.log('error with request') 
            } else { 
                console.log('um, sh*ts really broken') 
            } });
    
}, [])

return (
    <div className="container">
            <div className="profileCard card">
                <h1>Pick how you'd like to filter your friends:</h1>
                <h4>Distance:</h4>
                <input id="typeinp" type="range" min="0" max="50" step="5"/>
                <h4>Gender:</h4>
                <Form name="gender">
                    <Form.Check inline type="checkbox" label={'Male'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Female'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={ 'Non-Binary'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={ 'Transgender'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={ 'Intersex' } />
                    <Form.Check inline type="checkbox" variant="secondary" label={ 'No Preference'} />
                </Form>
                <h4>Political Affiliation:</h4>
                <Form name="politics">
                    <Form.Check inline type="checkbox" variant="secondary" label={'Conservative'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Moderate'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Liberal'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'No Affliation'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'No Preference'} />
                </Form>
                <h4>Children:</h4>
                <Form name="children">
                    <Form.Check inline type="checkbox" variant="secondary" label={'Has Children'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'No Children'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'No Preference'} />
                </Form>
                <h4>Drinks:</h4>
                <Form name="drink">
                    <Form.Check inline type="checkbox" variant="secondary" label={'Regularly'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Socially'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Occaionally'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Never'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'No Preference'} />
                </Form>
                <h4>Smokes:</h4>
                <Form name="smoke">
                    <Form.Check inline type="checkbox" variant="secondary" label={'Regularly'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Socially'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Occaionally'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Never'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'No Preference'} />
                </Form>
                <h4>Uses cannabis:</h4>
                <Form name="cannabis">
                    <Form.Check inline type="checkbox" variant="secondary" label={'Regularly'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Socially'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Occasionally'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'Never'} />
                    <Form.Check inline type="checkbox" variant="secondary" label={'No Preference'} />
                </Form>
                <h4>Age Range:</h4>          
                <form>
                    <div data-role="rangeslider">
                        <label for="range-1a">Rangeslider:</label>
                        <input type="range" name="range-1a" id="range-1a" min="18" max="65" value="25" data-popup-enabled="true" data-show-value="true" />
                        <label for="range-1b">Rangeslider:</label>
                        <input type="range" name="range-1b" id="range-1b" min="18" max="65" value="45" data-popup-enabled="true" data-show-value="true" />
                    </div>
                    <Form.Check inline type="checkbox" variant="secondary" label={'No Preference'} />
                </form>
                
                <h4>Sign:</h4>
                 <Form name="sign">
                    <Form.Check inline type="checkbox" variant="secondary" label='Aquarius' />
                    <Form.Check inline type="checkbox" variant="secondary" label='Pisces'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='Aries'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='Taurus'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='Gemini'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='Cancer'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='Leo' />
                    <Form.Check inline type="checkbox" variant="secondary" label='Virgo'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='Libra' />
                    <Form.Check inline type="checkbox" variant="secondary" label='Scorpio'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='Sagittarius'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='Capricorn'  />
                    <Form.Check inline type="checkbox" variant="secondary" label='No Preference'  />
                 </Form>
                <h4>Interests:</h4>
                <Form>
                    <div className="mb-3">
                    {interestList.map((item) =>(
                        <Form.Check inline key={item._id} className="interests" label={item.interest} type="checkbox" id={item.interest} data-id={item._id} />
                    ))}
                    </div>
                </Form>

                <Button variant="secondary" >Save</Button>
            </div>
        </div>
)
}

export default Createprofile3;