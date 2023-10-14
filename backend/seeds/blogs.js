const Blog = require("../models/blogModel")

const blogsData = [

    {
        title:"Halloween",
        content:"I am having fun time",
        userId: 1
    },

    {
        title:"It is snowing in Chicago",
        content:"This is bad weather",
        userId: 2
    },

    {
        title:"Last day of class",
        content:"This was fun",
        userId: 3
    },

    {
        title:"Sunny in Texas",
        content:"weather is really nice in Texas",
        userId: 3
    }
]


async function seedBlogs(){


    try {

        await Blog.bulkCreate(blogsData)
        console.log("The blog data has been seeded successfully")
        
    } catch (error) {
        
        console.error("Error seeding blog data: ", error)
    }

}

module.exports = {seedBlogs}