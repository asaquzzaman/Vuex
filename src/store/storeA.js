const moduleA = {

    state: {
        userName: 'I am state from module',
        
        todos: [
            { id: 1, text: 'A Task 1', status: true },
            { id: 2, text: 'A Task 2', status: false },
        ]
    },

    getters: {
        aWithSpreadTodos: state => {
            return state.todos.filter(todo => todo.status)
        },

        aWithoutSpreadTodos: state => {
            return state.todos.filter(todo => !todo.status)
        }
    },

    mutations: {
        aCreateTodo (state, todo) {
            state.todos.push(todo);
        }
    },

    actions: {
        aImportTodo (context, status) {
            
            import('@helpers/todos.json').then(todos => {
                todos.forEach( todo => {
                    if (todo.status === status) {
                        context.commit('aCreateTodo', todo);
                    }
                });
            });
        }
    }
}

export default moduleA;

