import React, { useState, useEffect } from 'react';
import haversine from 'haversine-distance';




const Geolocation = () => {
    const [location, setLocation] = useState({ 
        loaded: false,
        coordinates: {lat: "", lng: "" }
    });

    
    const a = { latitude: 37.8136, longitude: 144.9631 }
    const b = { latitude: 33.8650, longitude: 151.2094 }
     
    console.log(haversine(a, b)) // 714504.18 (in meters)

    const onSuccess = (location) => {
        
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };
    
    const onError = error => {
        setLocation({
            loaded: true,
            error,
        });
    }

    
    useEffect(() => {
        
        if(!("geolocation" in navigator)) {
            
            onError({
                code: 0,
                message: "Geolocation not supported",
            });
        }
        
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);
    
    return location;
}
export default Geolocation
