import React from 'react'
import { Provider } from 'react-redux'

import {Helmet} from 'react-helmet';

import createStore from 'store'

const initialState = {
  app: {
    title: 'Wooticus Prime'
  },
  games: {
    items: []
  }
}

const store = createStore(initialState)


// import PropTypes from 'prop-types'
// import cx from 'classnames'
import styles from './App.css'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{initialState.app.title}</title>
            <link rel="canonical" href="http://mysite.com/example"/>
          </Helmet>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}

export default App

