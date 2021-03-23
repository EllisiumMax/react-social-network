import React from "react";
import scss from "./Users.module.scss";
import unkownUser from "../../images/unknown-user.svg";
import { NavLink } from "react-router-dom";
import Paginator from "components/COMMON/Paginator/Paginator";

function Users(props) {

  return (
    <div>
      {/* <div className={scss.controlsArea}>
        <button
          className={scss.controlBtn}
          onClick={() =>
            props.loadPrevPage(props.currentPage, props.usersPerPage)
          }
        >
          PREV
        </button>
        <div className={scss.pages}>
          {pages.map((p) => (
            <p
              className={
                props.currentPage === p ? scss.activePage : scss.pageNumber
              }
              onClick={() =>
                props.loadPage(p, props.currentPage, props.usersPerPage)
              }
            >
              {p}
            </p>
          ))}
        </div>
        <button
          className={scss.controlBtn}
          onClick={() =>
            props.loadNextPage(
              props.totalCount,
              props.usersPerPage,
              props.currentPage
            )
          }
        >
          NEXT
        </button>
      </div> */}

      {props.totalCount ? <Paginator totalCount={props.totalCount} itemsPerPage={props.usersPerPage} currentPage={props.currentPage} loadPage={props.loadPage} /> : null }

      

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
                  disabled={props.currentRequests.some((id) => id === user.id)}
                  className={`${scss.btn} ${scss.unSubcribe}`}
                  onClick={() => {
                    props.unSubscribeRequest(user.id);
                  }}
                >
                  UNSUBSCRIBE
                </button>
              ) : (
                <button
                  disabled={props.currentRequests.some((id) => id === user.id)}
                  className={`${scss.btn} ${scss.subcribe}`}
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
                From: {user.city} {user.country}
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
