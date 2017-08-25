import React from 'react'
import styles from './styles.css'

import Header from 'components/Header'
import PageContent from './PageContent'
import Footer from 'components/Footer'

class AboutPage extends React.Component {
  render () {
    return (
      <div className={styles.about}>
        <Header className={styles.header}/>
        <PageContent className={styles.main}/>
        <Footer className={styles.footer}/>
      </div>
    )
  }
}

export default AboutPage
