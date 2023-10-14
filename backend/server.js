require("dotenv").config()

const express = require("express")
const cors = require("cors")
const app = express()
const port = 3001

const blogRoutes = require("./routers/blogRoutes")
const userRoutes = require("./routers/userRoutes")
const authenticateToken = require("./middleware/authMiddleware")

app.use(cors())
app.use(express.json())


app.get("/", (req,res)=>{

    res.status(200).json({message:"This is the home route"})
})

app.use('/blog',authenticateToken, blogRoutes)
app.use('/user', userRoutes)


app.listen(port, ()=>{
    console.log("The server is working")
})