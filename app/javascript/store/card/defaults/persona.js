import cx from 'classnames'
import styles from 'styles/cards.css'

const personaCards = {
  GladiatorPit: {
    cardId: 'GladiatorPit',
    name: 'Gladiator Pit',
    regions: ['city', 'frontier'],
    cardClass: cx(styles.card, styles.persona, styles.safe, styles.GladiatorPit)
  },
  WizardsTower: {
    cardId: 'WizardsTower',
    name: 'Wizards Tower',
    regions: ['city', 'frontier'],
    cardClass: cx(styles.card, styles.persona, styles.safe, styles.WizardsTower)
  },
  SecretTemple: {
    cardId: 'SecretTemple',
    name: 'Secret Temple',
    regions: ['city', 'frontier'],
    cardClass: cx(styles.card, styles.persona, styles.safe, styles.SecretTemple)
  },
  Monastery: {
    cardId: 'Monastery',
    name: 'Monastery',
    regions: ['city', 'frontier'],
    cardClass: cx(styles.card, styles.persona, styles.safe, styles.Monastery)
  },
  DenOfIniquity: {
    cardId: 'DenOfIniquity',
    name: 'Den Of Iniquity',
    regions: ['city', 'frontier'],
    cardClass: cx(styles.card, styles.persona, styles.safe, styles.DenOfIniquity)
  },
  LeyLineIntersection: {
    cardId: 'LeyLineIntersection',
    name: 'Ley Line Intersection',
    regions: ['city', 'frontier'],
    cardClass: cx(styles.card, styles.persona, styles.safe, styles.LeyLineIntersection)
  }
}

export default personaCards
