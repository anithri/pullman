import React from 'react'
import styles from './Home.css'

import makeGrid from 'components/Grid'
import grid from './grid.css'
const {addGrid, addRegion} = makeGrid(grid,'default')
const Grid = addGrid('div')

import OrigHeader from 'components/Header'
import OrigPageContent from './PageContent'
import OrigFooter from 'components/Footer'

const Header = addRegion('header')(OrigHeader)
const Footer = addRegion('footer')(OrigFooter)
const PageContent = addRegion('main')(OrigPageContent)

class HomePage extends React.Component {
  render () {
    return (
      <Grid className={styles.Home}>
        <Header/>
        <PageContent/>
        <Footer/>
      </Grid>
    )
  }
}

export default HomePage
