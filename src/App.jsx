
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import UsersForm from './components/UsersForm'

function App() {
  const baseURL = "https://users-crud1.herokuapp.com"

  const [users, setUsers] = useState()
  const [updateInfo, setupdateInfo] = useState()
  const [disabledForm, setDisabledForm] = useState(true)


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
// Funcion para editar un usuario existente
  const updateUsers = (id, data) =>  {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
    .then(res=> {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err=> console.log(err))
  }
  
  const handleOpenForm =() =>{
    setDisabledForm(false)
  }

  return (
    <div className="App">
      <div className='app__container-title'>
      <h1 className='app__title'>CRUD App</h1>
      <button onClick={handleOpenForm} className='app__btn'>+ User</button>
      </div>

      <div className={`form__container ${disabledForm && "disable__form"}` }>
      <UsersForm 
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUsers={updateUsers}
        setupdateInfo={setupdateInfo}
        setDisabledForm={setDisabledForm}
      />
      </div>

      <div className='cards__container'>
      {
        users?.map( user =>(
          <UserCard 
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setupdateInfo={setupdateInfo}
          setDisabledForm={setDisabledForm}
          />
        ))
      }
      </div>
      

      
    </div>
  )
}

export default App
