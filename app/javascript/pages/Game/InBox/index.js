import React from 'react'
import cx from 'classnames'
import {withProps} from 'recompose'
import _ from 'lodash'
import makeGrid from 'components/Grid'

import styles from '../Game.css'
import grid from '../grid.css'

import OrigWelcome from 'screens/Game/Welcome'
import gameContainer from 'store/game/container'
import OrigGamePlayer from 'screens/Game/NewPlayer'
import playerContainer from 'store/player/container'

const {addGrid, addRegion} = makeGrid(grid, 'heroGrid')
const Grid = addGrid('div')
const Welcome = gameContainer(addRegion('main')(OrigWelcome))

const NorthWest = withProps({seat: 'northWest'})(playerContainer(addRegion('northWest')(OrigGamePlayer)))
const NorthEast = withProps({seat: 'northEast'})(playerContainer(addRegion('northEast')(OrigGamePlayer)))
const SouthEast = withProps({seat: 'southEast'})(playerContainer(addRegion('southEast')(OrigGamePlayer)))
const SouthWest = withProps({seat: 'southWest'})(playerContainer(addRegion('southWest')(OrigGamePlayer)))

class InBox extends React.Component {

  render () {
    const className = cx(styles.game)

    return (
      <Grid className={className}>
        <NorthWest/>
        <NorthEast/>
        <SouthEast/>
        <SouthWest/>
        <Welcome/>
      </Grid>
    )
  }
}

export default InBox
