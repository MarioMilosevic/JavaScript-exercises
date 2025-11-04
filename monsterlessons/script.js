const vowels = ["a", "e", "i", "o", "u"];

function countVowels(word) {
  const letters = word.split("");
  console.log(letters);
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const isVowel = vowels.find((vowel) => vowel === letter);
    if (isVowel) {
      count++;
      console.log(isVowel);
    }
  }
  console.log(count);
  return count;
}

countVowels("michelangelo");
