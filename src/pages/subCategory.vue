<template>
	<div class="container">
		<ul class="parent-scale-1px">
			<router-link v-for="(item, index) in subCategory" key="item" class="item scale-1px" :title="item.title" :to="item.url" tag="li">
				<span class="icon_container">
					<i :class="$route.params.categoryname+' icon '+$route.params.categoryname+'_icon'+index" :style="{'background-image': 'url(' + backgroundImg[$route.params.categoryname] + ')'}"></i>
				</span>
				<div class="text">
					<p class="title">{{item.title}}</p>
					<p class="subtitle">{{item.subTitle}}</p>
				</div>
			</router-link>
			<div class="clear"></div>
		</ul>
	</div>
</template>

<script>
import socket from '../../static/js/config/subCategory/socket'
import control from '../../static/js/config/subCategory/control'
import switchBtn from '../../static/js/config/subCategory/switchBtn'
import sensor from '../../static/js/config/subCategory/sensor'
import other from '../../static/js/config/subCategory/other'

// 引入背景图
import socketBackImg from '../assets/socket.png'
import controlBackImg from '../assets/control.png'
import switchBtnBackImg from '../assets/switch.png'
import sensorBackImg from '../assets/sensor.png'
import otherBackImg from '../assets/other.png'

export default {
	name: 'main',
	data () {
		return {
			subCategory: [{
				class: '',
				title: '',
				subTitle: '',
				url: ''
			}],
			backgroundImg: {
				socket: socketBackImg,
				control: controlBackImg,
				switchBtn: switchBtnBackImg,
				sensor: sensorBackImg,
				other: otherBackImg,
			}
		}
	},
	beforeCreate() {
		switch(this.$route.params.categoryname) {
			case 'socket': 
				document.title = '插座类';
				break;
			case 'control': 
				document.title = '遥控类';
				break;
			case 'switchBtn': 
				document.title = '灯控开关类';
				break;
			case 'sensor': 
				document.title = '传感器类';
				break;
			case 'other': 
				document.title = '其它';
				break;
			default: 
				document.title = '产品服务中心';
				break
		}
	},
	created() {
		switch(this.$route.params.categoryname) {
			case 'socket': 
				this.subCategory = socket;
				break;
			case 'control': 
				this.subCategory = control;
				break;
			case 'switchBtn': 
				this.subCategory = switchBtn;
				break;
			case 'sensor': 
				this.subCategory = sensor;
				break;
			case 'other': 
				this.subCategory = other;
				break;
			default: 
				this.subCategory = socket;
				break
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../../static/css/common.scss';
	.container {
		padding-top: pxtorem(30);
		height: 100%;
	}
	ul {
		border-top: 1px solid #cccbc9;
		border-bottom: 1px solid #cccbc9;
		background-color: #fff;
		position: relative;
	}
	.item {
		position: relative;
		margin-left: pxtorem(30);
		height: pxtorem(110);
		list-style-type: none;
		color: #5d5c5a;
		border-top: 1px solid #cccbc9;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.item:after {
		content: '';
		display: inline-block;
		position: absolute;
		right: pxtorem(30);
		top: 0;
		bottom: 0;
		margin: auto;
		width: pxtorem(15);
		height: pxtorem(25);
		background: url('../assets/icon.png') no-repeat;
		background-size: pxtorem(44) pxtorem(286);
		background-position: 0 0;
	}
	.item:first-child:before {
		border-top: 0;
	}
	.scale-1px, .parent-scale-1px{
		border: 0;
	}
	.scale-1px:before, .parent-scale-1px:before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		border-top: 1px solid #cccbc9;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 200%;
		height: 200%;
		-webkit-transform: scale(0.5);
		transform: scale(0.5);
		-webkit-transform-origin: left top;
		transform-origin: left top;
	}
	.parent-scale-1px:before {
		border-bottom: 1px solid #cccbc9;
	}
	.text {
		position: absolute;
		left: pxtorem(80);
		top: 0;
		bottom: 0;
		margin: auto;
		height: pxtorem(70);
	}
	.text .subtitle {
		margin-top: pxtorem(16);
		font-size: pxtorem(24);
		color: #b3b2af;
	}
	.icon_container {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		display: inline-block;
		width: pxtorem(70);
		height: pxtorem(70);
	}
	.icon {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		display: inline-block;
		width: 100%;
		background-repeat: no-repeat;
	}
	
	// 智能插座
	.socket {
		background-size: pxtorem(70) pxtorem(630);
	}
	.socket_icon0 {
		background-position: 0 0;
	}
	.socket_icon1 {
		background-position: 0 pxtorem(-70);
	}
	.socket_icon2 {
		background-position: 0 pxtorem(-140);
	}
	.socket_icon3 {
		background-position: 0 pxtorem(-210);
	}
	.socket_icon4 {
		background-position: 0 pxtorem(-210);
	}
	.socket_icon5 {
		background-position: 0 pxtorem(-70);
	}
	.socket_icon6 {
		background-position: 0 pxtorem(-280);
	}
	.socket_icon7 {
		background-position: 0 pxtorem(-350);
	}
	.socket_icon8 {
		background-position: 0 pxtorem(-490);
	}
	.socket_icon9 {
		background-position: 0 pxtorem(-490);
	}
	.socket_icon10 {
		background-position: 0 pxtorem(-420);
	}
	.socket_icon11 {
		background-position: 0 pxtorem(-560);
	}

	// 智能排插
	.exsocket {
		background-size: pxtorem(70) pxtorem(140);
	}
	.exsocket_icon0 {
		background-position: 0 0;
	}
	.exsocket_icon1 {
		background-position: 0 pxtorem(-70);
	}
	
	// 万能遥控
	.control {
		background-size: pxtorem(70) pxtorem(210);
	}
	.control_icon0 {
		background-position: 0 0;
	}
	.control_icon1 {
		background-position: 0 0;
	}
	.control_icon2 {
		background-position: 0 pxtorem(-70);
	}
	.control_icon3 {
		background-position: 0 pxtorem(-140);
	}
	
	// 墙壁开关
	.switchBtn {
		background-size: pxtorem(70) pxtorem(140);
	}
	.switchBtn_icon0 {
		background-position: 0 0;
	}
	.switchBtn_icon1 {
		background-position: 0 pxtorem(-70);
	}
	
	// 传感器
	.sensor {
		background-size: pxtorem(70) pxtorem(210);
	}
	.sensor_icon0 {
		background-position: 0 0;
	}
	.sensor_icon1 {
		background-position: 0 0;
	}
	.sensor_icon2 {
		background-position: 0 pxtorem(-70);
	}
	.sensor_icon3 {
		background-position: 0 pxtorem(-140);
	}
	
	// 其他
	.other {
		background-size: pxtorem(70) pxtorem(210);
	}
	.other_icon0 {
		background-position: 0 0;
	}
	.other_icon1 {
		background-position: 0 pxtorem(-70);
	}
	.other_icon2 {
		background-position: 0 pxtorem(-140);
	}
</style>
