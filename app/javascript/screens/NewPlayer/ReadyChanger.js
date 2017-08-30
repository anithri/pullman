import React from 'react'
import styles from './NewPlayer.css'
import cx from 'classnames'

const ReadyChanger = (props) => {
  const {isReady, onChange} = props
  const label = isReady ? 'Ready! ☑' : 'Ready? ☐'
  const className = cx(
    styles.readyButton,
    isReady ? styles.ready : styles.notReady
  )

  return (
    <section className={className}>
      <button onClick={() => onChange(!isReady)}>{label}</button>
    </section>
  )
}

export default ReadyChanger
