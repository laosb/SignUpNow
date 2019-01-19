import MobileDetect from 'mobile-detect'

const md = new MobileDetect(window.navigator.userAgent)

export const iOS = md.os() === 'iOS'
export const Smartisan =
  // Thanks to the author of fuck-smartisan, geektr and other Smartisan fans for gathering these codes.
  md.match('OE106|DE106|OC105|OD105|SM919|SM801|YQ601|SM701')
