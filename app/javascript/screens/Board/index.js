import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import EvenStackedFlex from 'components/EvenStackedFlex'

import styles from './styles.css'
import Region, {CityRegion, FrontierRegion, BorderRegion,
  WildernessRegion, LairRegion} from './Region'

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
        <CityRegion {...this.props.city}/>
        <FrontierRegion {...this.props.frontier} />
        <BorderRegion {...this.props.border} />
        <WildernessRegion {...this.props.wilderness} />
        <LairRegion {...this.props.lair} />
      </EvenStackedFlex>
    )
  }
}

Board.propTypes = propTypes

export default Board
