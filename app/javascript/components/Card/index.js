import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  withComponent: PropTypes.node,
  children: PropTypes.arrayOf(PropTypes.node),
  skin: PropTypes.string
}

class Card extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.card,
       `card-${this.props.skin}`

    )
    const MyCard = this.props.withComponent
    return (
      <MyCard className={myClasses}>
        {this.props.children}
      </MyCard>
    )
  }
}

Card.propTypes = propTypes
Card.defaultProps = {
  withComponent: 'article'
}
export default Card
