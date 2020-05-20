const Bus = require('./index.js')
const BusProxy = require('./index.js').BusProxy
const util = require('util')

test('Bus', () => {
  let bus = new Bus()
  expect(bus.handleIncoming).toBeDefined()
})

test('extendable', () => {
  class XBus extends Bus {
    constructor() {
      super()
      this.x = true
    }
  }
  let bus = new XBus()
  expect(bus.handleIncoming).toBeDefined()
})

test('extendable with prototypical inheritance using proxy', () => {
  function YBus () {
    this.y = true
  }

  util.inherits(YBus, BusProxy)

  const bus = new YBus()
  expect(bus.handleIncoming).toBeDefined()
})
