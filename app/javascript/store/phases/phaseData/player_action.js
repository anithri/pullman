const PLAYER_ACTION = 'card/phase/action'
const START_ACTION = 'card/phase/action/start'
const DO_ACTION = 'card/phase/action/do'
const END_ACTION = 'card/phase/action/end'

export const constants = {
  PLAYER_ACTION, START_ACTION, DO_ACTION, END_ACTION
}

export const phaseData = {
  [PLAYER_ACTION]: {
    id: PLAYER_ACTION,
    text: PLAYER_ACTION,
    actions: [START_ACTION, DO_ACTION, END_ACTION]
  },
  [START_ACTION]: {
    id: START_ACTION,
    text: START_ACTION,
    actions: ['@START_ACTION']
  },
  [DO_ACTION]: {
    id: DO_ACTION,
    text: DO_ACTION,
    actions: ['@DO_ACTION']
  },
  [END_ACTION]: {
    id: END_ACTION,
    text: END_ACTION,
    actions: ['@END_ACTION']
  }
}
export default phaseData
