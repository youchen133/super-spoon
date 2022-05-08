<template>
	<div class="container" @click="handleClick">{{ text }}</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
// import './tt.css'
export default {
	name: 'test',
	data() {
		return {
			text: 'test world'
		}
	},
	created() {
		console.log('created test1')
	},
	mounted() {
		console.log('mounted test')
	},
	destroyed() {
		console.log('destoryed test')
	},
	beforeDestroy() {
		console.log('before destory test')
	},
	computed: {
		...mapState('app', { a: state => state.msg })
	},
	methods: {
		...mapMutations('app', ['change']),
		handleClick() {
			this.change(30311111111111)
			console.log(this.$store.state.app)
			alert(this.a)
		}
	}
}
</script>
