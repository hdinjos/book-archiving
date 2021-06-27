import Vue from "vue";
import Vuex from "vuex";
import { formInput, notification } from "./modules";
import DB from "../storages/db.JSON";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    //pass from json data to state
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
    //take id from table component
    setIndexDelete(state, index) {
      state.indexDelete = index;
    },
    deleteBook(state) {
      //take id from state
      state.books.splice(state.indexDelete, 1);
    },
    editBook(state, payload) {
      state.books[payload.index].title = payload.title;
      state.books[payload.index].author = payload.author;
      state.books[payload.index].publisher = payload.publisher;
      state.books[payload.index].publicationYear = payload.publicationYear;
      state.books[payload.index].print = payload.print;
    },
  },
  modules: {
    formInput: formInput,
    notification: notification,
  },
});
