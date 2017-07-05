import React from 'react'
import PropTypes from 'prop-types'
import {compose, withProps} from 'recompose'

class Nester extends React.Component {
  renderItems(items, itemComponent) {
    return items.map(item => renderItem(item,itemComponent))
  }

  renderItem(item,Component) {
    return (
      <Component className={item.className}
                 key={item.key}>
        {item.value}
      </Component>
    )
  }

  render() {
    const {items, className,
           itemComponent, wrapperComponent} = this.props
    const cells = this.renderRows(items,itemComponent)
    const Wrapper = wrapperComponent
    return (
      <Wrapper className={className}>
        {rows}
      </Wrapper>
    )
  }

}

Nester.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    visible: PropTypes.bool
  })),
  className: PropTypes.string,
  nest: elementShape,
  cell: elementShape
}

export function  nestWith(nest,cell) {
  return compose(
    withProps({
      nest,
      cell
    })
  )(Nester)
}
const THead = nestsWith('thead','tr')



const Headers = nestWith(thead,)



export default Nester
