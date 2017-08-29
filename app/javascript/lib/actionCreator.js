import _reduce from 'lodash/reduce'

export const payloadVal = (type, payloadName = 'payload') => (payload = {}) => ({type, [payloadName]:payload})

export const onlyType = (type) => () => ({type})
export const singleVal = (type, attr) => val => ({type, [attr]: val})
export const staticVals = (type, vals) => () => ({type, ...vals})
export const spreadVals = (type) => (vals = {}) => ({type, ...vals})
export const doubleVal = (type, first, second) => (one, two) => ({
  type,
  [first]: one,
  [second]: two
})

const define = {
  payloadVal,
  onlyType,
  singleVal,
  staticVals,
  spreadVals,
  doubleVal
}


export const constCreator = (prefix, actions) => {
  const constReducer = (obj, action) => {
    const actUp = action.toUpperCase().replace('/', '_')
    const actDown = action.toLowerCase()
    const path = prefix + actDown
    obj[actUp] = path
    return obj
  }

  return _reduce(actions, constReducer, {})
}


export default define

