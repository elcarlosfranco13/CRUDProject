import React from 'react'

const UserCard = ({user, deleteUser,setupdateInfo}) => {


  const handleEdit = () => {
    setupdateInfo(user)

  }

  

  return (
    <article>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="card">
        <li className="card_item"><span>Email: </span>{user.email}</li>
        <li className="card_item"><span>Birthday: </span>{user.birthday}</li>
      </ul>
      <footer>
      <i onClick={() => deleteUser(user.id)} className="fa-solid fa-trash-can"></i>
      <i onClick={handleEdit} className="fa-solid fa-user-pen"></i>
      </footer>
    </article>
  )
}

export default UserCard