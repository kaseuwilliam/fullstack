const Users = require("../models/userModel")

const usersData = [

    {
        name:"Gina",
        username:"gina",
        password: "1234"
    },

    {
        name:"Jeff M",
        username:"jeff",
        password: "12345"
    },
    
    {
        name:"William Kaseu",
        username:"william",
        password: "1234"
    },
    
]


async function seedUsers(){


    try {

        await Users.bulkCreate(usersData)
        console.log("The user data has been seeded successfully")
        
    } catch (error) {
        
        console.error("Error seeding user data: ", error)
    }

}

module.exports = {seedUsers}