import { generateContract } from "@/core/generator";

export const state = [];

export const getters = {
  contracts(state) {
    return state;
  },
  getContractById(state) {
    return id => state.find(item => item.id === id);
  }
};

export const mutations = {
  CLEAR(state) {
    state.splice(0, state.length);
  },
  ADD_CONTRACT(state, payload) {
    const { contract } = payload;
    state.push(contract);
  },
  REMOVE_CONTRACT(state, payload) {
    const { id } = payload;
    const index = state.findIndex(i => i.id === id);
    if (index >= 0) {
      state.splice(index, 1);
    }
  }
};

export const actions = {
  refreshContracts({ commit }) {
    commit(mutations.CLEAR.name);
    const MAX_ITEMS = 10;
    for (let i = 0; i < MAX_ITEMS; i++) {
      const contract = generateContract();
      commit(mutations.ADD_CONTRACT.name, { contract });
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
