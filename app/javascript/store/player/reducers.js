import {getPlayersFor} from './defaults'

// Constants

const PLAYER_NAME_CHANGED = 'card/player/name/changed'
const PLAYER_SKIN_CHANGED = 'card/player/skin/changed'
const PLAYER_READY_CHANGED = 'card/player/ready/changed'

const PLAYER_TURN_ENDED = 'card/player/player_turn_ended'
const DEFAULT_PLAYER_IDS = ['alpha', 'beta', 'gamma', 'delta']

export const constants = {
  PLAYER_TURN_ENDED,
  PLAYER_NAME_CHANGED,
  PLAYER_SKIN_CHANGED,
  PLAYER_READY_CHANGED

}

// Action CreatoIdrIds

const changePlayerName = (playerId, newName) => {
  return {
    type: PLAYER_NAME_CHANGED,
    playerId,
    newName
  }
}

const changePlayerSkin = (playerId, newSkin) => {
  return {
    type: PLAYER_SKIN_CHANGED,
    playerId,
    newSkin
  }
}


const endPlayerTurn = () => {
  return {type: PLAYER_TURN_ENDED}
}

export const actions = {
  endPlayerTurn, changePlayerName, changePlayerSkin
}


// Reducer
export const defaultState = {
  turnOrder: DEFAULT_PLAYER_IDS,
  all: getPlayersFor(DEFAULT_PLAYER_IDS)
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case PLAYER_TURN_ENDED:
      const currentOrder = state.turnOrder
      const turnOrder = [...currentOrder.slice(1), currentOrder[0]]
      return {...state, turnOrder}
    case PLAYER_NAME_CHANGED:
      const renamedPlayer = state.all[action.playerId]
      renamedPlayer.name = action.newName
      return {
        ...state,
        all: {
          ...state.all,
          [action.playerId]: renamedPlayer
        }
      }
    case PLAYER_SKIN_CHANGED:
      const reskinnedPlayer = state.all[action.playerId]
      reskinnedPlayer.skin = action.newSkin
      return {
        ...state,
        all: {
          ...state.all,
          [action.playerId]: reskinnedPlayer
        }
      }

    default:
      return state
  }
}
