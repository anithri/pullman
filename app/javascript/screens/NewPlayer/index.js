import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './NewPlayer'
import SkinChanger from './SkinChanger'
import NameChanger from './NameChanger'
import ReadyChanger from './ReadyChanger'

const propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired,
  otherSkins: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  doSkinChange: PropTypes.func.isRequired,
  doNameChange: PropTypes.func.isRequired,
  isNameValid: PropTypes.func.isRequired,
  doReadyChange: PropTypes.func.isRequired,
}

class NewPlayer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className, id, name, skin, isReady, otherSkins,
      doSkinChange, doNameChange, isNameValid, doReadyChange
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
        <ReadyChanger isReady={isReady}
                      onChange={doReadyChange} />

      </article>
    )
  }
}

NewPlayer.propTypes = propTypes

export default NewPlayer
