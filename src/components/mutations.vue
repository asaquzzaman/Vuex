<template></template>

<script type="text/javascript">
	import { mapMutations } from 'vuex'
	
	export default {
		created () {
			this.selfAddNewTodo();
			this.mapMutationsAddNewTodo();
		},

		methods: {
			...mapMutations(
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
		}
	}
</script>