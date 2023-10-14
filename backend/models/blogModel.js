const {DataTypes} = require("sequelize")
const {connectToDB} = require("./conn");
const User = require("./userModel");

const Blog = connectToDB.define("blog", {

    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    title:{
        type: DataTypes.STRING(100),
        allowNull: false
    },

    content:{
        type: DataTypes.STRING,
        allowNull: false
    },

    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: User,
            key: "id"
        }
    },

},{
    timestamps:false
})


Blog.belongsTo(User, {
    foreignKey:"userId"
})

User.hasMany(Blog, {
    foreignKey:"userId"
} )



module.exports = Blog;