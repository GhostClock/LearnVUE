// 对state进行封装

import { mapState, createNamespacedHelpers } from 'vuex'
import { useMapper } from "./useMapper";

export function useState(moduleName, mapper) {
  /*
  // 拿到store独享
  const store = useStore()

  // 获取对应对象的functions
  const storeStateFns = mapState(mapper)

  // 对数据进行转换
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })
  return storeState
  */
  let mapperFn = mapState
  if(typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  }
  return useMapper(mapper, mapperFn)
}