import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

class EvenStackedFlex extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.evenStackedFlex
    )
    return (
      <div className={myClasses}>
        {this.props.children}
      </div>
    )
  }
}

EvenStackedFlex.propTypes = propTypes

export default EvenStackedFlex
