<template>
    <div>
        <state></state>
        <getters></getters>
        <mutations></mutations>
        <actions></actions>
    </div>
</template>

<script type="text/javascript">

    import State from '@components/state.vue'
    import Getters from '@components/getters.vue'
    import Mutations from '@components/mutations.vue'
    import Actions from '@components/actions.vue'
    
    export default {
        components: {
            'state': State,
            'getters': Getters,
            'mutations': Mutations,
            'actions': Actions
        }
    }

</script>