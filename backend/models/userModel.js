const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn")

const User = connectToDB.define("user", {

    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    },

    username:{
        type: DataTypes.STRING(100),
        allowNull: false
    },

    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },

},{
    timestamps:false
})

module.exports = User;