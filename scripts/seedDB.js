var seeder = require('mongoose-seed')


const db = "mongodb://localhost/bffl_db"

seeder.connect(db, () =>{
    seeder.loadModels(["./models/interests", "./models/profile"])
    seeder.clearModels(['Interests', 'Profile'], () => {
        seeder.populateModels(populateIntersts, (err, success) => {
        if (err) {
            return console.log("seed err", err)
        }
        console.log("Database seeded successfully", success)
        seeder.disconnect()
        })
    })
    

});

const populateIntersts = [{
        "model": "Interests",
        "documents": [
            {
                "interest": "Books"
            },
            {
                "interest": "Watch Parties/TV Shows"
            },
            {
                "interest": "Video Games"
            },
            {
                "interest": "Board Games"
            },
            {
                "interest": "Music"
            },
            {
                "interest": "Working Out"
            },
            {
                "interest": "Yoga"
            },
            {
                "interest": "Hiking"
            },
            {
                "interest": "Biking/Cycling"
            },
            {
                "interest": "Sports"
            },
            {
                "interest": "Gardening"
            },
            {
                "interest": "Crafting/DIY Building"
            },
            {
                "interest": "Sewing"
            },
            {
                "interest": "Shopping"
            },
            {
                "interest": "Volunteering"
            },
            {
                "interest": "Cars"
            },
            {
                "interest": "Going Out/Nightclubs"
            },
            {
                "interest": "Road Trips"
            },
            {
                "interest": "Wine Tasting"
            },
            {
                "interest": "Gambling"
            }
        ]
},
{
    "model": "Profile",
    "documents": [
        {
        "username":"Steve",
        "avatar": "https://avatars.dicebear.com/api/avataaars/Ronald%20Frank.svg",
        "gender": "Non-binary", 
       "politics": "No Affiliation", 
        "children": "Has Children", 
        "drink": "Never", 
        "smoke": "Never", 
        "cannabis": "Never", 
        "age": "35",
        "sign":"Aries",
        "interests": [  {"interest": "Yoga ",
                        "_id": "605384df83a432644d843ef9"}, 
                        {"interest":"Wine",
                        "_id": "605384df83a432644d843ef9"}
                     ],
        "location": {
            "latitude": "59.3293371",
            "longitude": "13.4877472"
        }
    },
    {
        "username":"Max",
        "avatar": "https://avatars.dicebear.com/api/avataaars/Stanley%20Newman.svg",
        "gender": "Male", 
       "politics": "Conservative", 
        "children": "No Children", 
        "drink": "Socially", 
        "smoke": "Never", 
        "cannabis": "Socially", 
        "age": "21",
        "sign":"Leo",
        "interests": [  {"interest": "Yoga ",
                        "_id": "605384df83a432644d843ef9"}, 
                        {"interest":"Wine",
                        "_id": "605384df83a432644d843ef9"}
                     ],
        "location": {
            "latitude": "59.3293371",
            "longitude": "13.4877472"
        }
    },
    {
        "username":"Noa",
        "avatar": "https://avatars.dicebear.com/api/avataaars/Grace%20Singeton.svg?top[]=longHair&hairColor[]=pastel&eyes[]=happy&eyebrow[]=default&mouth[]=twinkle&&clothesColor[]=heather",
        "gender": "Female", 
       "politics": "Liberal", 
        "children": "Has Children", 
        "drink": "Regularly", 
        "smoke": "Regularly", 
        "cannabis": "Regularly", 
        "age": "30",
        "sign":"Aries",
        "interests": [  {"interest": "Yoga ",
                        "_id": "605384df83a432644d843ef9"}, 
                        {"interest":"Wine",
                        "_id": "605384df83a432644d843ef9"}
                     ],
        "location": {
            "latitude": 6.1352,
            "longitude": 106.8133
        }
    },
    {
        "username":"Bananas",
        "avatar": "https://avatars.dicebear.com/api/avataaars/example.svg?&&&&&&",
        "gender": "Female", 
        "politics": "Moderate", 
        "children": "Has Children", 
        "drink": "Socially", 
        "smoke": "Never", 
        "cannabis": "Socially", 
        "age": "34",
        "sign":"Gemini",
        "interests": [  {"interest": "Yoga ",
                        "_id": "605384df83a432644d843ef9"}, 
                        {"interest":"Wine",
                        "_id": "605384df83a432644d843ef9"}
                     ],
        "location": {
            "latitude": 6.1754,
            "longitude": 106.8272
        }
    },
    {
        "username":"Muffins",
        "avatar": "https://avatars.dicebear.com/api/avataaars/example.svg?&&&&&&",
        "gender": "Transgender", 
        "politics": "Moderate", 
        "children": "No Children", 
        "drink": "Regularly", 
        "smoke": "Regularly", 
        "cannabis": "Never", 
        "age": "52",
        "sign":"Aries",
        "interests": [  {"interest": "Yoga ",
                        "_id": "605384df83a432644d843ef9"}, 
                        {"interest":"Wine",
                        "_id": "605384df83a432644d843ef9"}
                     ],
        "location": {
            "latitude": 59.3225525,
            "longitude": 13.4619422
        }
    },
    ]
}]

