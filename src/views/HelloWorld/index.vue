<template>
	<div class="tt">
		hello world
		<div>{{ msg }}</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			msg: 12313
		}
	}
}
</script>

<style lang="scss">
.tt {
	display: flex;
	align-items: center;
	color: green;
	div {
		background: yellow;
	}
}
</style>
