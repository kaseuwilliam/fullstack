const {Sequelize} = require("sequelize")

const connectToDB = new Sequelize("social","postgres", "Password1234", {
    host:"localhost",
    dialect:"postgres"
})

function testConnection(){

    connectToDB.authenticate()
    .then(response =>{
        console.log("The connection worked")
    })
    .catch( error =>{
        console.log(error)
    })
}

testConnection()

module.exports = {connectToDB, testConnection}