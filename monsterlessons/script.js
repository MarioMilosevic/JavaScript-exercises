// palidrome madam racecar level

function palindrome(word) {
  const sameLetters = [];
  const characters = word.split("");
  const reversedCharachters = [...characters].reverse();
  for (let i = 0; i < characters.length; i++) {
    if (characters[i] === reversedCharachters[i]) {
      sameLetters.push(characters[i]);
    }
  }
  return sameLetters;
}

console.log(palindrome("mario"));
