const url = "https://jsonplaceholder.typicode.com/posts/1";

// Map Data in Promises
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

async function fetchData() {
  const [userStatuses, users] = await Promise.all([
    getUserStatuses(),
    getUsers(),
  ]);

  const result = userStatuses.map((status) => {
    const user = users.find((user) => user.id === status.id);
    user.isActive = status.isActive;
    return user;
  });

  console.log(result);
}

fetchData();
