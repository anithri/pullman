const allPersona = {
  Adept: {
    id: 'Adept',
    name: 'Adept',
    power: ['Magic', 'Mayhem']
  },
  Cultist: {
    id: 'Cultist',
    name: 'Cultist',
    power: ['Magic', 'Mystery']
  },
  Monk: {
    id: 'Monk',
    name: 'Monk',
    power: ['Mystery', 'Mystery']
  },
  Rogue: {
    id: 'Rogue',
    name: 'Rogue',
    power: ['Mayhem', 'Mystery']
  },
  Sorcerer: {
    id: 'Sorcerer',
    name: 'Sorcerer',
    power: ['Magic', 'Magic']
  },
  Warrior: {
    id: 'Warrior',
    name: 'Warrior',
    power: ['Mayhem', 'Mayhem']
  }
}


const defaultPersona = () => {
  return allPersona
}

export default defaultPersona
