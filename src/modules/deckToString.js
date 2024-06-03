export const deckToString = (deck) => {
  let arr = []

  deck.forEach(card => {
    arr.push(card.toString())
  });
  return arr
}