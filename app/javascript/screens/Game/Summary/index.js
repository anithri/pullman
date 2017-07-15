import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Summary'

const propTypes = {
  className: PropTypes.string
}

class Summary extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.summary
    )
    return (
      <div className={myClasses}>
        <h3>Summary</h3>
      </div>
    )
  }
}

Summary.propTypes = propTypes

export default Summary
