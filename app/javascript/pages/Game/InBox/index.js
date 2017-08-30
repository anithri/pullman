import React from 'react'

import styles from './styles.css'

import OrigGamePlayer from 'screens/NewPlayer'
import playerContainer from 'store/player/container'
const GamePlayer = playerContainer(OrigGamePlayer)

import gameContainer from 'store/game/container'
import OrigWelcome from 'screens/Game/Welcome'
const Welcome = gameContainer(OrigWelcome)

class InBox extends React.Component {
  render () {
    return (
      <div className={styles.inBox}>
        <GamePlayer seat='northWest' className={styles.northWest}/>
        <GamePlayer seat='northEast' className={styles.northEast}/>
        <GamePlayer seat='southEast' className={styles.southEast}/>
        <GamePlayer seat='southWest' className={styles.southWest}/>
        <Welcome className={styles.main}/>
      </div>
    )
  }
}

export default InBox
