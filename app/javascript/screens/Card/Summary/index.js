import React from 'react'
import cx from 'classnames'

import styles from './styles.css'

class Summary extends React.Component {
  render () {
    const myClasses = cx(
      this.props.className,
      styles.summary,
      this.props.cardClass
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
Summary.propTypes = {}
export default Summary
