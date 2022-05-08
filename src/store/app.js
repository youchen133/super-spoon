export default {
	namespaced: true,
	state: {
		msg: '2313123131'
	},
	mutations: {
		change(state, val) {
			state.msg = val
		}
	}
}
