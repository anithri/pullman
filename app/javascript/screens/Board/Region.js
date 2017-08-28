import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import addClassName from 'lib/addClassName'

import styles from './styles.css'
import TriSectionFlex from 'components/TriSectionFlex'
import Card from 'screens/Card'

class Region extends React.Component {
  renderCards (cards) {
    console.log('renderCards', cards)
    return cards.map(card => <Card name={card.name} key={card.id}/>)
  }
  render () {
    const myClasses = cx(styles.region, this.props.className)

    return (
      <TriSectionFlex className={myClasses}
                      left={this.renderCards(this.props.left)}
                      center={this.renderCards(this.props.center)}
                      right={this.renderCards(this.props.right)}
      />
    )
  }
}

export default Region

export const CityRegion = addClassName(styles.city)(Region)
export const FrontierRegion = addClassName(styles.frontier)(Region)
export const BorderRegion = addClassName(styles.border)(Region)
export const WildernessRegion = addClassName(styles.wilderness)(Region)
export const LairRegion = addClassName(styles.lair)(Region)

