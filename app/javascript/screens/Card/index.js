import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import cardShape from 'store/card/shape'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  ...cardShape
}

class Card extends React.Component {
  render () {
    const myClasses = cx(
      this.props.className,
      styles.card
    )
    console.log('Card',this.props)
    return (
      <div className={myClasses}>
        <header>
          <h3>{this.props.name}</h3>
          <span>{this.props.cardId}</span>
        </header>
      </div>
    )
  }
}

Card.propTypes = propTypes

export default Card
