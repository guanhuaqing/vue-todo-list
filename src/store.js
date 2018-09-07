import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

const ADDToDo = "AddToDo";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[{
          name:'item1',
          detail:'go shop to buy some vegatables',
          time:moment().format('YYYY/MM/DD HH:mm:SS'),
          status:false
    }],
    newTodo:""
  },
  getters:{

  },
  mutations: {
    addToDo(state,item){
      state.todos.push(item);
    },
    removeToDo(state,item){
      const index = state.todos.indexOf(item);
      state.todos.splice(index,1);
    },
    CurrentEditItem(state,item){
      state.newTodo = item
    },
    saveEditItem(state,item){
      state.todos.map(elem => {
        if(elem.name === item.name){
          elem.detail = item.detail;
          elem.status = item.status;
        }
        return elem;
      })
    }
  },
  actions: {

  }
})
