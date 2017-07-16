import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './<%= camelEntityName %>'

const propTypes = {
  className: PropTypes.string
}

class <%= pascalEntityName %> extends React.Component {
  render() {
    const myClasses = cx(
        props.className,
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