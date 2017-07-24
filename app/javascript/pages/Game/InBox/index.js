import React from 'react'
import cx from 'classnames'

import makeGrid from 'components/Grid'

import styles from '../Game.css'
import grid from '../grid.css'

const {addGrid, addRegion, calcRegion} = makeGrid(grid,'heroGrid')
const Grid = addGrid('div')

import OrigWelcome from 'screens/Game/Welcome'
import gameContainer from 'store/game/container'
const Welcome = gameContainer(addRegion('main')(OrigWelcome))

import OrigGamePlayer from 'screens/Game/NewPlayer'
import playerContainer from 'store/player/container'
const GamePlayer = playerContainer(calcRegion('id')(OrigGamePlayer))

class InBox extends React.Component {

  render () {
    const className = cx(styles.game)

    return (
      <Grid className={className} >
        <GamePlayer id='alpha' />
        <GamePlayer id='beta' />
        <GamePlayer id='gamma' />
        <GamePlayer id='delta' />
        <Welcome />
      </Grid>
    )
  }

}


export default InBox