// const populateProfiles = [{
//     "model": "Profile",
//     "documents": [
//         {
//         "username":"Steve",
//         "image": "https://avatars.dicebear.com/api/avataaars/Ronald%20Frank.svg",
//         "gender": "Non-binary", 
//        "politics": "No Affiliation", 
//         "children": "Has Children", 
//         "drink": "Never", 
//         "smoke": "Never", 
//         "cannabis": "Never", 
//         "age": "35",
//         "sign":"Aries",
//         "interests": [  {"interest": "Yoga ",
//                         "_id": "605384df83a432644d843ef9"}, 
//                         {"interest":"Wine",
//                         "_id": "605384df83a432644d843ef9"}
//                      ],
//         "location": {
//             "latitude": "59.3293371",
//             "longitude": "13.4877472"
//         }
//     },
//     {
//         "username":"Max",
//         "image": "https://avatars.dicebear.com/api/avataaars/Stanley%20Newman.svg",
//         "gender": "Male", 
//        "politics": "Conservative", 
//         "children": "No Children", 
//         "drink": "Socially", 
//         "smoke": "Never", 
//         "cannabis": "Socially", 
//         "age": "21",
//         "sign":"Leo",
//         "interests": [  {"interest": "Yoga ",
//                         "_id": "605384df83a432644d843ef9"}, 
//                         {"interest":"Wine",
//                         "_id": "605384df83a432644d843ef9"}
//                      ],
//         "location": {
//             "latitude": "59.3293371",
//             "longitude": "13.4877472"
//         }
//     },
//     {
//         "username":"Noa",
//         "image": "https://avatars.dicebear.com/api/avataaars/Grace%20Singeton.svg?top[]=longHair&hairColor[]=pastel&eyes[]=happy&eyebrow[]=default&mouth[]=twinkle&&clothesColor[]=heather",
//         "gender": "Female", 
//        "politics": "Liberal", 
//         "children": "Has Children", 
//         "drink": "Regularly", 
//         "smoke": "Regularly", 
//         "cannabis": "Regularly", 
//         "age": "30",
//         "sign":"Aries",
//         "interests": [  {"interest": "Yoga ",
//                         "_id": "605384df83a432644d843ef9"}, 
//                         {"interest":"Wine",
//                         "_id": "605384df83a432644d843ef9"}
//                      ],
//         "location": {
//             "latitude": 6.1352,
//             "longitude": 106.8133
//         }
//     },
//     {
//         "username":"Bananas",
//         "image": "https://avatars.dicebear.com/api/avataaars/example.svg?&&&&&&",
//         "gender": "Female", 
//         "politics": "Moderate", 
//         "children": "Has Children", 
//         "drink": "Socially", 
//         "smoke": "Never", 
//         "cannabis": "Socially", 
//         "age": "34",
//         "sign":"Gemini",
//         "interests": [  {"interest": "Yoga ",
//                         "_id": "605384df83a432644d843ef9"}, 
//                         {"interest":"Wine",
//                         "_id": "605384df83a432644d843ef9"}
//                      ],
//         "location": {
//             "latitude": 6.1754,
//             "longitude": 106.8272
//         }
//     },
//     {
//         "username":"Muffins",
//         "image": "https://avatars.dicebear.com/api/avataaars/example.svg?&&&&&&",
//         "gender": "Transgender", 
//         "politics": "Moderate", 
//         "children": "No Children", 
//         "drink": "Regularly", 
//         "smoke": "Regularly", 
//         "cannabis": "Never", 
//         "age": "52",
//         "sign":"Aries",
//         "interests": [  {"interest": "Yoga ",
//                         "_id": "605384df83a432644d843ef9"}, 
//                         {"interest":"Wine",
//                         "_id": "605384df83a432644d843ef9"}
//                      ],
//         "location": {
//             "latitude": 59.3225525,
//             "longitude": 13.4619422
//         }
//     },
//     ]
// }]