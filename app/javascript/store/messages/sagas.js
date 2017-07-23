import { all, takeEvery } from 'redux-saga/effects'

const logThis = ({type}) => type.startsWith('cards/')
export function* helloSaga() {
  console.log('Hello Message Sagas!')
}

function* consoleLog(action) {
  console.log('sagaLog:', action)
}
function* watchConsoleLog() {

  yield takeEvery(logThis, consoleLog)
}
function* messagesSaga() {
  yield all([,
    helloSaga(),
    watchConsoleLog()
  ])
}

export default messagesSaga
