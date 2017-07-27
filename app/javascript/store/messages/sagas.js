import { all, takeEvery } from 'redux-saga/effects'

const logThis = ({type}) => type && type.startsWith('cards/')

function* consoleLog(action) {
  console.log('sagaLog:', action)
}

function* watchConsoleLog() {
  yield takeEvery(logThis, consoleLog)
}

function* messagesSaga() {
  yield all([,
    watchConsoleLog()
  ])
}

export default messagesSaga
