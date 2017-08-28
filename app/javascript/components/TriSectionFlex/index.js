import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  left: PropTypes.arrayOf(PropTypes.node).isRequired,
  center: PropTypes.arrayOf(PropTypes.node).isRequired,
  right: PropTypes.arrayOf(PropTypes.node).isRequired
}

class TriSectionFlex extends React.Component {

  render () {
    const myClasses = cx(
      this.props.className,
      styles.triSectionFlex
    )
    return (
      <div className={myClasses}>
        <div className={styles.left}>
          {this.props.left}
        </div>
        <div className={styles.center}>
          {this.props.center}
        </div>
        <div className={styles.right}>
          {this.props.right}
        </div>
      </div>
    )
  }
}

TriSectionFlex.propTypes = propTypes

export default TriSectionFlex