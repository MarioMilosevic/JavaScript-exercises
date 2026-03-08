// Mapping Users to Get Usernames
// – Q1: Write code to get an array of names from given array of users
const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "John", isActive: true },
  { id: 3, name: "Mike", isActive: false },
];
// Result
// ['Jack','John','Mike']

interface UserType {
  id: number;
  name: string;
  isActive: boolean;
}

function convertUsers(users: UserType[]) {
  const names = users.map((user) => user.name);
  return names;
}

const names = convertUsers(users);
console.log(names);
