import React from "react";
import scss from "./Users.module.scss";
import unkownUser from "../../images/unknown-user.svg";
import { NavLink } from "react-router-dom";


function Users(props) {
  const pages = [];
  const numberOfPages = Math.ceil(props.totalCount / props.usersPerPage);
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={scss.controlsArea}>
        <button
          className={scss.controlBtn}
          onClick={() => props.loadPrevPage()}
        >
          PREV
        </button>
        <div className={scss.pages}>
          {pages.map((p) => (
            <p
              className={
                props.currentPage === p ? scss.activePage : scss.pageNumber
              }
              onClick={() => props.loadPage(p)}
            >
              {p}
            </p>
          ))}
        </div>
        <button
          className={scss.controlBtn}
          onClick={() => props.loadNextPage()}
        >
          NEXT
        </button>
      </div>

      <div className={scss.usersArea}>
        {props.users.map((user) => (
          <div className={scss.wrapper} key={user.id}>
            <div className={scss.avatar}>
              <NavLink to={`profile/${user.id}`}>
                <img
                  className={scss.photo}
                  src={user.photos.small ? user.photos.small : unkownUser}
                  alt="user avatar"
                />
              </NavLink>

              {user.followed ? (
                <button
                  className={scss.unSubcribe}
                  onClick={() => {
                    props.uNsubscribeRequest(user.id);
                  }}
                >
                  UNSUBSCRIBE
                </button>
              ) : (
                <button
                  className={scss.subcribe}
                  onClick={() => {
                    props.subscribeRequest(user.id);
                  }}
                >
                  SUBSCRIBE
                </button>
              )}
            </div>
            <div className={scss.infoWrapper}>
              <p className={scss.name}>{user.name}</p>
              <p className={scss.age}>Age: {user.age}</p>
              <p className={scss.location}>
                From: {user.city}, {user.country}
              </p>
              <p className={scss.status}>Status: {user.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
