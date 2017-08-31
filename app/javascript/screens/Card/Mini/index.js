import React from 'react'
import cx from 'classnames'

import styles from '../styles.css'

class Mini extends React.Component {
  render () {
    const myClasses = cx(
      this.props.className,
      styles.card,
      styles.mini
    )
    return (
      <div className={myClasses}>
        <header>
          <h3>{this.props.name}</h3>
        </header>
      </div>
    )
  }
}
Mini.propTypes = {}
export default Mini
