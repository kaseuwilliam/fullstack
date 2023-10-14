const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


function getAllUsers(req, res){

    User.findAll()
    .then(response =>{
        res.status(200).json(response)
    })
    .catch (error =>{
        res.status(500).json({message:error})
    })

}

function addNewUser(req, res){

    const {name, username, password} = req.body

    //hash the password
    bcrypt.hash(password, 10, (err, hashedPassword)=>{

        if(err){
            return res.status(500).json({message:"Error hashing the password"})
        }

        const newUserWithHashedPassword = {
            name:name,
            username: username,
            password: hashedPassword
        }

        //save the user into the database

        User.create(newUserWithHashedPassword)
        .then(response =>{
            res.status(201).json({message:"User registered successfully"})
        })
        .catch( error =>{
            res.status(500).json({message:error})
        })

    })


}

function loginUser(req, res){

    const {username, password} = req.body

    // fetch the user from the database

    User.findOne({where:{ username:username } })
    .then( user =>{

        if (!user){
            //user not found
            return res.status(400).json({message:"Username not found"})
        }

        // compare the passwords and make sure they match

        bcrypt.compare(password, user.password, (err, isMatch)=>{

            if(err){
                return res.status(500).json({message:"Error during authentication"})
            }


            if(!isMatch){
                //passwords do not match
                return res.status(400).json({message:"Passwords do not match"})
            }


            // Generate a JWT token

            const token = jwt.sign(
                {id:user.id, username:user.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:"1h"}
            )

            res.status(200).json({token:token})

        })



    })
    .catch(error =>{

        res.status(500).json({message:error})
    })

}

module.exports = {getAllUsers, addNewUser, loginUser}