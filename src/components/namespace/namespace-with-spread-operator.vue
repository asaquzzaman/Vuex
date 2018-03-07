<template>
    
    <div class="right">
        <h1>Namespace With Spread Operator</h1>
        <div class="inside">
            {{ userName }}

            <ul>
                <li v-for="(todo, index) in withSpreadTodos" :key="index">
                    {{ todo.text }}
                </li>
            </ul>
        </div>
    </div>

</template>

<script type="text/javascript">
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    
    export default {
        computed: {
            
            ...mapState(
                'NS',
                [
                    'userName'
                ]
            ),

            ...mapGetters(
                'NS',
                [
                    'withSpreadTodos',
                ]
            )
        },

        methods: {

            ...mapMutations(
                'NS',
                [
                    'createTodo',
                ]
            ),

            ...mapActions(
                'NS',
                [
                    'importTodo',
                ]
            ),
        },

        created () {

            this.createTodo(
                {
                    id: 6,
                    text: 'A mutations task',
                    status: true
                }
            );

            this.importTodo(true); 
        }
    }
</script>


