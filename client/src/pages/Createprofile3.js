import React, { useEffect, useState } from 'react';
import API from "../utils/API";
import AuthService from "../services/authService";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


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

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });
  
  function valuetext(value) {
    return `${value}`;
  }
  
    const classes = useStyles();
    const [ageRange, setAgeRange] = React.useState([18, 65]);
  
    const handleChange = (event, newValue) => {
      setAgeRange(newValue);
      console.log(ageRange)
    };

    const marks = [
        {
          value: 20,
          label: '20',
        },
        {
          value: 30,
          label: '30',
        },
        {
          value: 40,
          label: '40',
        },
        {
          value: 50,
          label: '50',
        },
        {
             value: 60,
            label: '60',
          },
      ];
return (
    <div className="container">
            <div className="profileCard card">
                <h1>Pick how you'd like to filter your friends:</h1>
                <h4>Distance:</h4>
                <input id="typeinp" type="range" min="0" max="50" step="5"/>
                <div className={classes.root}>
                    <Typography id="range-slider" gutterBottom>
                        Age Range:
                    </Typography>
                    <Slider
                        value={ageRange}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                        min={18}
                        max={66}
                        marks={marks}
                    />
                </div>
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