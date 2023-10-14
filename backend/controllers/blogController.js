const Blog = require("../models/blogModel")

function getAllBlogs(req, res){

    Blog.findAll()
    .then(response =>{
        res.status(200).json(response)
    })
    .catch (error =>{
        res.status(500).json({message:error})
    })

}

function getBlogById(req, res){

    Blog.findAll({
        where:{
            userId: req.params.id
        }
    })
    .then(response =>{
        res.status(200).json(response)
    })
    .catch (error =>{
        res.status(500).json({message:error})
    })

}


module.exports = {getAllBlogs, getBlogById}