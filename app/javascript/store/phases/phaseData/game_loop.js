import {constants as inBoxConstants} from './in_box'
import {constants as setupGameConstants} from './setup_game'
import {constants as playGameConstants} from './play_game'
import {constants as resetGameConstants} from './reset_game'

const GAME_LOOP = 'card/phase/game_loop'

const in_box = inBoxConstants.IN_BOX
const setup_game = setupGameConstants.SETUP_GAME
const play_game = playGameConstants.PLAY_GAME
const reset_game = resetGameConstants.RESET_GAME

export const constants = {
  GAME_LOOP
}

export const phaseData = {
  [GAME_LOOP]: {
    id: GAME_LOOP,
    text: GAME_LOOP,
    actions: [in_box, setup_game, play_game, reset_game],
    repeat: () => true
  }
}
export default phaseData
