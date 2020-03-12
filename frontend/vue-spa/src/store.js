import Vue from 'vue';
import Vuex from 'vuex';
import state from './store/state';
import mutations from './store/mutations';
import actions from './store/actions';
import modules from './store/modules';
import plugins from './store/plugins';
import * as getters from './store/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters,
  plugins,
});
