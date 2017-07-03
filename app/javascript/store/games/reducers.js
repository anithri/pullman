import {CALL_API} from 'redux-api-middleware';

const FETCH_GAMES_REQUEST = 'app/fetch_games/request'
const FETCH_GAMES_SUCCESS = 'app/fetch_games/success'
const FETCH_GAMES_FAILURE = 'app/fetch_games/failure'

const FETCH_GAME_REQUEST = 'app/fetch_game/request'
const FETCH_GAME_SUCCESS = 'app/fetch_game/success'
const FETCH_GAME_FAILURE = 'app/fetch_game/failure'

const SHOW_GAME = 'app/show_game'
const EDIT_GAME = 'app/edit_game'
const DELETE_GAME = 'app/delete_game'
const INDEX_GAMES = 'app/index_game'

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
