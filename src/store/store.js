import Vue from 'vue'
import Vuex from 'vuex'
import StoreA from './storeA'
import NameSpace from './storeNS'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        userName: 'I am state from general',
        
        todos: [
            { id: 1, text: 'A Task 1', status: true },
            { id: 2, text: 'A Task 2', status: false },
        ]
    },

    getters: {
        withSpreadTodos: state => {
            return state.todos.filter(todo => todo.status)
        },

        withoutSpreadTodos: state => {
            return state.todos.filter(todo => !todo.status)
        }
    },

    mutations: {
        createTodo (state, todo) {
            state.todos.push(todo);
        }
    },

    actions: {
        importTodo (context, status) {
            
            import('@helpers/todos.json').then(todos => {
                todos.forEach( todo => {
                    if (todo.status === status) {
                        context.commit('createTodo', todo);
                    }
                });
            });
        }
    },

    modules: {
        a: StoreA,
        NS: NameSpace
    }
})