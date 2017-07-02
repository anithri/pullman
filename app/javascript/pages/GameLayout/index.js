import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './GameLayout.css'

import App from '../../pages/App'
import Grid from '../../components/Grid'
import Header from '../../components/Header'
import GameContainer from '../../containers/Game'
import Footer from '../../components/Footer'

class GameLayout extends React.Component {
  render () {
    console.log('styles',styles)
    return (
      <App>
        <Grid className={styles.grid} >
          <Header className={styles.header} />
          <GameContainer className={styles.main} />
          <Footer className={styles.footer} />
        </Grid>
      </App>
    )
  }
}

export default GameLayout



