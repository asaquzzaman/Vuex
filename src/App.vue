<template>
    <div>
        <store></store>
        <modules></modules>
        <namespace></namespace>
    </div>
</template>

<script type="text/javascript">

    import Store from '@components/store.vue'
    import Modules from '@components/modules.vue'
    import NameSpace from '@components/namespace.vue'
    
    export default {
        components: {
            'store': Store,
            'modules': Modules,
            'namespace': NameSpace
        }
    }

</script>