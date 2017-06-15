<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
// import flexible from '../static/js/flexible'
export default {
	name: 'app',
	data() {
		return {

		}
	},
	created() {
		this.fontSize();
	},
	methods: {
		fontSize() {
			let $html = document.getElementsByTagName('html')[0]
			let clientWidth = $html.clientWidth;
			if (clientWidth > 540) {
				clientWidth = 540;
			}
			if (!clientWidth) return;
			let size = Math.floor(30 * (clientWidth / 750)) + 'px';
			$html.style.fontSize = size;
		}
	}
}
</script>

<style>
@import '../static/css/normalize.css';
@import '../static/css/common.scss';

#app {
	margin: 0 auto;
	max-width: 750px;
	height: 100%;
	font-family: 'microsoft yahei', 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
