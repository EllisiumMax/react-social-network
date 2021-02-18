
const initialState = {
    friends: [
    {
      id: "2",
      imgLink:
        "https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg",
      name: "Khaiuk Alina Aleksandrovna Maximovna",
      online: true,
    },
    {
      id: "3",
      imgLink:
        "https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg",
      name: "Verestun Sergii",
      online: true,
    },
    {
      id: "4",
      imgLink:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*",
      name: "Sokolov Anatoliy",
      online: false,
    },
    {
      id: "2",
      imgLink:
        "https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg",
      name: "Khaiuk Alina",
      online: true,
    },
    {
      id: "3",
      imgLink:
        "https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg",
      name: "Verestun Sergii",
      online: true,
    },
    {
      id: "4",
      imgLink:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*",
      name: "Sokolov Anatoliy",
      online: false,
    },
    {
      id: "2",
      imgLink:
        "https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg",
      name: "Khaiuk Alina",
      online: true,
    },
    {
      id: "3",
      imgLink:
        "https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg",
      name: "Verestun Sergii",
      online: true,
    },
    {
      id: "4",
      imgLink:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*",
      name: "Sokolov Anatoliy",
      online: false,
    },
    {
      id: "2",
      imgLink:
        "https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg",
      name: "Khaiuk Alina",
      online: true,
    },
    {
      id: "3",
      imgLink:
        "https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg",
      name: "Verestun Sergii",
      online: true,
    },
    {
      id: "4",
      imgLink:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*",
      name: "Sokolov Anatoliy",
      online: false,
    },
    {
      id: "2",
      imgLink:
        "https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg",
      name: "Khaiuk Alina",
      online: true,
    },
    {
      id: "3",
      imgLink:
        "https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg",
      name: "Verestun Sergii",
      online: true,
    },
    {
      id: "4",
      imgLink:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*",
      name: "Sokolov Anatoliy",
      online: false,
    },
  ]
};

function friendsReducer(state = initialState, action) {
  const newState = {...state};
  newState.friends = [...state.friends];
    return newState;
}

export default friendsReducer;