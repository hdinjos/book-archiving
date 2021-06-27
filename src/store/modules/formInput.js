const formInput = {
  namespaced: true,
  state: () => ({
    title: "",
    author: "",
    publisher: "",
    publicationYear: "",
    print: "",
    indexEdit: "",
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
    //take id from table component
    setIndexEdit(state, index) {
      state.indexEdit = index;
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
  actions: {
    updateBook({ commit, state }) {
      const payloadData = {
        index: state.indexEdit,
        title: state.title,
        author: state.author,
        publisher: state.publisher,
        publicationYear: state.publicationYear,
        print: state.print,
      };
      //change data book from global store/root store
      commit("editBook", payloadData, { root: true });
    },
  },
};

export default formInput;
