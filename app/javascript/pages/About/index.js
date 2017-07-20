import React from 'react'
import styles from './About.css'

import makeGrid from 'components/Grid'
const {addGrid, addRegion} = makeGrid()
import OrigHeader from 'components/Header'
import OrigPageContent from './PageContent'
import OrigFooter from 'components/Footer'

const Grid = addGrid('div')
const Header = addRegion('header')(OrigHeader)
const Footer = addRegion('footer')(OrigFooter)
const PageContent = addRegion('main')(OrigPageContent)

class AboutPage extends React.Component {
  render () {
    return (
      <Grid className={styles.about}>
        <Header/>
        <PageContent/>
        <Footer/>
      </Grid>
    )
  }
}

export default AboutPage
