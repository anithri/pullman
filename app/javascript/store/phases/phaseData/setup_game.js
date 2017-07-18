const SETUP_GAME = 'card/phase/setup'
const PREPARE_TABLE = 'card/phase/prepare_table'
const SEAT_PLAYERS = 'card/phase/seat_players'
const START_PLAY = 'card/phase/start_play'

export const constants = {
  SETUP_GAME, PREPARE_TABLE, SEAT_PLAYERS, START_PLAY
}

export const phaseData = {
  [SETUP_GAME]: {
    id: SETUP_GAME,
    text: SETUP_GAME,
    actions: [SEAT_PLAYERS, PREPARE_TABLE, START_PLAY]
  },
  [SEAT_PLAYERS]: {
    id: SEAT_PLAYERS,
    text: SEAT_PLAYERS,
    actions: ['@SEAT_PLAYERS']
  },
  [PREPARE_TABLE]: {
    id: PREPARE_TABLE,
    text: PREPARE_TABLE,
    actions: ['@PREPARE_TABLE']
  },
  [START_PLAY]: {
    id: START_PLAY,
    text: START_PLAY,
    actions: ['@START_PLAY']
  }
}

export default phaseData
