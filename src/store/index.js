import Vue from "vue";
import Vuex from "vuex";
import contracts from "./modules/contracts";
import inventory from "./modules/inventory";
import rogues from "./modules/rogues";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    rogues,
    inventory,
    contracts
  }
});
