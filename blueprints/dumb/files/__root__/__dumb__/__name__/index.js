import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string
}

class <%= pascalEntityName %> extends React.Component {
  render() {
    const myClasses = cx(
        this.props.className,
        styles.<%= camelEntityName %>
    )
    return (
      <div className={myClasses}>

      </div>
    )
  }
}

<%= pascalEntityName %>.propTypes = propTypes

export default <%= pascalEntityName %>
