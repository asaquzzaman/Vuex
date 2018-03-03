import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		test: 'I am now learing core concepts of Vuex',
		
		todos: [
			{ id: 1, text: 'Task 1', done: true },
			{ id: 2, text: 'Task 2', done: false },
			{ id: 3, text: 'Task 3', done: false }
	    ]
	},

	getters: {
		completeTodos: state => {
			return state.todos.filter(todo => todo.done)
		},

		incompleteTodos: state => {
			return state.todos.filter(todo => !todo.done)
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
    }
})