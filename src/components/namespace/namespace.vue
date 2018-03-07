<template>
    <div class="wrap">
        <div class="left">
            <h1>Namespace Without Spread Operator</h1>
            <div class="inside">
                {{ userName }}
                <ul>
                    <li v-for="(todo, index) in todos" :key="index">
                        {{ todo.text }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">

    export default {
        computed: {
            userName () {
                return this.$store.state.NS.userName;
            },
            
            todos () {
                return this.$store.getters['NS/withoutSpreadTodos'];
            },
        },

        methods: {

            createTodo () {
                this.$store.commit('NS/createTodo', 
                    {
                        id: 5,
                        text: 'A mutation task',
                        status: false
                    }
                );
            },

            importTodo () {
                this.$store.dispatch('NS/importTodo', false);
            },
        },

        created () {
            this.createTodo();
            this.importTodo(); 
        }
    }
</script>


