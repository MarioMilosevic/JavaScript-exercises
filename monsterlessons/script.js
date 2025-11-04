// convert a string to give title case

function everyWordToUppercase(word) {
  const lowerCase = word.toLowerCase();
  const words = lowerCase.split(" ");
  const transformedWords = [];
  for (let i = 0; i < words.length; i++) {
    const letters = words[i].split("");
    const firstLetterToUpperCase = letters[0].toUpperCase();
    letters[0] = firstLetterToUpperCase;
    const word = letters.join("");
    transformedWords.push(word);
  }

  return transformedWords.join(" ");
}

everyWordToUppercase("MaRiO jE kraLj IGRICE");
