const notification = {
  namespaced: true,
  state: () => ({
    validation: false,
  }),
  mutations: {
    setValidation(state, value) {
      state.validation = value;
    },
  },
  actions: {},
  getters: {},
};

export default notification;
