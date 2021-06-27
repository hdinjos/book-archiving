import Vue from "vue";
import Vuex from "vuex";
import { formInput } from "./modules";
import DB from "../storages/db.JSON";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    books: DB.books,
    indexDelete: "",
  },
  getters: {
    getAllBooks(state) {
      return state.books;
    },
  },
  mutations: {
    addBook(state, payload) {
      state.books.push(payload);
    },
    setIndexDelete(state, index) {
      state.indexDelete = index;
    },
    deleteBook(state) {
      state.books.splice(state.indexDelete, 1);
    },
  },
  actions: {},
  modules: {
    formInput: formInput,
  },
});
