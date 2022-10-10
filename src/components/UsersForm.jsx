import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/usersForm.css"
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
      <form className='form' onSubmit={handleSubmit(submit)}>
        <i className="form__close fa-regular fa-circle-xmark"></i>
        <h2 className='form__title'>{updateInfo ? "Update user" : "New user"}</h2>
        <div className='form__div'>
          <label className='form__label' htmlFor="email">Email</label>
          <input className='form__input'placeholder='name@example.com' type="text" id='email' {...register("email")} />
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="password">Password</label>
          <input className='form__input'placeholder='' type="password" id='password' {...register("password")}/>
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="first_name">Name</label>
          <input className='form__input'placeholder='' type="text" id='first_name' {...register("first_name")}/>
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="last_name">Last name</label>
          <input className='form__input'placeholder='' type="text" id='last_name' {...register("last_name")}/>
        </div>
        <div className='form__div'>
          <label className='form__label' htmlFor="birthday">Birthday</label>
          <input className='form__input' type="date" id='birthday' {...register("birthday")}/>
        </div>
        <button className='form__btn'>{updateInfo ? "Edit user" : "Create new user"}</button>
      </form>
  )
}

export default UsersForm