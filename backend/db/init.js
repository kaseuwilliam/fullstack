const Users = require("../models/userModel")
const Blogs = require("../models/blogModel")


async function initializeDB(){

    try {

        await Blogs.drop()
        await Users.drop()
        await Users.sync()
        await Blogs.sync()

        console.log("The tables were created successfully")
        
    } catch (error) {

        console.error("The tables were NOT created", error)
        
    }
}

initializeDB()