import {useState, useEffect} from 'react';
import API from "../utils/API";

const getUserProfile = (username) => {
    console.log(username)
    const [profile, setProfile] = useState({
        avatar: "",
        username: "",
        location: "",
        gender: "",
        politics: "",
        children: "",
        drink: "",
        smoke: "",
        cannabis: "",
        age: "",
        sign: "",
        interests: []
      })
    const [filters, setFilters] = useState({
        distance: 50,
        gender: "",
        politics: "",
        ageRange: [18, 68],
        children: "",
        drink: "",
        smoke: "",
        cannabis: ""
    })


        useEffect (() => {
        API.findProfileByName(username)
        .then((res) => {
        console.log(res.data[0].filterBy)
        const filt = res.data[0].filterBy[0]
                const filterObj = {
                    distance: filt.distance,
                    gender: filt.gender,
                    politics: filt.politics,
                    ageRange: filt.ageRange,
                    children: filt.children,
                    drink: filt.drink,
                    smoke: filt.smoke,
                    cannabis: filt.cannabis
                }
        setProfile(res.data[0])
        setFilters(filterObj)
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

    return {
        profile,
        filters
    }
}

export default getUserProfile;