import {constants as ptc} from './player_turn'

const PLAYER_TURN = ptc.PLAYER_TURN
const GAME_ROUND = 'card/phase/round'
const START_ROUND = 'card/phase/round/start'
const END_ROUND = 'card/phase/round/end'

export const constants = {
  GAME_ROUND, START_ROUND, END_ROUND
}

export const phaseData = {
  [GAME_ROUND]: {
    id: GAME_ROUND,
    text: GAME_ROUND,
    actions: [START_ROUND, PLAYER_TURN, END_ROUND]
  },
  [START_ROUND]: {
    id: START_ROUND,
    text: START_ROUND,
    actions: ['@START_ROUND']
  },
  [END_ROUND]: {
    id: END_ROUND,
    text: END_ROUND,
    actions: ['@END_ROUND']
  }
}

export default phaseData
