class SubApp {
  constructor (obj) {
    try {
      this.id = obj.id
      this.name = obj.name
      this.icon = {
        type: obj.icon.type,
        value: obj.icon.value
      }
      this.navRef = obj.isBundled
        ? { routeName: obj.url }
        : { externalUrl: obj.url }
      this.wechatOnly = obj.isWeChat
      this.authRequired = obj.authRequired
      this.hasWidget = obj.infoCard
      this.type = obj.type
    } catch (e) { throw new Error('Invalid SubApp payload.') }
  }
}

export default SubApp
