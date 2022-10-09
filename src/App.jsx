
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import UsersForm from './components/UsersForm'

function App() {
  const baseURL = "https://users-crud1.herokuapp.com"

  const [users, setUsers] = useState()
  const [updateInfo, setupdateInfo] = useState()


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
  
// funcion para crear un nuevo usuario, (ver linea 17 de componente UsersForm)
  const createNewUser = data =>{
    const URL =`${baseURL}/users/`
    axios.post(URL,data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err=> console.log(err))
  }

// Funcion para eliminar un usuario(ver aplicacion en  linea 13 del componente UserCard)
  const deleteUser = id=>{
    const URL= `${baseURL}/users/${id}/`
    axios.delete(URL)
    .then(res=>{
      console.log(res)
      getAllUsers()
    })
    .catch(err=>console.log(err))  
  }

  const updateUsers = (id, data) =>  {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
    .then(res=> {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err=> console.log(err))
  }
  
  

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <UsersForm 
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUsers={updateUsers}
        setupdateInfo={setupdateInfo}
      />
      {
        users?.map( user =>(
          <UserCard 
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setupdateInfo={setupdateInfo}
          />
        ))
      }

      
    </div>
  )
}

export default App
