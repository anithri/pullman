import React from 'react'
import cx from 'classnames'

import makeGrid from 'components/Grid'

import styles from '../Game.css'
import grid from '../grid.css'

const {addGrid, addRegion} = makeGrid(grid,'upperThird')
const Grid = addGrid('div')

import OrigSummary from 'screens/Summary'

import OrigGameMessages from 'screens/Messages'
import messagesContainer from 'store/messages/container'
const GameMessages = messagesContainer(addRegion('main')(OrigGameMessages))

import OrigGamePlayer from 'screens/Game/Player'
import playerContainer from 'store/player/container'
const NWPlayer = playerContainer(addRegion('northWest')(OrigGamePlayer))
const NEPlayer = playerContainer(addRegion('northEast')(OrigGamePlayer))
const SEPlayer = playerContainer(addRegion('southEast')(OrigGamePlayer))
const SWPlayer = playerContainer(addRegion('southWest')(OrigGamePlayer))



import OrigGameSummary from 'screens/Summary'
const GameSummary = addRegion('upper')(OrigGameSummary)

class AtStart extends React.Component {

  render () {

    const className = cx(styles.game)

    return (
      <Grid className={className} >
        <NWPlayer id='alpha' />
        <NEPlayer id='beta' />
        <SEPlayer id='gamma' />
        <SWPlayer id='delta' />
        <GameSummary/>
        <GameMessages/>
        {/*<GameMain/>*/}
      </Grid>
    )
  }

}


export default AtStart
