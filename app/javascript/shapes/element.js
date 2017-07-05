import PropTypes from 'prop-types'

export const elementShape = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.element
])

export const elementsShape = PropTypes.arrayOf(elementShape)

export default {
  elementShape,
  elementsShape
}

