<template>
    
    <div class="right">
        <h1>Module With Spread Operator</h1>
        <div class="inside">
            {{ userName }}

            <ul>
                <li v-for="(todo, index) in aWithSpreadTodos" :key="index">
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
                {
                    'userName': state => state.a.userName
                }
            ),

            ...mapGetters(
                [
                    'aWithSpreadTodos',
                ]
            )
        },

        methods: {

            ...mapMutations(
                [
                    'aCreateTodo',
                ]
            ),

            ...mapActions(
                [
                    'aImportTodo',
                ]
            ),
        },

        created () {

            this.aCreateTodo(
                {
                    id: 6,
                    text: 'A mutations task',
                    status: true
                }
            );

            this.aImportTodo(true); 
        }
    }
</script>


