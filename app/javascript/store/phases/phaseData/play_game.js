import {constants as grc} from './game_round'

const GAME_ROUND = grc.GAME_ROUND
const PLAY_GAME = 'card/phase/play_game'
const END_GAME = 'card/phase/end_game'
const FINAL_SCORING = 'card/phase/final_scoring'
const BEGIN_GAME = 'card/phase/begin_game'

export const constants = {
  PLAY_GAME, BEGIN_GAME, END_GAME, FINAL_SCORING
}

export const phaseData = {
  [PLAY_GAME]: {
    id: PLAY_GAME,
    text: PLAY_GAME,
    actions: [BEGIN_GAME, GAME_ROUND, FINAL_SCORING, END_GAME]
  },
  [BEGIN_GAME]: {
    id: BEGIN_GAME,
    text: BEGIN_GAME,
    actions: ['@BEGIN_GAME']
  },
  [FINAL_SCORING]: {
    id: FINAL_SCORING,
    text: FINAL_SCORING,
    actions: ['@FINAL_SCORING']
  },
  [END_GAME]: {
    id: END_GAME,
    text: END_GAME,
    actions: ['@END_GAME']
  }
}
export default phaseData
