import {put, call, take, select} from 'redux-saga/effects'
import _shuffle from 'lodash/shuffle'

import {PLAYER} from '../reducers'
import {actions as message} from 'store/messages/reducers'
import {push} from 'react-router-redux'

import {playerOrder} from '../selectors'
import defaultPersona from 'store/persona/defaults'

const personas = defaultPersona()

const assignPersona = (playerId, persona) => {
  return PLAYER.update(playerId, {
    persona: persona,
    ...personas[persona].startingValues
  })
}

function* playerResetSaga () {
  const currentPlayers = yield select(playerOrder)
  const allPersonas = _shuffle(Object.keys(personas))
  yield currentPlayers.map(playerId => put(PLAYER.resetOne(playerId)))
  yield currentPlayers.map((playerId, i) => put(assignPersona(playerId, allPersonas[i])))

}

function* watchPlayerReset () {
  while (true) {
    yield take(PLAYER.RESET_ALL)
    yield call(playerResetSaga)
  }
}

export default watchPlayerReset
