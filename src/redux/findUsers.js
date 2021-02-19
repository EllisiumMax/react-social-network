import newsReducer from "./newsReducer";

const initialState = [
  {
    id: 1,
    fullName: "Khaiuk Maksym",
    age: 31,
    status: "Hello World, nice weather today, but tomorrow will be raining.",
    country: "Ukraine",
    city: "Odessa",
    avatarUrl:
      "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
    followed: true,
  },
  {
    id: 2,
    fullName: "Khaiuk Alina",
    age: 26,
    status: "Hello Ukraine",
    country: "Ukraine",
    city: "Khmelnitsky",
    avatarUrl:
      "https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg",
    followed: false,
  },
  {
    id: 3,
    fullName: "Kharitonchuk Urii",
    age: 38,
    status: "Hello Infiniti",
    country: "Ukraine",
    city: "Odessa",
    avatarUrl:
      "https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg",
    followed: false,
  },
  {
    id: 4,
    fullName: "Verestun Sergei",
    age: 30,
    status: "Hello Devops",
    country: "Ukraine",
    city: "Zhitomyr",
    avatarUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*",
    followed: true,
  },
];

function findUsersReducer(state = initialState, action) {
  const newState = [...state];

  switch (action.type) {
    case "GET-USERS":
      return newState;
    case "SUBSCRIBE":
      newState.forEach((user) => {
        if (user.id == action.userID) user.followed = true;
      });
      return newState;
    case "UN-SUBSCRIBE":
      newState.forEach((user) => {
        if (user.id == action.userID) user.followed = false;
      });
      return newState;
    default:
      return state;
  }
}

export function getUsersAC() {
  return {
    type: "GET-USERS",
  };
}

export function subscribeToUserAC(userID) {
  return {
    type: "SUBSCRIBE",
    userID: userID,
  };
}

export function unSubcribeFromUserAC(userID) {
  return {
    type: "UN-SUBSCRIBE",
    userID: userID,
  };
}

export default findUsersReducer;
