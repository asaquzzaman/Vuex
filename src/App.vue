<template>
    <div>
        <div class="wrap">
            <general></general>
            <general-wsp></general-wsp>
            <div class="float-clear"></div>
        </div>
        <div class="wrap">
            <module></module>
            <module-wsp></module-wsp>
            <div class="float-clear"></div>
        </div>
        <div class="wrap">
            <namespace></namespace>
            <namespace-wsp></namespace-wsp>
            <div class="float-clear"></div>
        </div>
    </div>
</template>

<script type="text/javascript">

    import General from '@components/general/general.vue'
    import GeneralWSP from '@components/general/general-with-spread-operator.vue'
    import Module from '@components/module/module.vue'
    import ModuleWSP from '@components/module/module-with-spread-operator.vue'
    import NameSpace from '@components/namespace/namespace.vue'
    import NameSpaceWSP from '@components/namespace/namespace-with-spread-operator.vue'
    
    export default {
        components: {
            'general': General,
            'general-wsp': GeneralWSP,
            'module': Module,
            'module-wsp': ModuleWSP,
            'namespace': NameSpace,
            'namespace-wsp': NameSpaceWSP
        }
    }

</script>

<style type="text/css">
    .wrap {
        margin: 0 auto;
        width: 95%;
        margin-top: 15px;
        font-family: sans-serif;
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
        border: 1px solid #b7b7b7;
        text-align: center;
        margin: 0;
        padding: 10px;
        font-size: 20px;
    }
    .inside {
        min-height: 300px;
        border-width: 0px 1px 1px 1px;
        border-color: #b7b7b7;
        border-style: solid;
        padding: 10px
    }

    .float-clear {
        visibility: hidden;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }




</style>