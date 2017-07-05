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
    mapProps((props) => {
      const newNames = cx(
        styles.region,
        styles[region],
        props.className
      )
      return {
        ...props,
        className: newNames
      }
    })
  )
}

export default addRegion