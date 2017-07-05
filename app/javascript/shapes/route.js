import PropTypes from 'prop-types'
import {elementShape} from 'shapes/element'
export const routeShape = PropTypes.shape({
  path: PropTypes.string.isRequired,
  view: elementShape,
  isExact: PropTypes.bool
})

export default routeShape