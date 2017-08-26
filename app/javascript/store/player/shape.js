import PropTypes from 'prop-types'

export const player = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skin: PropTypes.string.isRequired,
  seat: PropTypes.string.isRequired,
  persona: PropTypes.string.isRequired,
  isReady: PropTypes.bool,
  mystery: PropTypes.number.isRequired,
  magic: PropTypes.number.isRequired,
  mayhem: PropTypes.number.isRequired,
  monies: PropTypes.number.isRequired,
  morale: PropTypes.number.isRequired,
}

export default player