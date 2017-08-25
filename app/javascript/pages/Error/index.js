import React from 'react'
import Link from 'react-router-redux-dom-link'

import styles from './styles.css'

class Error extends React.Component {
  render () {
    return (
      <div className={styles.error}>
        <div className={styles.message}>
          <h1>
            Woot, I'm an error page
          </h1>
          <Link to="/" >Home</Link>
        </div>

      </div>
    )
  }
}

export default Error