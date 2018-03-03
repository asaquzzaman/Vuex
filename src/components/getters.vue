<template>
    <div>
        <p>{{ completeTodos }}</p>
        <p>{{ incompleteTodos }}</p>
        <p>{{ withOutMapGettersCompleteTodos }}</p>
        <p>{{ withOutMapGettersIncompleteTodos }}</p>
    </div>
</template>

<script type="text/javascript">
    import { mapGetters } from 'vuex'
    
    export default {
        computed: {
            ...mapGetters(
                [
                    'completeTodos',
                    'incompleteTodos'
                ]
            ),

            withOutMapGettersCompleteTodos () {
                return this.$store.getters.completeTodos;
            },

            withOutMapGettersIncompleteTodos () {
                return this.$store.getters.incompleteTodos;
            }
        }
    }
</script>