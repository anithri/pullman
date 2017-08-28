import React from 'react'
import cx from 'classnames'

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

