// 渲染器

// h函数返回一个对象
const h = (tag, props, children) => {
  // vnode => js对象 => {}
  return {
    tag,
    props,
    children
  }
}

// mount函数，用于挂载
const mount = (vnode, container) => {
  // vnode -> element
  // 1、创建真实的原生元素，并且在vnode上保留el
  const el = vnode.el = document.createElement(vnode.tag)

  // 2、处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      if (key.startsWith('on')) {
        // 对事件监听的判断
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // 3、处理children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el)
      });
    }
  }

  // 4、将el挂载到container上
  container.appendChild(el)
}

// patch 对比函数
const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    // 结点不同
    const n1ElParent = n1.el.parentElement
    n1ElParent.removeChild(n1.el)
    mount(n2, n1ElParent)
  } else {
    // 结点相同
    // 1、取出element对象，并且在n2中进行保持
    const el = n2.el = n1.el
    // 2、处理props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 2.1、获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if (newValue !== oldValue) {
        if (key.startsWith('on')) {
          // 对事件监听的判断
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }

    // 2.2、删除旧的props
    for (const key in oldProps) {
      if (key.startsWith('on')) {
        // 对事件监听的判断
        const value = oldProps[key]
        el.removeEventListener(key.slice(2).toLowerCase(), value)
      }

      if (!(key in newProps)) {
          el.removeAttribute(key)
      }
      
    }

    // 3、处理children
    const oldChildren = n1.children || []
    const newChildren = n2.children || []

    if (typeof newChildren === 'string') { // 情况1、newChild本身还一个字符串
      // 边界判断 edge case
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren
        }
      } else {
        el.innerHTML = newChildren
      }
    } else { // 情况2、newChild本身是一个数组
      if (typeof oldChildren === 'string') {
        // 清除元素里面的内容
        el.innerHTML = ''
        newChildren.forEach(item => {
          mount(item, el)
        })
      } else {
        // old: [v1, v2, v3]
        // new: [v1, v4, v5, v6, v7,]
        // 1、前面有相同结点的元素进行patch操作 & 长度相等
        const commonLength = Math.min(oldChildren.length, newChildren.length)
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i])
        }

        // 2、新的长度 > 旧的长度
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach(item => {
            mount(item, el)
          })
        }

        // 3、新的长度 < 旧的长度
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach(item => {
            el.removeChild(item.el)
          })
        }

      }
    }
  }
}

