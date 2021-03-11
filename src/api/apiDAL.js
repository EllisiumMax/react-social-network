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
  auth: {
    authRequest() {
      return axiosSamurai.get("auth/me").then((res) => res.data);
    },
    login(loginData) {
      return axiosSamurai.post("auth/login", loginData).then((res) => res.data);
    },
    logout() {
      return axiosSamurai.delete("/auth/login").then((res) => res.data);
    },
    getCaptcha() {
      return axiosSamurai
        .get("/security/get-captcha-url")
        .then((res) => res.data);
    },
  },
  users: {
    getUsers(currentPage, usersPerPage) {
      return axiosSamurai
        .get(`users?page=${currentPage}&count=${usersPerPage}`)
        .then((res) => res.data);
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
      return axiosSamurai.get(`profile/${id}`).then((res) => res.data);
    },
    getStatus(id) {
      return axiosSamurai.get(`profile/status/${id}`).then((res) => res.data);
    },
    setStatus(status) {
      return axiosSamurai
        .put("profile/status", { status: status })
        .then((res) => res.data);
    },
  },
  messages: {
    startChating(userId) {
      return axiosSamurai.put(`dialogs/${userId}`).then((res) => res.data);
    },
    getAllDialogs() {
      return axiosSamurai.get(`dialogs/`).then((res) => res.data);
    },
    getMessages(userId) {
      return axiosSamurai
        .get(`dialogs/${userId}/messages`)
        .then((res) => res.data);
    },
    sendMessage(userId, messageString) {
      return axiosSamurai
        .post(`dialogs/${userId}/messages`, messageString)
        .then((res) => res.data);
    },
    checkMessageViewed(messageId) {
      return axiosSamurai
        .get(`dialogs/messages/${messageId}/viewed`)
        .then((res) => res.data);
    },
    markAsSpam(messageId) {
      return axiosSamurai
        .post(`dialogs/messages/${messageId}/spam`)
        .then((res) => res.data);
    },
    deleteMessageForMe(messageId) {
      return axiosSamurai
        .delete(`dialogs/messages/${messageId}`)
        .then((res) => res.data);
    },
    restoreMessage(messageId) {
      return axiosSamurai
        .put(`dialogs/messages/${messageId}/restore`)
        .then((res) => res.data);
    },
    filterMessagesByDate(userId, dateString) {
      return axiosSamurai
        .get(`dialogs/${userId}/messages/new?newerThen=${dateString}`)
        .then((res) => res.data);
    },
    listOfNewMessages() {
      return axiosSamurai
        .get("dialogs/messages/new/count")
        .then((res) => res.data);
    },
  },
};

export default DAL;
