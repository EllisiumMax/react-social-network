import axios from "axios";
import React from "react";
import scss from "./FindUsers.module.scss";
import unkownUser from "../../images/unknown-user.svg";


class FindUsers extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`
      )
      .then((result) => {
        this.props.getUsers(result.data.items);
        this.props.setTotalUsers(result.data.totalCount);
      });
  }

  loadPage(page) {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPerPage}`
      )
      .then((result) => {
        this.props.getUsers(result.data.items);
        this.props.setTotalUsers(result.data.totalCount);
      });
    this.props.setCurrentPage(page);
  }

  loadNextPage() {
    const numberOfPages = Math.ceil(
      this.props.totalCount / this.props.usersPerPage
    );
    const nextPage = this.props.currentPage + 1;
    if (nextPage <= numberOfPages) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${nextPage}&count=${this.props.usersPerPage}`
        )
        .then((result) => {
          this.props.getUsers(result.data.items);
          this.props.setTotalUsers(result.data.totalCount);
        });
      this.props.setCurrentPage(nextPage);
    }
  }
  loadPrevPage() {
    const prevPage = this.props.currentPage - 1;
    if (prevPage >= 1) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${prevPage}&count=${this.props.usersPerPage}`
        )
        .then((result) => {
          this.props.getUsers(result.data.items);
          this.props.setTotalUsers(result.data.totalCount);
        });
      this.props.setCurrentPage(prevPage);
    }
  }

  render() {
    const pages = [];
    const numberOfPages = Math.ceil(
      this.props.totalCount / this.props.usersPerPage
    );
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }
    
    return (
      <div>
        <div className={scss.controlsArea}>
        <button className={scss.controlBtn} onClick={() => this.loadPrevPage()}>
          PREV
        </button>
        <div className={scss.pages}>
          {pages.map((p) => (
            <p
              className={
                this.props.currentPage === p ? scss.activePage : scss.pageNumber
              }
              onClick={() => this.loadPage(p)}
            >
              {p}
            </p>
          ))}
        </div>
        <button className={scss.controlBtn} onClick={() => this.loadNextPage()}>
          NEXT
        </button>

        </div>
       
        <div className={scss.usersArea}>
          {this.props.users.map((user) => (
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
                      this.props.unSubscribe(user.id);
                    }}
                  >
                    UNSUBSCRIBE
                  </button>
                ) : (
                  <button
                    className={scss.subcribe}
                    onClick={() => {
                      this.props.subscribe(user.id);
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
}

export default FindUsers;
