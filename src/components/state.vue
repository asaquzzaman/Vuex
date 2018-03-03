<template>
	<div>
		<p>{{ test }}</p>
		<p>{{ withOutMapState }}</p>
	</div>
</template>

<script type="text/javascript">
	import { mapState } from 'vuex'
	
	export default {
		computed: {
			...mapState(
				[
			  		'test'
				]
			),

			withOutMapState () {
				return this.$store.state.test;
			}
		}
	}
</script>