import {CALL_API} from 'redux-api-middleware';

const FETCH_GAMES_REQUEST = 'app/fetch_games/request'
const FETCH_GAMES_SUCCESS = 'app/fetch_games/success'
const FETCH_GAMES_FAILURE = 'app/fetch_games/failure'

// Constants

export const constants = {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_FAILURE
}

// Action Creators

function fetchGames () {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:3000/games.json',
      method: 'GET',
      types: [FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILURE]
    }
  }
}

export const actions = {
  fetchGames
}

// Reducer
export const defaultState = {
  items: {}
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_GAMES_SUCCESS:
      const items = {...state.items}
      action.payload.games.forEach(item => {
        items[item.id] = item
      })
      return {
        ...state,
        items
      }
    default:
      return state
  }
}
