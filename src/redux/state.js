const state = {
  profilePage: {
    profileInfo: {
      backgroundImg: "https://wallpapercave.com/wp/wp3973340.jpg",
      userPhoto:
        "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
      userName: "Khaiuk Maksym",
      userAge: "31",
      livingAt: "Odessa, Ukraine",
      workingAt: "NoWhere Inc.",
    },
    posts: [
      {
        imgLink:
          "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
        date: "03.02.2021 12:41",
        text: "Hello World",
        likes: "25",
      },
      {
        imgLink:
          "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
        date: "03.02.2021 12:44",
        text: "Hello React",
        likes: "125",
      },
      {
        imgLink:
          "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
        date: "03.02.2021 12:41",
        text: "Hello JavaScript",
        likes: "1125",
      },
      {
        imgLink:
          "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416__340.jpg",
        date: "03.02.2021 12:41",
        text: "Hello Web",
        likes: "23",
      },
    ],
  },
  messagesPage: {
    userList: [
      {
        userName: "Khaiuk Maksym",
        id: "1",
        avatarURL:
          "https://www.humanesociety.org/sites/default/files/styles/400x400/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=txM-HxF8",
      },
      {
        userName: "Khaiuk Alina",
        id: "2",
        avatarURL:
          "https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg",
      },
      {
        userName: "Verestun Sergii",
        id: "3",
        avatarURL:
          "https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg",
      },
      {
        userName: "Sokolov Anatoliy",
        id: "4",
        avatarURL:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*",
      },
      {
        userName: "Kovalev Alexandr",
        id: "5",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1351720980972933122/I3MnYUdm.jpg",
      },
    ],
    messages: [
      {
        id: "1",
        text: "Hello Alina!",
        timeStamp: "01.02.2021 22:10",
      },
      {
        userName: "Khaiuk Alina",
        id: "2",
        text: "How are you Max?",
        timeStamp: "01.02.2021 22:12",
      },
      {
        id: "1",
        text: "Thank you, I am fine.",
        timeStamp: "01.02.2021 22:12",
      },
      {
        userName: "Khaiuk Alina",
        id: "2",
        text: "Do you want to go for a walk?",
        timeStamp: "01.02.2021 22:14",
      },
      {
        id: "1",
        text: "Sorry, I am busy now, maybe later.",
        timeStamp: "01.02.2021 22:15",
      },
    ],
  },
  newsPage: {},
  musicPage: {},
  settingsPage: {},
  friendsSection: [
    {
      id: '2',
      imgLink: 'https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg',
      name: 'Khaiuk Alina Aleksandrovna Maximovna',
      online: true
    },
    {
      id: '3',
      imgLink: 'https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg',
      name: 'Verestun Sergii',
      online: true
    },
    {
      id: '4',
      imgLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*',
      name: 'Sokolov Anatoliy',
      online: false
    },
    {
      id: '2',
      imgLink: 'https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg',
      name: 'Khaiuk Alina',
      online: true
    },
    {
      id: '3',
      imgLink: 'https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg',
      name: 'Verestun Sergii',
      online: true
    },
    {
      id: '4',
      imgLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*',
      name: 'Sokolov Anatoliy',
      online: false
    },
    {
      id: '2',
      imgLink: 'https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg',
      name: 'Khaiuk Alina',
      online: true
    },
    {
      id: '3',
      imgLink: 'https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg',
      name: 'Verestun Sergii',
      online: true
    },
    {
      id: '4',
      imgLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*',
      name: 'Sokolov Anatoliy',
      online: false
    },
    {
      id: '2',
      imgLink: 'https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg',
      name: 'Khaiuk Alina',
      online: true
    },
    {
      id: '3',
      imgLink: 'https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg',
      name: 'Verestun Sergii',
      online: true
    },
    {
      id: '4',
      imgLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*',
      name: 'Sokolov Anatoliy',
      online: false
    },
    {
      id: '2',
      imgLink: 'https://media.newyorker.com/photos/59097268019dfc3494ea24b3/master/pass/Shapiro-Most-Famous-Dog-On-Instagram.jpg',
      name: 'Khaiuk Alina',
      online: true
    },
    {
      id: '3',
      imgLink: 'https://pethouse.ua/assets/images/prods/planetdog/0000113643.jpg',
      name: 'Verestun Sergii',
      online: true
    },
    {
      id: '4',
      imgLink: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-dog-breeds-lead-1550810849.jpg?crop=0.666xw:1.00xh;0.191xw,0&resize=640:*',
      name: 'Sokolov Anatoliy',
      online: false
    },
  ]
};

export default state;
