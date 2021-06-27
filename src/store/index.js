import Vue from "vue";
import Vuex from "vuex";
import DB from "../storages/db.JSON";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: DB.books,
  },
  getters: {
    getAllBooks(state) {
      return state.books;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
