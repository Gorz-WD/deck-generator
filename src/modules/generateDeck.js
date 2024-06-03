import data from '../data/data.json'
import { getRandomRarity } from './getRandomRarity,'
import { pickCard } from './pickCard'



const generateDeck = (size) => {
  let deck = []
  for(let i = 0 ; i < size; i++){
    let rarity = getRandomRarity()
    if (i < 2) {
      deck.push(pickCard(data.Monsters.TwoTributes[rarity]));
    }
    if(i > 1 && i < 6) {
      deck.push(pickCard(data.Monsters.OneTribute[rarity]));
    }
    if (i > 5 && i < 15) {
      deck.push(pickCard(data.Monsters.Four[rarity]));
    }
    if (i > 14 && i < 20){
      deck.push(pickCard(data.Monsters.Special[rarity]));
    }
    if(i > 19 && i < 22){
      deck.push(pickCard(data.Spells.Equip[rarity]));
    }
    if(i > 21 && i < 24){
      deck.push(pickCard(data.Spells.Draw[rarity]));
    }
    if(i > 23 && i < 30 ){
      deck.push(pickCard(data.Spells.Normal[rarity]));
    }
    if(i > 29 && i < 38){
      deck.push(pickCard(data.Traps.Battle[rarity]));
    }if (i > 37 && i < 40) {
      deck.push(pickCard(data.Traps.Utility[rarity]));
    }
  } 
  return deck
}

export {generateDeck}