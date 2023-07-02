function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector)
      let isMounted = false
      let oldValue = null
      
      watchEffect(function() {
        if (!isMounted) {
          oldValue = rootComponent.render()
          mount(oldValue, container)
          isMounted = true
        } else {
          const newValue = rootComponent.render()
          patch(oldValue, newValue)
          oldValue = newValue
        }
      })
    }
  }
}