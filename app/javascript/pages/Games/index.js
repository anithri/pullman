import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import Grid,{addRegion} from 'components/Grid'

import OrigHeader from 'components/Header'
import OrigGameContainer from 'containers/Game'
import OrigFooter from 'components/Footer'

const Header = addRegion('Header')(OrigHeader)
const GameContainer = addRegion('Main')(OrigGameContainer)
const Footer = addRegion('Footer')(OrigFooter)

class Games extends React.Component {
  render () {
    return (
      <Grid layout='app' >
        <Header />
        <GameContainer />
        <Footer />
      </Grid>
    )
  }
}

export default Games



