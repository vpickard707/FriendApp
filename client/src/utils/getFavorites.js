import {useState, useEffect} from 'react';
import API from "../utils/API";
import AuthService from "../services/authService";

const getFavorites = () => {
    const currentUser = AuthService.getCurrentUser();
    const [favorites, setFavorites] = useState([])
    
    useEffect(() => {
        API.getFavoritesByName(currentUser.username)
            .then(item => {
                let array = []
                const results = item.data
                results.forEach((res) => array.push(res.faveUser))
                setFavorites(array)
            })
    }, [])

    return {
        favorites,
        setFavorites
    }
}

export default getFavorites;