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

export function caesarCipher(text, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const modifiedText = text.toLowerCase().split("");
  const encryptedMessage = modifiedText.map((letter) => {
    let alphabetIndex = null;
    alphabet.forEach((alphabetLetter, index) => {
      if (letter === alphabetLetter) {
        alphabetIndex = index;
      }
    });
    if (alphabetIndex === null) {
      return [" "];
    }
    const newAlphabetIndex = (alphabetIndex + key) % alphabet.length;
    return alphabet[newAlphabetIndex];
  })
  return encryptedMessage.join("").toUpperCase();
}
