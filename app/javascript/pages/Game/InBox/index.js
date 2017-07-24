import React from 'react'
import cx from 'classnames'

import makeGrid from 'components/Grid'

import styles from '../Game.css'
import grid from '../grid.css'

const {addGrid, addRegion} = makeGrid(grid,'heroGrid')
const Grid = addGrid('div')

import OrigWelcome from 'screens/Game/Welcome'
import gameContainer from 'store/game/container'
const Welcome = gameContainer(addRegion('main')(OrigWelcome))

import OrigGamePlayer from 'screens/Game/NewPlayer'
import playerContainer from 'store/player/container'
const NWPlayer = playerContainer(addRegion('northWest')(OrigGamePlayer))
const NEPlayer = playerContainer(addRegion('northEast')(OrigGamePlayer))
const SEPlayer = playerContainer(addRegion('southEast')(OrigGamePlayer))
const SWPlayer = playerContainer(addRegion('southWest')(OrigGamePlayer))

class InBox extends React.Component {

  render () {
    const className = cx(styles.game)

    return (
      <Grid className={className} >
        <NWPlayer id='alpha' />
        <NEPlayer id='beta' />
        <SEPlayer id='gamma' />
        <SWPlayer id='delta' />
        <Welcome />
      </Grid>
    )
  }

}


export default InBox
