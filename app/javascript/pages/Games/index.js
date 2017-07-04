import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './Games.css'

import Grid from 'components/Grid'
import Header from 'components/Header'
import GameContainer from 'containers/Game'
import Footer from 'components/Footer'

class Games extends React.Component {
  render () {
    return (
      <Grid className={styles.grid} >
        <Header className={styles.header} />
        <GameContainer className={styles.main} />
        <Footer className={styles.footer} />
      </Grid>
    )
  }
}

export default Games



