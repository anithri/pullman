// import { delay } from 'redux-saga'
import _ from 'lodash'
import { all, put, select, takeEvery } from 'redux-saga/effects'
import {PLAYERS} from './reducers'
import {allPersonas as getAllPersonas} from 'store/persona/selectors'
import {allPlayers} from 'store/player/selectors'

function* helloSaga() {
  console.log('Hello Player Sagas!')
}

function* playerSaga() {
  yield all([
    helloSaga(),
  ])
}

export default playerSaga
