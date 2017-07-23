// import { delay } from 'redux-saga'
import { all } from 'redux-saga/effects'
// import {constants as gameConstants} from './reducers'

function* helloSaga() {
  console.log('Hello Player Sagas!')
}

function* playerSaga() {
  yield all([
    helloSaga()
  ])
}

export default playerSaga
