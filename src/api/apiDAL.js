import axios from "axios";

const axiosSamurai = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "e0b9353e-69aa-4a7f-8780-b976ca36fda3",
  },
});

const DAL = {
  // DATA ACCESS LAYER

  security: {},
  auth: {},
  users: {
    getUsers(currentPage, usersPerPage) {
      return axiosSamurai
      .get(
        `users?page=${currentPage}&count=${usersPerPage}`).then(res => res.data);
    },
    loadPage(page, usersPerPage) {
      return axiosSamurai
        .get(`users?page=${page}&count=${usersPerPage}`)
        .then((res) => res.data);
    },
    loadNextPage(nextPage, usersPerPage) {
      return axiosSamurai
        .get(`users?page=${nextPage}&count=${usersPerPage}`)
        .then((res) => res.data);
    },
    loadPrevPage(prevPage, usersPerPage) {
      return axiosSamurai
        .get(`users?page=${prevPage}&count=${usersPerPage}`)
        .then((res) => res.data);
    },
    subscribeRequest(id) {
      return axiosSamurai
        .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then((res) => res.data);
    },
    uNsubscribeRequest(id) {
      return axiosSamurai
        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        .then((res) => res.data);
    },
  },
  profile: {
    loadProfileInfo(id) {
      return axiosSamurai.get(`profile/${id}`).then(res => res.data);
    }
  },
};

export default DAL;
