// 对getter进行封装

import { mapGetters,  } from 'vuex'
import { useMapper } from "./useMapper";

export function useGetters(mapper) {
 return useMapper(mapper, mapGetters)
}