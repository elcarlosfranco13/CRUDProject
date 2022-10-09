import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
const defaultValues={
  email:"",
  password:"",
  first_name:"",
  last_name:"",
  birthday:""
}

const UsersForm = ({createNewUser,updateInfo,updateUsers,setupdateInfo}) => {


  const {handleSubmit,reset,register}= useForm()

  useEffect(()=>{
    if(updateInfo){
      reset(updateInfo)
    }
  },[updateInfo])

  const submit = (data) =>{

    if(updateInfo){
      updateUsers(updateInfo.id, data)
      setupdateInfo()
      
    } else {
      createNewUser(data)
    }
    reset(defaultValues)
  }

  


  return (
      <form onSubmit={handleSubmit(submit)}>
        <h2>{updateInfo ? "Update user" : "Create user"}</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register("password")}/>
        </div>
        <div>
          <label htmlFor="first_name">Name</label>
          <input type="text" id='first_name' {...register("first_name")}/>
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input type="text" id='last_name' {...register("last_name")}/>
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id='birthday' {...register("birthday")}/>
        </div>
        <button>{updateInfo ? "Edit user" : "Create new user"}</button>
      </form>
  )
}

export default UsersForm