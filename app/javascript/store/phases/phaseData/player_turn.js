import {constants as pac} from './player_action'

const PLAYER_ACTION = pac.PLAYER_ACTION
const PLAYER_TURN = 'card/phase/turn'
const START_TURN = 'card/phase/turn/start'
const END_TURN = 'card/phase/turn/end'

export const constants = {
  PLAYER_TURN, START_TURN, END_TURN
}

export const phaseData = {
  [PLAYER_TURN]: {
    id: PLAYER_TURN,
    text: PLAYER_TURN,
    actions: [START_TURN, PLAYER_ACTION, END_TURN]
  },
  [START_TURN]: {
    id: START_TURN,
    text: START_TURN,
    actions: ['@START_TURN']
  },
  [END_TURN]: {
    id: END_TURN,
    text: END_TURN,
    actions: ['@END_TURN']
  }
}
export default phaseData
