// // // Sort the array of numbers

// // const exampleNumbers = [5, 3, 2, 9, 6, 1, 8, 4, 7];

// // function sortNumers(numbers: number[]) {
// //   const copy = [...numbers];
// //   copy.sort((a, b) => b - a);
// //   console.log(copy);
// // }

// // sortNumers(exampleNumbers);

// // Q2: Sort an array of objects by author’s lastname
const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];
function sortByName(booksArr: { name: string; author: string }[]) {
  const sorted = [...booksArr].sort((a, b) => {
    const lastNameA = a.author.split(" ")[1];
    const lastNameB = b.author.split(" ")[1];

    return lastNameA.localeCompare(lastNameB);
  });
  console.log(sorted);
}

sortByName(books);
