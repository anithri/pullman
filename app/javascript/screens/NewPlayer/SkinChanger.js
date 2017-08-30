import React from 'react'
import {skins} from 'lib/skins'
import styles from './NewPlayer'

const SkinOption = (props) => {
  const inUse = (props.inUse.indexOf(props.skin) !== -1) ? 'disabled' : false
  const {skin} = props
  const className = inUse ? 'skin-disabled' : `highlight-${skin}`
  const label = skin.split('-').map(w => `${w[0].toUpperCase()}${w.slice(1)}`).join(' ')
  return (
    <option value={skin}
            disabled={inUse}
            className={className}>
      {label}
    </option>
  )
}

class SkinChanger extends React.Component {
  render () {
    const {otherSkins,  skin, onChange} = this.props
    const skinOptions = skins.map(s => (
      <SkinOption key={s} skin={s} inUse={otherSkins}/>
    ))

    return (
      <fieldset>
        <legend>Theme</legend>
        <select onChange={(e) => onChange(e.target.value)}
                value={skin}
                className={`highlight-${skin}`}>
          {skinOptions}
        </select>
      </fieldset>
    )
  }
}

export default SkinChanger