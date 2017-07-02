import React from 'react'
import {Helmet} from "react-helmet";
// import PropTypes from 'prop-types'
// import cx from 'classnames'
 import styles from './App.css'

class App extends React.Component {
  render () {
    return (
      <div className={styles.app}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wooticus Prime</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        {this.props.children}
      </div>
    )
  }
}

export default App

