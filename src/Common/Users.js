export const UserTable = [
  {
    id: 7,
    email: "a@a.in",
    password: "Test!123",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    role: "admin"
  },
  {
    id: 8,
    email: "b@b.in",
    password: "Test!123",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
    role: "editor"
  },
  {
    id: 9,
    email: "c@c.in",
    password: "Test!123",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
    role: "user"
  },
  {
    id: 10,
    email: "d@d.in",
    password: "Test!123",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
    role: "user"
  },
  {
    id: 11,
    email: "e@e.in",
    password: "Test!123",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
    role: "user"
  },
  {
    id: 12,
    email: "f@f.in",
    password: "Test!123",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
    role: "user"
  },
];


export const findAllUsers = UserTable.filter(user => user);

export const findUser = (email=false) => UserTable.find(user => user.email === email);

export const loginUser = (email=false, password) => UserTable.find(user => user.email === email && user.password === password)