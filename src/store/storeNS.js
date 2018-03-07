const moduleNS = {

    namespaced: true,

	state: {
        userName: 'I am state from namespace',
        
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
    }
}

export default moduleNS;

