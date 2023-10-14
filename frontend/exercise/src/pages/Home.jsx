import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import api from "../api/connect"

const Home = () => {

  const [hasAccount, setHasAccount] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [signedUpMsg, setsignedUpMsg] = useState("")

  const [personDetails, setPersonDetails] = useState({

    name:"",
    username:"",
    password:""
  })

  const navigate = useNavigate()

  function signUpUser(details){

    api.post('/user/signup', details)
    .then(response =>{
      let data = response.data

      if (data.message === "User registered successfully"){
        setsignedUpMsg("User registered successfully")
        setHasAccount(!hasAccount)
      } else{
        console.log("Error signing up")
      }
    }).catch(error =>{
      console.log(error)
    })
  }

  function signInUser(details){

    api.post('/user/login', details)
    .then(response =>{
      let data = response.data

      if (data.token){
        
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

        navigate("/blogs")

      } else{
        setErrorMsg("Incorrect username or password")
      }
    }).catch(error =>{
      setErrorMsg("Error signing in. Please try again")
      console.log(error)
    })
  }

  return (
    
    <>
    
      <h1>Welcome to Social Finance Club</h1>

    {!hasAccount && 
    
    <>
      <h3>Sign Up</h3>

      <form onSubmit={e=>{

        e.preventDefault()
        signUpUser(personDetails)

        //reset
        setPersonDetails({

          name:"",
          username:"",
          password:""
        })


      }}>
        <input type="text"
        value={personDetails.name}
        onChange={e=>{
          setPersonDetails(previous =>{
            return {...previous, name: e.target.value}
          })
        }} 
        placeholder='Name'
        required
        />

        <input type="text"
          value={personDetails.username}
          onChange={e=>{
            setPersonDetails(previous =>{
              return {...previous, username: e.target.value}
            })
          }} 
          placeholder='Username'
          required
        />

      <input type="password"
          value={personDetails.password}
          onChange={e=>{
            setPersonDetails(previous =>{
              return {...previous, password: e.target.value}
            })
          }} 
          placeholder='Password'
          required
        />

      <button>Sign Up</button>

      </form>

      <h4>Already have an Account? <button onClick={e=> setHasAccount(!hasAccount)}>Click Here</button></h4>
    </>
     
    }


{hasAccount && 
    
    <>

    {signedUpMsg && <p style={{color:"green"}}>{signedUpMsg}</p>}

    {errorMsg && <p style={{color:"red"}}>{errorMsg}</p>}

      <h3>Login</h3>

      <form onSubmit={e=>{

          e.preventDefault()
          signInUser(personDetails)

          //reset
          setPersonDetails({

            name:"",
            username:"",
            password:""
          })


          }}>

        <input type="text"
          value={personDetails.username}
          onChange={e=>{
            setPersonDetails(previous =>{
              return {...previous, username: e.target.value}
            })
          }} 
          placeholder='Username'
          required
        />

      <input type="password"
          value={personDetails.password}
          onChange={e=>{
            setPersonDetails(previous =>{
              return {...previous, password: e.target.value}
            })
          }} 
          placeholder='Password'
          required
        />

      <button>Login</button>

      </form>

      <h4>Don't have an Account? <button onClick={e=> setHasAccount(!hasAccount)}>Sign Up</button></h4>
    </>
     
    }
    
    </>


  )
}

export default Home