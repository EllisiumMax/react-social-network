import React from "react";
import scss from "./Users.module.scss";
import unkownUser from "../../images/unknown-user.svg";
import { NavLink } from "react-router-dom";
import Paginator from "components/COMMON/Paginator/Paginator";

function Users(props) {
  return (
    <div>
      {props.totalCount ? (
        <Paginator
          totalCount={props.totalCount}
          itemsPerPage={props.usersPerPage}
          currentPage={props.currentPage}
          loadPage={props.loadPage}
        />
      ) : null}

      <div className={scss.container}>
        <button
          className={
            props.currentPage > 1
              ? `${scss.changePage} ${scss.prevPage}`
              : `${scss.changePage} ${scss.prevPage} ${scss.inactive}`
          }
          onClick={() =>
            props.loadPrevPage(props.currentPage, props.usersPerPage)
          }
        >
          &laquo;
        </button>
        <div className={scss.usersArea}>
          <User
            users={props.users}
            subscribeRequest={props.subscribeRequest}
            unSubscribeRequest={props.unSubscribeRequest}
            currentRequests={props.currentRequests}
          />
        </div>

        <button
          className={
            props.currentPage >= props.totalCount / props.usersPerPage
              ? `${scss.changePage} ${scss.nextPage} ${scss.inactive}`
              : `${scss.changePage} ${scss.nextPage}`
          }
          onClick={() =>
            props.loadNextPage(
              props.totalCount,
              props.usersPerPage,
              props.currentPage
            )
          }
        >
          &raquo;
        </button>
      </div>
    </div>
  );
}

function User(props) {
  return props.users.map((user) => (
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
        {user.status ? <p className={scss.status}>Status: {user.status}</p> : null} 
      </div>
    </div>
  ));
}

export default Users;
