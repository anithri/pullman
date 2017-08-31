import cx from 'classnames'

import styles from 'styles/cards.css'

const boardCards = {
  InnHarmsWay: {
    cardId: 'InnHarmsWay',
    name: 'Inn Harm\'s Way',
    regions: ['city'],
    cardClass: cx(styles.card, styles.boardCard, styles.InnHarmsWay)
  },
  BorderKeep: {
    cardId: 'BorderKeep',
    name: 'Border Keep',
    regions: ['frontier'],
    cardClass: cx(styles.card, styles.boardCard, styles.BorderKeep)
  },
  BleakHills: {
    cardId: 'BleakHills',
    name: 'Bleak Hills',
    regions: ['border'],
    cardClass: cx(styles.card, styles.boardCard, styles.BleakHills)
  },
  HiddenPass: {
    cardId: 'HiddenPass',
    name: 'Hidden Pass',
    regions: ['wilderness'],
    cardClass: cx(styles.card, styles.boardCard, styles.HiddenPass)
  },
  MenacingLair: {
    cardId: 'MenacingLair',
    name: 'Menacing Lair',
    regions: ['lair'],
    cardClass: cx(styles.card, styles.boardCard, styles.MenacingLair)
  },
  FindMe: {
    cardId: 'FindMe',
    name: 'FindMe',
    regions: ['wilderness'],
    cardClass: cx(styles.card, styles.FindMe)
  },
}
export default boardCards
