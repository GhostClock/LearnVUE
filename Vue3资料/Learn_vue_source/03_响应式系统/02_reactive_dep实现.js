class Dep {
  constructor() {
    this.subscriber = new Set()
  }

  addEffect(effect) {
    this.subscriber.add(effect)
  }

  notify() {
    this.subscriber.forEach(effect => {
      effect()
    })
  }
}


const info = {counter: 100}

const dep = new Dep()

function doubleConter() {
  console.log(info.counter * 2);
}
function powerConter() {
  console.log(info.counter * info.counter);
}

dep.addEffect(doubleConter)
dep.addEffect(powerConter)

info.counter ++
dep.notify()