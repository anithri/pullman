import PropTypes from 'prop-types'
import gameLoopData, {constants as gameLoopConstants} from './game_loop'
import inBoxData, {constants as inBoxConstants} from './in_box'
import setupGameData, {constants as setupGameConstants} from './setup_game'
import playGameData, {constants as playGameConstants} from './play_game'
import gameRoundData, {constants as gameRoundConstants} from './game_round'
import playerTurnData, {constants as playerTurnConstants} from './player_turn'
import playerActionData, {constants as playerActionConstants} from './player_action'
import resetGameData, {constants as resetGameConstants} from './reset_game'

export const constants = {
  ...gameLoopConstants,
  ...inBoxConstants,
  ...setupGameConstants,
  ...playGameConstants,
  ...gameRoundConstants,
  ...playerTurnConstants,
  ...playerActionConstants,
  ...resetGameConstants
}

export const VALID_PHASES = Object.values(constants)

export const phaseDataShape = {
  id: PropTypes.oneOf(VALID_PHASES),
  text: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.oneOf(VALID_PHASES)
  ).isRequired
}

export const phaseData = {
  ...gameLoopData,
  ...inBoxData,
  ...setupGameData,
  ...playGameData,
  ...gameRoundData,
  ...playerTurnData,
  ...playerActionData,
  ...resetGameData,
}

export default phaseData


