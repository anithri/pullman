import React from 'react'

import cx from 'classnames'
import playerShape from 'store/player/shape'
import styles from './styles'

import OrigCard from 'screens/Card'
import cardContainer from 'store/card/container'
const Card = cardContainer(OrigCard)

const propTypes = {
  ...playerShape,
}

class Stats extends React.Component {
  render () {
    const {
      className, cards
    } = this.props
    const myClasses = cx(
      className,
      styles.hand
    )
    const allCards = cards.map(card => <Card className={styles.card} cardId={card} key={card} />)
    return (
      <section className={myClasses}>
        {allCards}
      </section>

    )
  }
}

export default Stats
