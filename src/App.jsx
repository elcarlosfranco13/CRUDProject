
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'

function App() {
  const baseURL = "https://users-crud1.herokuapp.com"

  const [users, setUsers] = useState()

// getAllusers nos trae la informacion
//  desde la API de todos los usuarios en el objeto
  const getAllUsers = () =>{
    const URL= `${baseURL}/users/`
    axios.get(URL)
    .then(res=> (setUsers(res.data)))
    .catch(err => console.log(err))

  }

  useEffect (() => {
    getAllUsers()

  },[])
  

  const createNewUser = data =>{
    const URL =`${baseURL}/users/`
    axios.post(URL,data)
    .then(res => console.log(res.data))
    .catch(err=> console.log(err))

  }
  
  console.log(users)


  return (
    <div className="App">
      <h1>CRUD App</h1>
      <UsersForm />
      
    </div>
  )
}

export default App
