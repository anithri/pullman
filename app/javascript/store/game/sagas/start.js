import {delay} from 'redux-saga'
import _ from 'lodash'
import {select, put, all, race, call, take} from 'redux-saga/effects'
import {GAME} from '../reducers'
import {PLAYER} from 'store/player/reducers'
import {seats} from '../defaults'
import {allPlayers} from 'store/player/selectors'
import {actions as message} from 'store/messages/reducers'
import {push} from 'react-router-redux'

function* updatePlayer(attr) {
  yield call(PLAYER.update, attr)
}

function* gameStartSaga () {
  yield put(push('/game/start'))
  yield put(GAME.init())
  yield put(message.add('Randomizing everything'))
  // yield put(PLAYER.shufflePersonas())
  // yield put(PLAYER.shuffleSeats())
  yield put(message.add('Getting the Game ready'))
  yield delay(Math.random() * 2000)
  yield delay(Math.random() * 2000)
  yield put(message.add('Seating the players'))
  yield delay(Math.random() * 20000)
  yield put(message.add('Setting up the board'))
  yield delay(Math.random() * 2000)
  yield put(message.add('Final Touches'))
  yield delay(Math.random() * 2000)
}

function* watchGameStart () {
  while (true) {
    yield take(GAME.START)
    const {response, cancel} = yield race({
      task: call(gameStartSaga),
      cancel: take(GAME.QUIT)
    })
    if (cancel) {
      yield put(GAME.isReady())
    }
  }
}

export default watchGameStart
