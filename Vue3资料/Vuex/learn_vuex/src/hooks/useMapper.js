// 对use重复代码进行抽离

import { computed } from 'vue'
import { useStore } from 'vuex'

export function useMapper(mapper, mapFnc) {
  // 拿到store独享
  const store = useStore()

  // 获取对应对象的functions
  const storeMapFns = mapFnc(mapper)

  // 对数据进行转换
  const storeMapper = {}
  Object.keys(storeMapFns).forEach(fnKey => {
    const fn = storeMapFns[fnKey].bind({$store: store})
    storeMapper[fnKey] = computed(fn)
  })
  return storeMapper
}