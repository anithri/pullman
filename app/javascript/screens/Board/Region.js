import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import addClassName from 'lib/addClassName'

import styles from './styles.css'
import TriSectionFlex from 'components/TriSectionFlex'

const propTypes = {
  className: PropTypes.string,
  cards: PropTypes.array,
  left: PropTypes.arrayOf(PropTypes.string),
  right: PropTypes.arrayOf(PropTypes.string),
  center: PropTypes.arrayOf(PropTypes.string).isRequired
}

class Region extends React.Component {
  render () {
    const myClasses = cx(styles.region, this.props.className)

    return (
      <TriSectionFlex className={myClasses}
                      left={this.props.left}
                      center={this.props.center}
                      right={this.props.right}
      />
    )
  }
}

Region.propTypes = propTypes

export default Region

export const CityRegion = addClassName(styles.city)(Region)
export const FrontierRegion = addClassName(styles.frontier)(Region)
export const WildernessRegion = addClassName(styles.wilderness)(Region)
export const LairRegion = addClassName(styles.lair)(Region)

