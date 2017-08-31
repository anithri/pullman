import React from 'react'
import cx from 'classnames'

import styles from './styles.css'
import TriSectionFlex from 'components/TriSectionFlex'
import {SummaryCard} from 'screens/Card'
import cardContainer from 'store/card/container'
const Card = cardContainer(SummaryCard)

class Region extends React.Component {
  renderCards (cards) {
    return cards.map(card => <Card cardId={card} key={card}/>)
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

