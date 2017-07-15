import 'react'
import {mapProps, compose} from 'recompose'
import cx from 'classnames'
import styles from './GameGrid.css'
import PropTypes from 'prop-types'


const propTypes = {
  className: PropTypes.string,
  gridRegion: PropTypes.string
}

export function addRegion (region) {
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

export const addPlayerRegion = compose(
    mapProps((props) => {
      const newNames = cx(
        styles.region,
        styles[props.id],
        props.className
      )
      return {
        ...props,
        className: newNames
      }
    })
  )



const myExports = {
  addRegion,
  addPlayerRegion
}


export default myExports