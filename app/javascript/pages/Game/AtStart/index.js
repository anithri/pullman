import React from 'react'
import cx from 'classnames'

import makeGrid from 'components/Grid'

import styles from '../Game.css'
import grid from '../grid.css'
import {withProps} from 'recompose'

const {addGrid, addRegion} = makeGrid(grid, 'upperThird')
const Grid = addGrid('div')

import OrigSummary from 'screens/Summary'

import OrigGameMessages from 'screens/Messages'
import messagesContainer from 'store/messages/container'

const GameMessages = messagesContainer(addRegion('main')(OrigGameMessages))

import OrigGamePlayer from 'screens/Game/Player'
import playerContainer from 'store/player/container'

const playerRegion = ['northWest', 'northEast', 'southEast', 'southWest']

const NorthWest = withProps({seat: 'northWest'})(playerContainer(addRegion(playerRegion.shift())(OrigGamePlayer)))
const NorthEast = withProps({seat: 'northEast'})(playerContainer(addRegion(playerRegion.shift())(OrigGamePlayer)))
const SouthEast = withProps({seat: 'southEast'})(playerContainer(addRegion(playerRegion.shift())(OrigGamePlayer)))
const SouthWest = withProps({seat: 'southWest'})(playerContainer(addRegion(playerRegion.shift())(OrigGamePlayer)))


import OrigGameSummary from 'screens/Summary/AtStart'
import summaryContainer from 'store/summary/container'

const GameSummary = summaryContainer(addRegion('upper')(OrigGameSummary))

class AtStart extends React.Component {

  render () {

    const className = cx(styles.game)

    return (
      <Grid className={className}>
        <NorthWest/>
        <NorthEast/>
        <SouthEast/>
        <SouthWest/>
        <GameSummary/>
        <GameMessages/>
        {/*<GameMain/>*/}
      </Grid>
    )
  }

}


export default AtStart
