import React from 'react'
import cx from 'classnames'
import GameGrid, {addRegion} from 'components/GameGrid'

import styles from './Game.css'

import OrigGame from 'screens/Game'
import OrigGameMessages from 'screens/Game/Messages'
import OrigGamePlayer from 'screens/Game/Player'
import OrigGameSummary from 'screens/Game/Summary'

const GameMessages = addRegion('messages')(OrigGameMessages)
const GamePlayer1 = addRegion('player1')(OrigGamePlayer)
const GamePlayer2 = addRegion('player2')(OrigGamePlayer)
const GamePlayer3 = addRegion('player3')(OrigGamePlayer)
const GamePlayer4 = addRegion('player4')(OrigGamePlayer)
const GameSummary = addRegion('summary')(OrigGameSummary)
const Game = addRegion('main')(OrigGame)

class HomePage extends React.Component {
  render () {
    return (
      <GameGrid className={styles.game}>
        <GameMessages />
        <GamePlayer1 playerId={1} />
        <GamePlayer2 playerId={2} />
        <GamePlayer3 playerId={3} />
        <GamePlayer4 playerId={4} />
        <GameSummary />
        <Game />
      </GameGrid>
    )
  }
}

export default HomePage
