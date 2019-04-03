const Bus = require('./bus')
const debug = require('debug')

const log = debug('servicebus/core')

const proxyConstructor = {
  apply: (target, thisArg, args) => {
    let bus = new target()
    Object.assign(thisArg, bus)
  }
}

const BusProxy = new Proxy(Bus, proxyConstructor)

module.exports = BusProxy
