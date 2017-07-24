import React from 'react'
import cx from 'classnames'

import makeGrid from 'components/Grid'

import styles from '../Game.css'
import grid from '../grid.css'

const {addGrid, addRegion, calcRegion} = makeGrid(grid,'heroGrid')
const Grid = addGrid('div')

import OrigSummary from 'screens/Summary'

// import OrigGameMain from 'screens/Game/Main'
// import gameContainer from 'store/game/reducers'
// const GameMain = gameContainer(addRegion('main')(OrigGameMain))
//
import OrigGameMessages from 'screens/Game/Messages'
import messagesContainer from 'store/messages/container'
const GameMessages = messagesContainer(addRegion('main')(OrigGameMessages))

import OrigGamePlayer from 'screens/Game/Player'
import playerContainer from 'store/player/container'
const GamePlayer = playerContainer(calcRegion('id')(OrigGamePlayer))

// import OrigGameSummary from 'screens/Game/Summary'
// const GameSummary = addRegion('summary')(OrigGameSummary)

class AtStart extends React.Component {

  render () {
    const className = cx(styles.game)

    return (
      <Grid className={className} >
        <GamePlayer id='alpha' />
        <GamePlayer id='beta' />
        <GamePlayer id='gamma' />
        <GamePlayer id='delta' />
        {/*<GameSummary/>*/}
        <GameMessages/>
        {/*<GameMain/>*/}
      </Grid>
    )
  }

}


export default AtStart
