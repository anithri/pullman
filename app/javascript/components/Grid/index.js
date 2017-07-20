import {mapProps, compose} from 'recompose'
import cx from 'classnames'
import defaultGrid from './defaultGrid.css'

import addClassName from 'utils/addClassName'


export function addGrid (styles = defaultGrid, grid = 'default', gridClass = 'grid') {
  return addClassName(cx(
    styles[grid],
    styles[gridClass]
  ))
}

export function addRegion (styles = defaultGrid, region, regionClass = 'region') {
  return addClassName(cx(
    styles[regionClass],
    styles[region]
  ))
}

export function addRegionVia (styles = defaultGrid, regionProp, regionWrapper = 'region') {
  return compose(
    mapProps((props) => {
      const className = cx(
        styles[regionWrapper],
        styles[props[regionProp]],
        props.className
      )
      return {
        ...props,
        className
      }
    })
  )
}


export function makeGrid (styles, grid = 'default',
                          gridWrapper = 'grid', regionWrapper = 'region') {
  return {
    addGrid: addGrid(styles, grid, gridWrapper),
    addRegion: (region) => {
      return addRegion(styles, region, regionWrapper)
    },
    calcRegion: (regionProp, extraClasses = '') => {
      return addRegionVia(styles, regionProp, regionWrapper)
    }
  }
}

export default makeGrid