<template></template>

<script type="text/javascript">
    import { mapActions } from 'vuex'

    export default {
        created () {
            this.selfAddNewTodo();
            this.addNewTodo();
        },

        methods: {
            ...mapActions(
                [
                    'addNewTodo'
                ]
            ),

            selfAddNewTodo () {
                this.$store.dispatch('addNewTodo');
            }
        }
    }
</script>