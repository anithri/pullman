const RESET_GAME = 'card/phase/reset_game'
const RESET_BOARD = 'card/phase/reset_game/board'
const RESET_PLAYERS = 'card/phase/reset_game/players'

export const constants = {
  RESET_GAME, RESET_BOARD, RESET_PLAYERS
}

export const phaseData = {
  [RESET_GAME]: {
    id: RESET_GAME,
    text: RESET_GAME,
    actions: [RESET_BOARD, RESET_PLAYERS]
  },
  [RESET_BOARD]: {
    id: RESET_BOARD,
    text: RESET_BOARD,
    actions: ['@RESET_BOARD']
  },
  [RESET_PLAYERS]: {
    id: RESET_PLAYERS,
    text: RESET_PLAYERS,
    actions: ['@RESET_PLAYERS']
  }
}

export default phaseData
