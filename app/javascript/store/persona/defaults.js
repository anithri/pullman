const allPersona = {
  Adept: {
    id: 'Adept',
    name: 'Adept',
    power: ['Magic', 'Mayhem'],
    startingValues: {
      magic: 3,
      mystery: 2,
      mayhem: 3,
      monies: 2,
      morale: 5,
      cards: ['WizardsTower'],
    },
  },
  Cultist: {
    id: 'Cultist',
    name: 'Cultist',
    power: ['Magic', 'Mystery'],
    startingValues: {
      magic: 3,
      mystery: 3,
      mayhem: 2,
      monies: 2,
      morale: 5,
      cards: ['SecretTemple'],
    }
  },
  Monk: {
    id: 'Monk',
    name: 'Monk',
    power: ['Mystery', 'Mystery'],
    startingValues: {
      magic: 2,
      mystery: 4,
      mayhem: 2,
      monies: 2,
      morale: 5,
      cards: ['Monastery'],
    },
  },
  Rogue: {
    id: 'Rogue',
    name: 'Rogue',
    power: ['Mayhem', 'Mystery'],
    startingValues: {
      magic: 2,
      mystery: 3,
      mayhem: 3,
      monies: 2,
      morale: 5,
      cards: ['DenOfIniquity'],
    },
  },
  Sorcerer: {
    id: 'Sorcerer',
    name: 'Sorcerer',
    power: ['Magic', 'Magic'],
    startingValues: {
      magic: 4,
      mystery: 2,
      mayhem: 2,
      monies: 2,
      morale: 5,
      cards: ['LeyLineIntersection'],
    },
  },
  Warrior: {
    id: 'Warrior',
    name: 'Warrior',
    power: ['Mayhem', 'Mayhem'],
    startingValues: {
      magic: 2,
      mystery: 2,
      mayhem: 4,
      monies: 2,
      morale: 5,
      cards: ['GladiatorPit'],
    },
  },
}


const defaultPersona = () => {
  return allPersona
}

export default defaultPersona
