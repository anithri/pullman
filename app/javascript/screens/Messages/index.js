import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Messages'

const propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired

}

class Messages extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.messages
    )
    const list = this.props.messages.map((msg,idx) => (<li key={idx}>{msg}</li>))
    return (
      <div className={myClasses}>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

Messages.propTypes = propTypes

export default Messages
