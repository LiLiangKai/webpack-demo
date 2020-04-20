const foo = require('./foo')
const APP = 'APP'
console.log(APP)

const mk = {
  on () {
    console.log('on')
  },
  emit () {
    foo()
  }
}

mk.on()

setTimeout(() => {
  mk.emit()
}, 1000)