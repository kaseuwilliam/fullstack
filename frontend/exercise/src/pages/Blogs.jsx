import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../api/connect"

const Blogs = () => {

  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    getBlogs()
  }, [])

  function getBlogs(){

    api.get("/blog")
    .then(response =>{
      setBlogs(response.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  function logoutUser(){
    // delete the authorization token 
    delete api.defaults.headers.common["Authorization"]

    navigate('/')
  }

  return (
    <>

    {blogs.length>0 ? <button onClick={logoutUser}>Logout</button>: <h3>You are not logged in. Please <button onClick={e=>navigate('/')}>Click Here</button> to go back to the login page</h3>}

    {blogs.map(blog =>{

      return (
        <>
        
        <h4>{blog.title}</h4>
        <h5>{blog.userId}</h5>
        <p>{blog.content}</p>
        <hr />
        
        </>
      )
    })}
    
    </>
  )
}

export default Blogs