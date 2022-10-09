import React from "react";
import "./styles/userCard.css"

const UserCard = ({ user, deleteUser, setupdateInfo }) => {
  const handleEdit = () => {
    setupdateInfo(user);
  };

  return (
    <article className="card">
      <h2 className="card__name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul className="card__list">
        <li className="card__item">
          <span className="card__span">Email: </span>
          {user.email}
        </li>
        <li className="card__item">
          <span className="card__span">Birthday:</span>
          <div className="card__item-container">
          <i className="card_gift fa-solid fa-gift"></i> {user.birthday}-
          </div>
        </li>
      </ul>
      <footer className="card__footer">
        <button className="card__btn" onClick={() => deleteUser(user.id)}>
        <i className="card__tash fa-solid fa-trash-can"></i>
        </button>
        <button className="card__btn" onClick={handleEdit}>
        <i className="card__edit fa-solid fa-user-pen"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
