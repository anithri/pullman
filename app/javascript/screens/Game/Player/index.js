import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Card from 'components/Card'

import styles from './styles'

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired,
  persona: PropTypes.string.isRequired
}

class Player extends React.Component {
  render () {
    const {className, id, name, skin, persona} = this.props
    const myClasses = cx(
      className,
      styles.player,
      styles[id],
    )
    return (
      <Card className={myClasses} skin={skin} >
        <header>
          <h3>{name}</h3>
          <h4>{persona}</h4>
        </header>
        <section>
          Stuff in body
        </section>
        <footer>
          Footer
        </footer>
      </Card>
    )
  }
}

Player.propTypes = propTypes

export default Player
