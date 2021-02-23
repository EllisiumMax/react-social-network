import React from "react";
import scss from "./Users.module.scss";
import unkownUser from "../../images/unknown-user.svg";

function Users(props) {
  const pages = [];
  const numberOfPages = Math.ceil(
    props.data.totalCount / props.data.usersPerPage
  );
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={scss.controlsArea}>
        <button className={scss.controlBtn} onClick={() => props.loadPrevPage()}>
          PREV
        </button>
        <div className={scss.pages}>
          {pages.map((p) => (
            <p
              className={
                props.data.currentPage === p ? scss.activePage : scss.pageNumber
              }
              onClick={() => props.loadPage(p)}
            >
              {p}
            </p>
          ))}
        </div>
        <button className={scss.controlBtn} onClick={() => props.loadNextPage()}>
          NEXT
        </button>
      </div>

      <div className={scss.usersArea}>
        {props.data.users.map((user) => (
          <div className={scss.wrapper} key={user.id}>
            <div className={scss.avatar}>
              {user.photos.large || user.photos.small ? (
                <img
                  className={scss.photo}
                  src={user.photos.large || user.photos.small}
                  alt="user avatar"
                />
              ) : (
                <img
                  className={scss.photo}
                  src={unkownUser}
                  alt="user avatar"
                />
              )}
              {user.followed ? (
                <button
                  className={scss.unSubcribe}
                  onClick={() => {
                    props.data.unSubscribe(user.id);
                  }}
                >
                  UNSUBSCRIBE
                </button>
              ) : (
                <button
                  className={scss.subcribe}
                  onClick={() => {
                    props.data.subscribe(user.id);
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