import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import Grid,{addRegion} from 'components/Grid'

import OrigHeader from 'components/Header'
import OrigFooter from 'components/Footer'
import GameRoutes from './routes'

const Header = addRegion('Header')(OrigHeader)
const GameContent = addRegion('Main')(GameRoutes)
const Footer = addRegion('Footer')(OrigFooter)

class Games extends React.Component {
  render () {
    return (
      <Grid layout='app' >
        <Header />
        <GameContent match={this.props.match}/>
        <Footer />
      </Grid>
    )
  }
}

export default Games



