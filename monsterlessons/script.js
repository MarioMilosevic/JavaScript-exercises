//  Q2: Sort an array of objects by author’s lastname
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "THe Hunger Games", author: "Suzanne Collins" },
];

books.sort((a, b) => {
  const firstLastName = a.author.split(" ")[1];
  const secondLastName = b.author.split(" ")[1];
  return firstLastName.localeCompare(secondLastName);
});

console.log(books);
