const Kowalski = require('../../../')

module.exports = class extends Kowalski.Information {
  static get name () {
    return 'Kowalski:PageVisit'
  }

  constructor (req) {
    super()
    this.method = req.method
    this.path = req.path
  }

  _getInformation () {
    return {
      method: this.method,
      path: this.path
    }
  }

  static serializeInformation (information) {
    const serialized = {}
    information.forEach(info => {
      const { path } = info
      if (!serialized[path]) serialized[path] = 0
      serialized[path]++
    })
    return [new Kowalski.Statistic('Visits per page', serialized)]
  }
}