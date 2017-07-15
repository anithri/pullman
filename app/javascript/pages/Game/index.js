import React from 'react'
import cx from 'classnames'
import GameGrid, {addRegion, addPlayerRegion} from 'components/GameGrid'

import styles from './Game.css'

import OrigGame from 'screens/Game'
const Game = addRegion('main')(OrigGame)

import OrigGameMessages from 'screens/Game/Messages'
const GameMessages = addRegion('messages')(OrigGameMessages)

import OrigGamePlayer from 'screens/Game/Player'
import PlayerContainer from 'containers/Player'
const GamePlayer = PlayerContainer(addPlayerRegion(OrigGamePlayer))

const GameSummary = addRegion('summary')(OrigGameSummary)
import OrigGameSummary from 'screens/Game/Summary'

class GamePage extends React.Component {
  render () {
    return (
      <GameGrid className={styles.game}>
        <GamePlayer playerId={1} />
        <GamePlayer playerId={2} />
        <GamePlayer playerId={3} />
        <GamePlayer playerId={4} />
        <GameSummary />
        <Game />
        <GameMessages />
      </GameGrid>
    )
  }
}

export default GamePage
