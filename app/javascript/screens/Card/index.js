import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired
}

class Card extends React.Component {
  render () {
    const myClasses = cx(
      this.props.className,
      styles.card
    )
    return (
      <div className={myClasses}>
        <header>
          <h3>{this.props.name}</h3>
        </header>
      </div>
    )
  }
}

Card.propTypes = propTypes

export default Card
