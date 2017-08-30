import React from 'react'

import styles from './styles.css'

import OrigSummary from 'screens/Summary'

import OrigGameMessages from 'screens/Messages'
import messagesContainer from 'store/messages/container'

const GameMessages = messagesContainer(OrigGameMessages)

import OrigGamePlayer from 'screens/Player'
import playerContainer from 'store/player/container'
const GamePlayer = playerContainer(OrigGamePlayer)

import OrigGameSummary from 'screens/Summary/AtStart'
import summaryContainer from 'store/summary/container'
const GameSummary = summaryContainer(OrigGameSummary)

import OrigBoard from 'screens/Board'
import boardContainer from 'store/board/container'
const Board = boardContainer(OrigBoard)

class AtStart extends React.Component {

  render () {
    return (
      <div className={styles.atStart}>
        <GamePlayer seat='northWest' className={styles.northWest}/>
        <GamePlayer seat='northEast' className={styles.northEast}/>
        <GamePlayer seat='southEast' className={styles.southEast}/>
        <GamePlayer seat='southWest' className={styles.southWest}/>
        {/*<GameSummary/>*/}
        <div className={styles.summary}>&nbsp;</div>
        <GameMessages className={styles.messages}/>
        <Board className={styles.main}/>
        {/*<GameMain/>*/}
      </div>
    )
  }

}


export default AtStart
