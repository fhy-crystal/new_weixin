<template>
	<div class="container">
		<ul>
			<router-link v-for="(item, index) in category" key="item" id="border" class="item scale-1px" :title="item.title" :to="item.url" tag="li">
				<span class="icon_container">
					<i :class="'icon icon'+index" :style="{'background-image': 'url(' + backgroundImg.icon + ')'}"></i>
				</span>
				{{item.title}}
			</router-link>
			<div class="clear"></div>
		</ul>
	</div>
</template>

<script>
import iconBackImg from '../assets/icon.png'
export default {
	name: 'main',
	data () {
		return {
			category: [{
				title: '插座类',
				url: '/subCategory/socket'
			},{
				title: '遥控类',
				url: '/subCategory/control'
			},{
				title: '灯控开关类',
				url: '/subCategory/switchBtn'
			},{
				title: '传感器类',
				url: '/subCategory/sensor'
			},{
				title: '其它',
				url: '/subCategory/other'
			}],
			backgroundImg: {
				icon: iconBackImg,
			}
		}
	},
	beforeCreate() {
		document.title = '产品服务中心';
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../../static/css/common.scss';
	.container {
		padding-top: pxtorem(70);
		height: 100%;
	}
	ul {
		margin: auto;
		width: pxtorem(720);
		text-align: left;
	}
	.item {
		position: relative;
		// float: left;
		display: inline-block;
		margin: 0 pxtorem(10) pxtorem(20) pxtorem(10);
		width: pxtorem(220);
		height: pxtorem(180);
		line-height: pxtorem(250);
		text-align: center;
		list-style-type: none;
		font-size: 1rem;
		color: #5d5c5a;
		border: 1px solid #cccbc9;
		background-color: #fff;
		font-size: pxtorem(24);
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.scale-1px{
		border: 0;
	}
	.scale-1px:after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		border: 1px solid #cccbc9;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 200%;
		height: 200%;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		-webkit-transform-origin: left top;
		transform-origin: left top;
	}
	.icon_container {
		position: absolute;
		left: 0;
		right: 0;
		top: pxtorem(40);
		margin: 0 auto;
		display: inline-block;
		width: pxtorem(45);
		height: pxtorem(45);
	}
	.icon {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		display: inline-block;
		background-repeat: no-repeat;
		background-size: pxtorem(44) pxtorem(286);
	}
	.icon0 {
		width: pxtorem(26);
		height: pxtorem(42);
		background-position: 0 pxtorem(-245);
	}
	.icon1 {
		width: pxtorem(39);
		height: pxtorem(37);
		background-position: 0 pxtorem(-125);
	}
	.icon2 {
		width: pxtorem(36);
		height: pxtorem(36);
		background-position: 0 pxtorem(-83);
	}
	.icon3 {
		width: pxtorem(40);
		height: pxtorem(42);
		background-position: 0 pxtorem(-168);
	}
	.icon4 {
		width: pxtorem(34);
		height: pxtorem(32);
		background-position: 0 pxtorem(-39);
	}
</style>
