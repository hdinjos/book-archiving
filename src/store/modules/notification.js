const notification = {
  namespaced: true,
  state: () => ({
    validation: false,
    alertSuccess: false,
  }),
  mutations: {
    setValidation(state, value) {
      state.validation = value;
    },
    setAlertSuccess(state, value) {
      state.alertSuccess = value;
    },
  },
};

export default notification;
