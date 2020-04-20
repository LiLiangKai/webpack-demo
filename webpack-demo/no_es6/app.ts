import foo from './foo'
const APP = 'APP'
console.log(APP)

interface IMK {
  on: () => void
  emit: () => void
}

const mk: IMK = {
  on: () => {
    console.log('on')
  },
  emit: () => {
    console.log('emit')
    foo()
  }
}

mk.on()

setTimeout(() => {
  mk.emit()
}, 1000)

const obj = {
  [APP]: APP
}

console.log(obj)