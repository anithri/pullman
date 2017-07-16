import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Summary'

const propTypes = {
  className: PropTypes.string,
  phaseText: PropTypes.string.isRequired
}

class Summary extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.summary
    )
    return (
      <div className={myClasses}>
        <h3>{this.props.phaseText}</h3>
      </div>
    )
  }
}

Summary.propTypes = propTypes

export default Summary
