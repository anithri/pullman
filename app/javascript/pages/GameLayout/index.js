import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.css'

import Grid from '../../components/Grid'
import Header from '../../components/Header'
import GameContainer from '../../containers/Game'
import Footer from '../../components/Footer'


class GameLayout extends React.Component {
  render () {
    return (
      <Grid className={styles.grid} >
        <Header className={styles.header}/>
        <GameContainer className={styles.game} />
        <Footer className={styles.footer}/>
      </Grid>
    )
  }
}

export default GameLayout



