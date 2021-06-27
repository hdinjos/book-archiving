import Vue from "vue";
import Vuex from "vuex";
import { formInput } from "./modules";
import DB from "../storages/db.JSON";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
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
  modules: {
    formInput: formInput,
  },
});
