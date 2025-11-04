function palindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(palindrome("mario"));
console.log(palindrome("level"));
console.log(palindrome("racecar"));
console.log(palindrome("madam"));
