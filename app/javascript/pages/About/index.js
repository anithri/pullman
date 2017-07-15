import React from 'react'
import styles from './About.css'

import Grid, {addRegion} from 'components/Grid'
import OrigHeader from 'components/Header'
import OrigPageContent from './PageContent'
import OrigFooter from 'components/Footer'

const Header = addRegion('header')(OrigHeader)
const Footer = addRegion('footer')(OrigFooter)
const PageContent = addRegion('main')(OrigPageContent)

class AboutPage extends React.Component {
  render () {
    return (
      <Grid layout="app" className={styles.about}>
        <Header/>
        <PageContent/>
        <Footer/>
      </Grid>
    )
  }
}

export default AboutPage
