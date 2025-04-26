export function capitalize(text) {
  const words = text.split(" ");
  const newWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  })
  return newWords.join(" ");
}
