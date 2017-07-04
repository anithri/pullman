import PropTypes from 'prop-types'

export const routeShape = PropTypes.shape({
  path: PropTypes.string.isRequired,
  view: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element
  ]),
  isExact: PropTypes.bool
})

export default routeShape