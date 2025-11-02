// Highlight All Words Over 8 Chars With Yellow
// – Q1: Highlight all of the words in markup over 8 characters long in
// the paragraph text (with a yellow background for example)

const paragraph = document.getElementById("paragraph");
console.dir(paragraph);

const text = paragraph.innerText;

const words = text.split(" ");
console.log(words);

const higlightedWords = words
  .map((word) => {
    if (word.length > 10) {
      return `<span style="background-color: yellow">${word}</span>`;
    }
    return word;
  })
  .join(" ");

paragraph.innerHTML = higlightedWords;
