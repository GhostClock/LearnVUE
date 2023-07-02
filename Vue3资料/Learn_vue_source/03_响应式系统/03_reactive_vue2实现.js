class Dep {
  constructor() {
    this.subscriber = new Set()
  }

  addEffect(effect) {
    this.subscriber.add(effect)
  }
  depend() {
    if (activeEffect) {
      this.subscriber.add(activeEffect)
    }
  }

  notify() {
    this.subscriber.forEach(effect => {
      effect()
    })
  }
}

let activeEffect = null
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

// Map({key, value}): key是字符串
// WeakMap({key(对象): value})：key是一个对象,弱引用
const targetMap = new WeakMap()
function getDep(target, key) {
  // 1、根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }

  // 2、取出具体的dep对象
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }
  return dep
}

// vue2对raw进行数据劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw, key)
    let value = raw[key]

    Object.defineProperty(raw, key, {
      get() {
        dep.depend()
        return value
      },
      set(newValue) {
        // 值不一样时才更新
        if (value !== newValue) {
          value = newValue
          dep.notify()
        }
      }
    })
  })
  return raw
}


// 测试代码
const info = reactive({counter: 100, name: 'Ghost'})
const foo = reactive({height: 188})

// watchEffect1
watchEffect(function () {
  console.log('effect1', info.counter * 2, info.name);
})
// watchEffect2
watchEffect(function () {
  console.log('effect2', info.counter * info.counter);
})
// watchEffect3
watchEffect(function () {
  console.log('effect3', info.counter + 10, info.name);
})
watchEffect(function () {
  console.log('effect4', foo.height);
})

// info.counter ++
// info.name = 'clock'

foo.height = 2
