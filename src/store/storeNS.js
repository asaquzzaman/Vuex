const moduleNS = {

    namespaced: true,

	state: {
        userA: 'I am store A',
        
        todosA: [
            { id: 1, text: 'A Task 1', done: true },
            { id: 2, text: 'A Task 2', done: false },
            { id: 3, text: 'A Task 3', done: false }
        ]
    },

    getters: {
        mGCompleteTodosA: state => {
            return state.todosA.filter(todo => todo.done)
        }
    },

    mutations: {
        mMCreateTodoA (state, todo) {
            state.todosA.push(todo);
        }
    },

    actions: {
        mACreateTodoA (context) {
        	
            import('@helpers/todos.json').then(todos => {
                todos.forEach( todo => {
                    context.commit('mMCreateTodoA', todo);
                });
            });
        }
    }
}

export default moduleNS;

