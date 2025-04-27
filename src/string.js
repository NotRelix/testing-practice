export function capitalize(text) {
  const words = text.split(" ");
  const newWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  })
  return newWords.join(" ");
}

export function reverseString(text) {
  let reversedWord = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedWord += text[i];
  }
  return reversedWord;
}
