// ting Shuffle Function
// – Q1: Write a shuffle function which mixes the elements
// console.log(shuffleItems([1, 2]));

function shuffleItems(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

console.log(shuffleItems([1, 2]));
