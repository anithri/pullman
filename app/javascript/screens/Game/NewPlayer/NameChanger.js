import React from 'react'
import styles from './NewPlayer.css'

class NameChanger extends React.Component {
  constructor (props) {
    super(props)
    this.statusTimeout = null
    this.state = {
      status: 'clean',
      newName: props.name
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.executeSave = this.executeSave.bind(this)
    this.resetStatus = this.resetStatus.bind(this)
  }

  handleOnChange (e) {
    const newName = e.target.value
    const valid = this.props.isValid(newName)
    clearTimeout(this.statusTimeout)
    if (valid) {
      this.setState({
        newName,
        status: 'editing'
      })
      this.statusTimeout = setTimeout(this.handleSave, 1500);
    } else {
      this.setState({
        newName,
        status: 'invalid'
      })
    }
  }

  handleSave () {
    this.setState({
      status: 'saving'
    })
    this.statusTimeout = setTimeout(this.executeSave, 1500)
  }

  executeSave () {
    console.log(this.state)
    this.setState({
      status: 'saved'
    })
    this.props.onChange(this.state.newName)
    this.statusTimeout = setTimeout(this.resetStatus, 500)
  }

  resetStatus () {
    console.log(this.state)
    this.setState({
      status: 'clean'
    })
  }

  render () {
    const {playerId, name, isValid, onChange} = this.props
    const className = styles[this.state.status]

    return (
      <fieldset>
        <legend>Name</legend>
        <input defaultValue={name}
               onChange={this.handleOnChange}
               className={className}
        />
      </fieldset>
    )
  }
}

export default NameChanger