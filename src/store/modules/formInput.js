const formInput = {
  namespaced: true,
  state: () => ({
    title: "",
    author: "",
    publisher: "",
    publicationYear: "",
    print: "",
  }),
  mutations: {
    updateTitle(state, payload) {
      state.title = payload;
    },
    updateAuthor(state, payload) {
      state.author = payload;
    },
    updatePublisher(state, payload) {
      state.publisher = payload;
    },
    updatePublicationYear(state, payload) {
      state.publicationYear = payload;
    },
    updatePrint(state, payload) {
      state.print = payload;
    },
  },
  getters: {
    getTitle(state) {
      return state.title;
    },
    getAuthor(state) {
      return state.author;
    },
    getPublisher(state) {
      return state.publisher;
    },
    getPublicationYear(state) {
      return state.publicationYear;
    },
    getPrint(state) {
      return state.print;
    },
  },
  actions: {},
};

export default formInput;
