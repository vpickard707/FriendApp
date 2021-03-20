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



function Createprofile3 (props){
const currentUser = AuthService.getCurrentUser();
const [interestList, setInterestList] = useState([]);
const [distance, setDistance] = useState(10)
const [gender, setGender] = useState([]);
const [politics, setPolitics] = useState([]);
const [children, setChildren] = useState([]);
const [drink, setDrink] = useState([]);
const [smoke, setSmoke] = useState([]);
const [cannabis, setCannabis] = useState([]);
const [minage, setMinAge] = useState(25);
const [maxage, setMaxAge] = useState(45);
const [sign, setSign] = useState();

const handleDistanceChange = (e) => {
    console.log(e)
    console.log(e.target)
    setDistance(e.target.value)
}
const handleGenderChange = (val) => setGender(val);
const handlePoliticsChange = (val) => setPolitics(val);
const handleChildrenChange = (val) => setChildren(val);
const handleDrinkChange = (val) => setDrink(val);
const handleSmokeChange = (val) => setSmoke(val);
const handleCannabisChange = (val) => setCannabis(val);
const handleMinAgeChange = (val) => setMinAge(val);
const handleMaxAgeChange = (val) => setMaxAge(val);
const handleSignChange = (val) => setSign(val);

let selected = []
const politicsArray = document.getElementsByClassName('politics')
const genderArray = document.getElementsByClassName('gender')


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

function findSelected (array) {
    selected = []
    for (var i = 0; i < array.length; i ++){
        if (array[i].children[0].children[0].checked === true){
            selected.push(array[i].innerText)
        }
    }
}

function updateState () {
    return new Promise (() => {
        findSelected(politicsArray)
        setPolitics(selected)
        
        findSelected(genderArray)
        setGender(selected)
    }) 
}

async function setData (){
    const result = await updateState()
    console.log(result)
}

async function handleFormSubmit(e){
    e.preventDefault()
    
    setData.then(() => {
       const Object = { filterBy: [{
            distance: distance,
            gender: gender,
            politics: politics,
            minAge: minage,
            maxAge: maxage,
            children: children, 
            drink: drink, 
            smoke: smoke, 
            cannabis: cannabis
        }]
        }

    API.editProfileByName(Object, currentUser.username)
    .then(res => {
        console.log(res.data)
        // props.history.push("/profile");
        // window.location.reload()
        })
    .catch(err => { 
        if (err.response) { 
          console.log('error with response')
        } else if (err.request) { 
            console.log('error with request') 
        } else { 
            console.log('um, sh*ts really broken') 
        } })
    });
}

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
        console.log(event)
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
                    <Form.Check inline type="checkbox" className="gender" variant="secondary" label={'Male'} />
                    <Form.Check inline type="checkbox" className="gender" variant="secondary" label={'Female'} data-id={'Female'} />
                    <Form.Check inline type="checkbox" className="gender" variant="secondary" label={ 'Non-Binary'} data-id={ 'Non-Binary'} />
                    <Form.Check inline type="checkbox" className="gender" variant="secondary" label={ 'Transgender'} data-id={ 'Transgender'}/>
                    <Form.Check inline type="checkbox" className="gender" variant="secondary" label={ 'Intersex' } data-id={ 'Intersex' } />
                    <Form.Check inline type="checkbox" className="gender" variant="secondary" label={ 'No Preference'} data-id={ 'No Preference'} />
                </Form>
                <h4>Political Affiliation:</h4>
                <Form name="politics">
                    <Form.Check inline type="checkbox" className="politics" variant="secondary" label={'Conservative'} />
                    <Form.Check inline type="checkbox" className="politics" variant="secondary" label={'Moderate'} />
                    <Form.Check inline type="checkbox" className="politics" variant="secondary" label={'Liberal'} />
                    <Form.Check inline type="checkbox" className="politics" variant="secondary" label={'No Affliation'} />
                    <Form.Check inline type="checkbox" className="politics" variant="secondary" label={'No Preference'} />
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

                <Button variant="secondary" onClick={handleFormSubmit}>Save</Button>
            </div>
        </div>
)
}

export default Createprofile3;