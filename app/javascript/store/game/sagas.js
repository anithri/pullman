import {select, put, all, race, call, take} from 'redux-saga/effects'
import watchGameStart from './sagas/start'
import watchGameQuit from './sagas/quit'

function* gameSaga () {
  yield all([
    watchGameStart(),
    watchGameQuit()
  ])
}

export default gameSaga
