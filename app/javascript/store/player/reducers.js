import {getPlayersFor} from './defaults'

const DEFAULT_PLAYER_IDS = ['alpha', 'beta', 'gamma', 'delta']

// Constants
const PLAYER_NAME_CHANGED = 'cards/player/name/changed'
const PLAYER_SKIN_CHANGED = 'cards/player/skin/changed'
const PLAYER_READY_CHANGED = 'cards/player/ready/changed'

export const constants = {
  PLAYER_NAME_CHANGED,
  PLAYER_SKIN_CHANGED,
  PLAYER_READY_CHANGED
}

// Action Creator
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

const changePlayerReady = (playerId, newReady) => {
  return {
    type: PLAYER_READY_CHANGED,
    playerId,
    newReady
  }
}

export const actions = {
  changePlayerName, changePlayerSkin, changePlayerReady
}

// Reducer
export const defaultState = {
  turnOrder: DEFAULT_PLAYER_IDS,
  all: getPlayersFor(DEFAULT_PLAYER_IDS)
}

const updatePlayer = (newPlayer, currentState) => {
  return {
    ...currentState,
    all: {
      ...currentState.all,
      [newPlayer.id]: newPlayer
    }
  }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case PLAYER_NAME_CHANGED:
      const renamedPlayer = {
        ...state.all[action.playerId],
        name: action.newName
      }
      return updatePlayer(renamedPlayer,state)
    case PLAYER_SKIN_CHANGED:
      const reskinnedPlayer = {
        ...state.all[action.actionId],
        skin: action.newSkin
      }
      return updatePlayer(reskinnedPlayer, state)
    case PLAYER_READY_CHANGED:
      const readiedPlayer = {
        ...state.all[action.playerId],
        isReady: action.newReady
      }
      return updatePlayer(readiedPlayer, state)
    default:
      return state
  }
}
