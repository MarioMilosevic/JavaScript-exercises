// Q1: Write a function which accepts a list of users and a name to
// check if such user exists in the array.
const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "John", isActive: true },
  { id: 3, name: "Mike", isActive: false },
];

function isNameExists(
  name: string,
  names: { id: number; name: string; isActive: boolean }[],
) {
  return names.some((n) => n.name === name);
}
console.log(isNameExists("Jack", users)); // true
