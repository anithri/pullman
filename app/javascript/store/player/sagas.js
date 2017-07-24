// import { delay } from 'redux-saga'
import _ from 'lodash'
import { all, put, select, takeEvery } from 'redux-saga/effects'
import {actions as playerActions, constants as playerConstants} from './reducers'
import {allPersonas as getAllPersonas} from 'store/persona/selectors'
import {allPlayers} from 'store/player/selectors'

function* helloSaga() {
  console.log('Hello Player Sagas!')
}

function* randomizePersonas() {
  console.log('starting randomize')
  const personas = yield select(getAllPersonas)
  const players = yield select(allPlayers)
  const newPersonas = _.sampleSize(personas, players.length)
  yield players.map((player,idx) => {
    return put(playerActions.assignPersona(player.id,newPersonas[idx].id))
  })
}

function* watchRandomizePersonas() {
  yield takeEvery(playerConstants.PERSONA_RANDOMIZED, randomizePersonas)
}

function* playerSaga() {
  yield all([
    helloSaga(),
    watchRandomizePersonas()
  ])
}

export default playerSaga
