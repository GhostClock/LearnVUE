// 对state进行封装

import { mapState } from 'vuex'
import { useMapper } from "./useMapper";

export function useState(mapper) {
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
  return useMapper(mapper, mapState)
}