import {put, call, take, select} from 'redux-saga/effects'
import {PLAYER} from '../reducers'
import {actions as message} from 'store/messages/reducers'
import {push} from 'react-router-redux'

import {playerOrder} from '../selectors'

function* playerResetSaga () {
  const currentPlayers = yield select(playerOrder)
  yield currentPlayers.map(playerId => put(PLAYER.resetOne(playerId)))
}

function* watchPlayerReset () {
  while (true) {
    yield take(PLAYER.RESET_ALL)
    yield call(playerResetSaga)
  }
}

export default watchPlayerReset
