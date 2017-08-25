import React from 'react'
import {Provider} from 'react-redux'
import {Helmet} from 'react-helmet';

import createStore, {APP_HISTORY} from 'store'
import initialState from 'store/initial_state.json'
import PageRoutes from 'pages/routes'

import styles from './styles.css'

const store = createStore(initialState)

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
          <PageRoutes history={APP_HISTORY}/>
        </div>
      </Provider>
    )
  }
}

export default App
