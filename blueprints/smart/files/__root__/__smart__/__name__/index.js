import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

class <%= pascalEntityName %> extends Component {
  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

<%= pascalEntityName %>.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>);
