import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  left: PropTypes.arrayOf(PropTypes.string).isRequired,
  center: PropTypes.arrayOf(PropTypes.string).isRequired,
  right: PropTypes.arrayOf(PropTypes.string).isRequired
}

const Card = (props) => {
  return (
    <div className={styles.card}>{props.name}</div>
  )
}

class TriSectionFlex extends React.Component {
  renderCards (cards) {
    return cards.map(card => <Card name={card} key={card}/>)
  }

  render () {
    const myClasses = cx(
      this.props.className,
      styles.triSectionFlex
    )
    return (
      <div className={myClasses}>
        <div className={styles.left}>
          {this.renderCards(this.props.left)}
        </div>
        <div className={styles.center}>
          {this.renderCards(this.props.center)}
        </div>
        <div className={styles.right}>
          {this.renderCards(this.props.right)}
        </div>
      </div>
    )
  }
}

TriSectionFlex.propTypes = propTypes

export default TriSectionFlex
