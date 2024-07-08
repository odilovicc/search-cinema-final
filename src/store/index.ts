import { createStore, StoreOptions } from 'vuex'
import cinema from './modules/cinema'
export default createStore<StoreOptions<{}>>({
  modules: {
    cinema,
  },
})