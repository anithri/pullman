import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired

}

class ResourceBadge extends React.Component {
  render() {
    const {name, value} = this.props
    const myClasses = cx(
        this.props.className,
        styles.resourceBadge,
      styles
    )
    return (
      <div className={myClasses}>
        <h4>{name}<span>{value}</span></h4>
      </div>
    )
  }
}

ResourceBadge.propTypes = propTypes

export default ResourceBadge
