const Kowalski = require('../../..')

module.exports = class extends Kowalski.Information {
  static get name () {
    return 'Kowalski:UTM'
  }

  constructor (req) {
    super()
    const {
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
      utm_term: term,
      utm_content: content
    } = req.query

    if (!source) return Kowalski.Information.NoInformation
    if (!medium) return Kowalski.Information.NoInformation
    if (!campaign) return Kowalski.Information.NoInformation
    if (req.method !== 'GET') return Kowalski.Information.NoInformation

    this.source = source
    this.medium = medium
    this.campaign = campaign
    this.term = term
    this.content = content
    this.path = req.path
  }

  get _data () {
    return {
      source: this.source,
      medium: this.medium,
      term: this.term,
      content: this.content,
      campaign: this.campaign,
      path: this.path
    }
  }

  static fromObject ({ source, medium, term, content, campaign, path }) {
    return Object.assign(Object.create(this.prototype), { source, medium, term, content, campaign, path })
  }
}
