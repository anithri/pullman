import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import EvenStackedFlex from 'components/EvenStackedFlex'

import styles from './styles.css'
import Region, {CityRegion, FrontierRegion, WildernessRegion, LairRegion} from './Region'

const propTypes = {
  className: PropTypes.string
}

class Board extends React.Component {
  render() {
    const myClasses = cx(
      this.props.className,
        styles.board
    )
    return (
      <EvenStackedFlex className={myClasses}>
        <CityRegion left={[]} center={['Tavern']} right={[]}/>
        <FrontierRegion left={[]} center={['Final Keep']} right={[]}/>
        <WildernessRegion left={[]} center={['Danger Pass']} right={[]}/>
        <LairRegion left={[]} center={['Lair']} right={[]}/>
      </EvenStackedFlex>
    )
  }
}

Board.propTypes = propTypes

export default Board
