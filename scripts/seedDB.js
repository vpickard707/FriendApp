var seeder = require('mongoose-seed')


const db = "mongodb://localhost/bffl_db"

seeder.connect(db, () =>{
    seeder.loadModels(["./models/interests"])
    seeder.clearModels('Interests', () => {
        seeder.populateModels(populateIntersts, (err, success) => {
        if (err) {
            return console.log("seed err", err)
        }
        console.log("Interests seeded successfully", success)
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
}]