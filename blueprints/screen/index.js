module.exports = {
  description () {
    return 'Generates a screen (aka a section of a page) component'
  },
  fileMapTokens () {
    return {
      __screen__: (options) => {
        console.log('options',options)
        return options.settings.getSetting('screenPath')
      }
    }
  }
}
