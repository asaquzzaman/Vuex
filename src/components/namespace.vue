<template>
    <div class="wrap">
        <div class="left">
            <h1>Without Maping</h1>
            <div class="inside">
                {{ userNameA }}
                <ul>
                    <li v-for="(todo, index) in completeTodosA" :key="index">
                        {{ todo.text }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="right">
            <h1>With Maping</h1>
            <div class="inside">
                {{ userA }}

                <ul>
                    <li v-for="(todo, index) in mGCompleteTodosA" :key="index">
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
        computed: {
            userNameA () {
                return this.$store.state.NS.userA;
            },
            ...mapState(
                'NS',
                [
                    'userA'
                ]
            ),


            completeTodosA () {
                return this.$store.getters['NS/mGCompleteTodosA'];
            },
            ...mapGetters(
                'NS',
                [
                    'mGCompleteTodosA',
                ]
            )
        },

        methods: {
            createTodoA () {
                this.$store.commit('NS/mMCreateTodoA', 
                    {
                        id: 5,
                        text: 'A mutations task',
                        done: true
                    }
                );
            },
            ...mapMutations(
                'NS',
                [
                    'mMCreateTodoA',
                ]
            ),


            aCreateTodoA () {
                this.$store.dispatch('NS/mACreateTodoA');
            },
            ...mapActions(
                'NS',
                [
                    'mACreateTodoA',
                ]
            ),
        },

        created () {
            this.mMCreateTodoA(
                {
                    id: 5,
                    text: 'A mutations task',
                    done: true
                }
            );
            this.createTodoA();


            this.mACreateTodoA();
            this.aCreateTodoA();
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
