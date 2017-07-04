import 'react'
import {mapProps, compose} from 'recompose'
import cx from 'classnames'
import styles from './Grid.css'
import PropTypes from 'prop-types'

const propTypes = {
  className: PropTypes.string,
  gridRegion: PropTypes.string
}

function addRegion (region) {
  return compose(
    mapProps(({className}) => {
      const newNames = cx(
        styles.region,
        styles[region],
        className
      )
      return {className: newNames}
    })
  )
}

export default addRegion