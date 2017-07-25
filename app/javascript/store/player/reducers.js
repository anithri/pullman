import {getPlayersFor} from './defaults'

const DEFAULT_IDS = ['alpha', 'beta', 'gamma', 'delta']

// Constants
const NAME_CHANGED = 'cards/player/name/changed'
const SKIN_CHANGED = 'cards/player/skin/changed'
const READY_CHANGED = 'cards/player/ready/changed'
const PERSONA_ASSIGNED = 'cards/player/persona/assign'
const PERSONA_RANDOMIZED = 'cards/player/persona/randomize'

export const constants = {
  NAME_CHANGED,
  SKIN_CHANGED,
  READY_CHANGED,
  PERSONA_ASSIGNED,
  PERSONA_RANDOMIZED
}

// Action Creator
const changeName = (playerId, newName) => {
  return {
    type: NAME_CHANGED,
    playerId,
    newName
  }
}

const changeSkin = (playerId, newSkin) => {
  return {
    type: SKIN_CHANGED,
    playerId,
    newSkin
  }
}

const changeReady = (playerId, newReady) => {
  return {
    type: READY_CHANGED,
    playerId,
    newReady
  }
}

const assignPersona = (playerId, persona) => {
  return {
    type: PERSONA_ASSIGNED,
    playerId,
    persona
  }
}

export const actions = {
  changeName, changeSkin, changeReady, assignPersona
}

// Reducer
export const defaultState = {
  turnOrder: DEFAULT_IDS,
  all: getPlayersFor(DEFAULT_IDS)
}

const updatePlayer = (currentState, newPlayer) => {
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
    case NAME_CHANGED:
      const p = state.all[action.playerId]
      const renamed = {
        ...p,
        name: action.newName
      }
      return updatePlayer(state,renamed)
    case SKIN_CHANGED:
      const p = state.all[action.playerId]
      const reskinned = {
        ...p,
        skin: action.newSkin
      }
      console.log("SKIN",p,reskinned)

      return updatePlayer(state,reskinned)
    case READY_CHANGED:
      const p = state.all[action.playerId]
      const readiedPlayer = {
        ...p,
        isReady: action.newReady
      }
      return updatePlayer(state, readiedPlayer)
    case PERSONA_ASSIGNED:
      const p = state.all[action.playerId]
      const assigned = {
        ...p,
        persona: action.persona
      }
      return updatePlayer(state, assigned)

    default:
      return state
  }
}
