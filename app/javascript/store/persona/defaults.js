const allPersona = {
  Adept: {
    id: 'Adept',
    name: 'Adept',
    power: ['Magic', 'Mayhem'],
    startingValues: {
      magic: 1,
      mystery: 0,
      mayhem: 1,
      monies: 0,
      morale: 5
    }
  },
  Cultist: {
    id: 'Cultist',
    name: 'Cultist',
    power: ['Magic', 'Mystery'],
    startingValues: {
      magic: 1,
      mystery: 1,
      mayhem: 0,
      monies: 0,
      morale: 5
    }
  },
  Monk: {
    id: 'Monk',
    name: 'Monk',
    power: ['Mystery', 'Mystery'],
    startingValues: {
      magic: 0,
      mystery: 2,
      mayhem: 0,
      monies: 0,
      morale: 5
    }
  },
  Rogue: {
    id: 'Rogue',
    name: 'Rogue',
    power: ['Mayhem', 'Mystery'],
    startingValues: {
      magic: 0,
      mystery: 1,
      mayhem: 1,
      monies: 0,
      morale: 5
    }
  },
  Sorcerer: {
    id: 'Sorcerer',
    name: 'Sorcerer',
    power: ['Magic', 'Magic'],
    startingValues: {
      magic: 2,
      mystery: 0,
      mayhem: 0,
      monies: 0,
      morale: 5
    }
  },
  Warrior: {
    id: 'Warrior',
    name: 'Warrior',
    power: ['Mayhem', 'Mayhem'],
    startingValues: {
      magic: 0,
      mystery: 0,
      mayhem: 2,
      monies: 0,
      morale: 5
    }
  }
}


const defaultPersona = () => {
  return allPersona
}

export default defaultPersona
