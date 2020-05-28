import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user:"Evan",
  },
  mutations: {
    setUser(nowUser){
      this.state.user=nowUser;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getUser: () =>{
      return this.state.user;
    },
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // }
  }
});
