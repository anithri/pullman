import { all} from 'redux-saga/effects'
import {PLAYERS} from './reducers'
import watchPlayerReset from './sagas/reset'

function* initSaga() {
  console.log('Hello Player Sagas!')
}

function* playerSaga() {
  yield all([
    watchPlayerReset(),
  ])
}

export default playerSaga
