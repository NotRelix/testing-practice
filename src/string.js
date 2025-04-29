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

function getAlphabetIndex(alphabet, letter) {
  let alphabetIndex = null;
  alphabet.forEach((alphabetLetter, index) => {
    if (letter.toLowerCase() === alphabetLetter) {
      alphabetIndex = index;
    }
  });
  return alphabetIndex;
}

function getNewAlphabetIndex(alphabet, alphabetIndex, key) {
  return (alphabetIndex + key) % alphabet.length;
}

export function caesarCipher(text, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const modifiedText = text.split("");
  const encryptedMessage = modifiedText.map((letter) => {
    const alphabetIndex = getAlphabetIndex(alphabet, letter);
    if (letter === " ") {
      return [" "];
    }
    if (alphabetIndex === null) {
      return [letter];
    }
    const newAlphabetIndex = getNewAlphabetIndex(alphabet, alphabetIndex, key);
    if (letter.toLowerCase() === letter) {
      return alphabet[newAlphabetIndex];
    }
    return alphabet[newAlphabetIndex].toUpperCase();
  })
  return encryptedMessage.join("");
}
