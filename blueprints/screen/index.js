module.exports = {
  description () {
    return 'Generates a screen (aka a section of a page) component'
  },
  fileMapTokens () {
    return {
      __screen__: (options) => {
        return options.settings.getSetting('screenPath')
      }
    }
  }
}
