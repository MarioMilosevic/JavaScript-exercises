//  Q1: Write a function which accepts a list of users and a name to
// check if such user exists in the array.
function isNameExists(name, users) {
  return users.some((user) => user.name === name);
}

const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "John", isActive: true },
  { id: 3, name: "Mike", isActive: false },
];

console.log(isNameExists("Jack", users)); // true
