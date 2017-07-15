import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Messages'

const propTypes = {
  className: PropTypes.string
}

class Messages extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.messages
    )
    return (
      <div className={myClasses}>
        <h3>Messages</h3>
      </div>
    )
  }
}

Messages.propTypes = propTypes

export default Messages
