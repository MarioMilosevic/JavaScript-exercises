interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: "Mario" },
  { id: 1, name: "Mario" },
  { id: 2, name: "Anna" },
];

function uniqueArr(arr: Person[]) {
  const unique: Person[] = [];
  for (let i = 0; i < arr.length; i++) {
    const currentPerson = arr[i];
    const alreadyExists = unique.some(
      (person) => person.id === currentPerson.id,
    );
    if (!alreadyExists) {
      unique.push(currentPerson);
    }
  }
  return unique;
}

console.log(uniqueArr(people));
