import React from 'react'

import cx from 'classnames'
import playerShape from 'store/player/shape'
import styles from './styles'

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
    const allCards = cards.map(card => <div key={card}>{card}</div>)
    return (
      <section className={myClasses}>
        {allCards}
      </section>

    )
  }
}

export default Stats
