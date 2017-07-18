const IN_BOX = 'card/phase/in_box'
const INIT = 'card/phase/init'
const START_SETUP = 'card/phase/start_setup'

export const constants = {
  IN_BOX, INIT, START_SETUP
}

export const phaseData = {
  [IN_BOX]: {
    id: IN_BOX,
    text: IN_BOX,
    actions: [INIT, START_SETUP]
  },
  [INIT]: {
    id: INIT,
    text: INIT,
    actions: ['@INIT']
  },
  [START_SETUP]: {
    id: START_SETUP,
    text: START_SETUP,
    actions: ['@START_SETUP']
  }
}
export default phaseData
