import './style.css'
import { generateDeck } from './modules/generateDeck'
import { clear } from './modules/clear'
import { deckToString } from './modules/deckToString'
import { generateYdk } from './modules/generateYdk'
const deck = document.getElementById('deck')
const generate = document.getElementById('generate-btn')
const download = document.getElementById('download-btn')

let cover = document.createElement('img')
cover.src = './cover.png'
cover.id = 'cover'
deck.appendChild(cover)

let currentDeck = []
let deckStr = ''
  
generate.addEventListener('click', () => {
  clear(deck)
  currentDeck = []
  currentDeck = generateDeck(40);
  
  deckStr = deckToString(currentDeck)
  currentDeck.forEach(card => {
    const img = document.createElement('img');
    img.src = `./images/${card}.jpg`;
    img.classList.add('card');
    deck.appendChild(img);
  }); 
});

download.addEventListener('click', () => {
  if (deckStr === '') {
    return
  }
  let file = generateYdk(deckStr)
  let fileUrl = window.URL.createObjectURL(file)
  let tempLink = document.createElement('a');
  tempLink.href = fileUrl;
  tempLink.setAttribute('download', 'deck.ydk');
  tempLink.setAttribute('target', '_blank');
  tempLink.click();
})