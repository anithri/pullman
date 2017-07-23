import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './NewPlayer'
import SkinChanger from './SkinChanger'
import NameChanger from './NameChanger'

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired
}

class NewPlayer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className, id, name, skin, otherSkins,
      doSkinChange, doNameChange, isNameValid
    } = this.props
    const myClasses = cx(
      className,
      styles.player,
      styles[id],
      `card-${skin}`
    )

    return (
      <article className={myClasses}>
        <header>
          <h3>{name}</h3>
        </header>
        <NameChanger onChange={doNameChange}
                     playerId={id}
                     name={name}
                     isValid={isNameValid}
        />
        <SkinChanger skin={skin}
                     otherSkins={otherSkins}
                     onChange={doSkinChange}

        />

        <section className={styles.readyButton}>
          <button>Ready!</button>
        </section>
      </article>
    )
  }
}

NewPlayer.propTypes = propTypes

export default NewPlayer
