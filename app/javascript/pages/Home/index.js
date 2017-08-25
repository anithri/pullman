import React from 'react'

import styles from './Home.css'

import Header from 'components/Header'
import PageContent from './PageContent'
import Footer from 'components/Footer'

class HomePage extends React.Component {
  render () {
    return (
      <div className={styles.Home}>
        <PageContent className={styles.main}/>
        <Header className={styles.header}/>
        <Footer className={styles.footer}/>
      </div>
    )
  }
}

export default HomePage
