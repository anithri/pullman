import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import addClassName from 'utils/addClassName'

import styles from './Table.css'

import OrigHeaders from './Headers'
const Headers = addClassName(styles.headers)(OrigHeaders)
import OrigBody from './Body'
const Body = addClassName(styles.body)(OrigBody)


const propTypes = {
}

class Table extends React.Component {

  render () {
    const classNames = cx(styles.table, this.props.className)
    return (
      <table className={classNames}>
        <Headers cols={}/>
        <Body rows={} cols={}/>
      </table>
    )
  }
}

Table.propTypes = propTypes

export default Table