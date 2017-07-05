import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import Grid,{addRegion} from 'components/Grid'

import OrigHeader from 'components/Header'
import OrigFooter from 'components/Footer'
// BUILD authorization should happen here and should
//       apply policy to the routes to eliminate those we don't use
import currentRoutes  from './routes'

const Header = addRegion('Header')(OrigHeader)
const GamesRoutes = addRegion('Main')(currentRoutes)
const Footer = addRegion('Footer')(OrigFooter)

class GamesPage extends React.Component {
  render () {
    console.log('GamePage#props',this.props)
    return (
      <Grid layout='app' >
        <Header />
        <GamesRoutes match={this.props.match}/>
        <Footer />
      </Grid>
    )
  }
}

export default GamesPage