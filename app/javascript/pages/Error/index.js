import React from 'react'
import cx from 'classnames'
import styles from './Error.css'

class Error extends React.Component {
  render () {
    return (
      <div className={styles.error}>
        <h1>Woot, I'm an error page</h1>
      </div>
    )
  }
}

export default Error