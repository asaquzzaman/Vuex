<template>
    <div class="wrap">
        
        <div class="right">
            <h1>Without Maping</h1>
            
            <div class="inside">
                <p>{{ user }}</p>
                <ul>
                    <li v-for="(todo, index) in withOutMapGettersCompleteTodos" :key="index">
                        {{ todo.text }}
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="left">
            <h1>With Maping</h1>

            <div class="inside">
                <p>{{ withOutMapState }}</p>
                <ul>
                    <li v-for="(todo, index) in completeTodos" :key="index">
                        {{ todo.text }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    
    export default {
        created () {
            this.selfAddNewTodo();
            this.mapMutationsAddNewTodo();

            this.actionselfAddNewTodo();
            this.addNewTodo();
        },

        computed: {
            ...mapGetters(
                [
                    'completeTodos',
                ]
            ),

            ...mapState(
                [
                    'user'
                ]
            ),

            withOutMapState () {
                return this.$store.state.user;
            },

            withOutMapGettersCompleteTodos () {
                return this.$store.getters.completeTodos;
            }
        },

        methods: {
            ...mapMutations(
                [
                    'addNewTodo'
                ]
            ),

            ...mapActions(
                [
                    'addNewTodo'
                ]
            ),

            selfAddNewTodo () {
                this.$store.commit(
                    'addNewTodo',
                    {   
                        id: 4,
                        text: 'Task 4',
                        done: true
                    }
                );
            },

            mapMutationsAddNewTodo () {
                this.addNewTodo(
                    {       
                        id: 5,
                        text: 'Task 5',
                        done: true
                    }
                );
            },

            actionselfAddNewTodo () {
                this.$store.dispatch('addNewTodo');
            }
        }
    }
</script>


<style type="text/css">
    .wrap {
        margin: 0 auto;
        width: 95%;
    }
    .left {
        margin-right: 3%;
    }
    .right {
        margin-left: 3%;
    }
    .left,
    .right {
        float: left;
        width: 45%;
    }
    .left h1,
    .right h1 {
        border: 1px solid #2f2;
        text-align: center;
        margin: 0;
    }
    .inside {
        min-height: 300px;
        border-width: 0px 1px 1px 1px;
        border-color: #2f2;
        border-style: solid;
        padding: 10px
    }
</style>


