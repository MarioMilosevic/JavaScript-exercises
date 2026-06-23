// – Q1: You have 2 functions which return promises. Map data from
// getUsers and getUserStatuses to get array of users with id, name,
// isActive
const users = [
  { id: 1, name: "Jack" },
  { id: 2, name: "John" },
  { id: 3, name: "Mike" },
];
const userStatuses = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];
const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};
const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

async function usersAndStatuses(cb1, cb2) {
  const arr = [];
  const [users, userStatuses] = await Promise.all([cb1(), cb2()]);
  for (let i = 0; i < users.length; i++) {
    const { isActive } = userStatuses.find(
      (status) => status.id === users[i].id,
    );
    const user = { ...users[i], isActive };
    arr.push(user);
  }
  return arr;
}

// function usersAndUserStatuses(cb1, cb2) {
//   const arr = [];
//   return Promise.all([cb1(), cb2()]).then(([users, userStatuses]) => {
//     for (let i = 0; i < users.length; i++) {
//       const { isActive } = userStatuses.find(
//         (status) => status.id === users[i].id,
//       );
//       const user = { ...users[i], isActive };
//       arr.push(user);
//     }
//     return arr;
//   });
// }

const mario = await usersAndStatuses(getUsers, getUserStatuses);
console.log(mario);

// let usersAndStatuses = usersAndUserStatuses(getUsers, getUserStatuses).then(
//   (data) => (usersAndStatuses = data),
// );
// console.log(usersAndStatuses);
