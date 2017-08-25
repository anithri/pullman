import {mapProps} from 'recompose'
import cx from 'classnames'

const addClassName = (newClassName) => {
  return mapProps((origProps) => {
    const className = cx(origProps.className,newClassName)
    return {
      ...origProps,
      className
    }
  })
}
export default addClassName