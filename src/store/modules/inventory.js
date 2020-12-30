export const state = {
  items: []
};

export const mutations = {
  ADD_ITEM(state, payload) {
    const { item } = payload;
    const index = state.items.findIndex(i => i.id === item.id);
    if (index >= 0) {
      state.items[index].quantity += item.quantity;
    } else {
      state.items.push(item);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
