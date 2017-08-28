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
        <CityRegion left={['Alchemy Shop','Sword Shoppe']} center={['Tavern']} right={['Ye Old Magick Shop']}/>
        <FrontierRegion left={['Fairy Circle']} center={['Final Keep']} right={['Brawn\'s Farm']}/>
        <BorderRegion left={['Dragon Den']} center={['Soot Hills']} right={['Brawn\'s Farm']}/>
        <WildernessRegion left={[]} center={['Danger Pass']} right={['Chasm' +        ' of Death']}/>
        <LairRegion left={[]} center={['the Lair']} right={[]}/>
      </EvenStackedFlex>
    )
  }
}

Board.propTypes = propTypes

export default Board
