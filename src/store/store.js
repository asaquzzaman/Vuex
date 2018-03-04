import Vue from 'vue'
import Vuex from 'vuex'
import StoreA from './storeA'
import NameSpace from './storeNS'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: 'I am store',
        
        todos: [
            { id: 1, text: 'Task 1', done: true },
            { id: 2, text: 'Task 2', done: false },
            { id: 3, text: 'Task 3', done: true }
        ],
    },

    getters: {
        completeTodos: state => {
            return state.todos.filter(todo => todo.done)
        }
    },

    mutations: {
        addNewTodo (state, todo) {
            state.todos.push(todo);
        }
    },

    actions: {
        addNewTodo (context) {
            
            import('@helpers/todos.json').then(todos => {
                todos.forEach( todo => {
                    context.commit('addNewTodo', todo);
                });
            });
        }
    },

    modules: {
        a: StoreA,
        NS: NameSpace
    }
})