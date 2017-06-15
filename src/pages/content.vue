<template>
	<div class="container">
		<ul>
			<li class="item" v-for="item in content" key="item">
				<h4>{{item.title}}</h4>
				<ul>
					<li class="detail" v-for="detail in item.detail" key="detail" v-show="detail.title">
						<a :href="detail.url" v-if="detail.url">{{detail.title}}</a>
						<p class="nolink" v-else>{{detail.title}}</p>
						<p class="qa" :class="{example: qa.indexOf('例：')>=0}" v-for="qa in detail.question" v-if="detail.question">
							{{qa}}
						</p>
					</li>
				</ul>
			</li>
			<div class="clear"></div>
		</ul>
	</div>
</template>

<script>
// socket
import rmac from '../../static/js/config/content/socket/rmac'
import sp2 from '../../static/js/config/content/socket/sp2'
import sp2c from '../../static/js/config/content/socket/sp2c'
import sp2s from '../../static/js/config/content/socket/sp2s'
import spminiPlus from '../../static/js/config/content/socket/spmini+'
import spmini from '../../static/js/config/content/socket/spmini'
import spmini3 from '../../static/js/config/content/socket/spmini3'
import ws1 from '../../static/js/config/content/socket/ws1'
import ws2 from '../../static/js/config/content/socket/ws2'
import mp1 from '../../static/js/config/content/socket/mp1'
import mp2 from '../../static/js/config/content/socket/mp2'

// control
import rmhome from '../../static/js/config/content/control/rmhome'
import rmmini3 from '../../static/js/config/content/control/rmmini3'
import rmplus from '../../static/js/config/content/control/rmplus'
import rmpro from '../../static/js/config/content/control/rmpro'

// switch
import tc2 from '../../static/js/config/content/switch/tc2'
import tw1 from '../../static/js/config/content/switch/tw1'

// sensor
import a1 from '../../static/js/config/content/sensor/a1'
import a2 from '../../static/js/config/content/sensor/a2'
import s1 from '../../static/js/config/content/sensor/s1'
import c2s from '../../static/js/config/content/sensor/c2s'

// other
import ms1 from '../../static/js/config/content/other/ms1'
import la350 from '../../static/js/config/content/other/la350'
import dt360e from '../../static/js/config/content/other/dt360e'

export default {
	name: 'main',
	data () {
		return {
			content: [{
				title: '产品介绍',
				detail: [{
					title: '',
					url: ''
				}]
			},{
				title: '产品说明',
				detail: [{
					title: '',
					url: ''
				}]
			},{
				title: '视频教学',
				detail: [{
					title: '',
					url: ''
				}]
			}]
		}
	},
	beforeCreate() {
		switch (this.$route.params.categoryname) {
			case 'socket': 
				document.title = '智能插座-' + this.$route.params.contentname;
				break;
			case 'exsocket': 
				document.title = '智能排插-' + this.$route.params.contentname;
				break;
			case 'control': 
				document.title = '万能遥控-' + this.$route.params.contentname;
				break;
			case 'switchBtn': 
				document.title = '智能墙壁开关-' + this.$route.params.contentname;
				break;
			case 'sensor': 
				document.title = '传感器-' + this.$route.params.contentname;
				break;
			case 'other': 
				document.title = '其它-' + this.$route.params.contentname;
				break;
			default: 
				document.title = '产品服务中心';
				break
		}
	},
	created() {
		switch (this.$route.params.contentname) {
			// socket
			case 'SP2': 
				this.content = sp2;
				break;
			case 'SPmini': 
				this.content = spmini;
				break;
			case 'SPmini3': 
				this.content = spmini3;
				break;
			case 'SP2C': 
				this.content = sp2c;
				break;
			case 'SP2S': 
				this.content = sp2s;
				break;
			case 'SPmini+': 
				this.content = spminiPlus;
				break;
			case 'WS1': 
				this.content = ws1;
				break;
			case 'WS2': 
				this.content = ws2;
				break;
			case 'RMAC': 
				this.content = rmac;
				break;
			case 'MP1': 
				this.content = mp1;
				break;
			case 'MP2': 
				this.content = mp2;
				break;
			// control
			case 'RMhome': 
				this.content = rmhome;
				break;
			case 'RMpro': 
				this.content = rmpro;
				break;
			case 'RMplus': 
				this.content = rmplus;
				break;
			case 'RMmini3': 
				this.content = rmmini3;
				break;
			// switchBtn
			case 'TC2': 
				this.content = tc2;
				break;
			case 'TW1': 
				this.content = tw1;
				break;
			// sensor
			case 'A1': 
				this.content = a1;
				break;
			case 'A2': 
				this.content = a2;
				break;
			case 'S1': 
				this.content = s1;
				break;
			case 'C2S': 
				this.content = c2s;
				break;
			// other
			case 'MS1': 
				this.content = ms1;
				break;
			case 'LA350': 
				this.content = la350;
				break;
			case 'DT360E': 
				this.content = dt360e;
				break;
			default: 
				break
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../../static/css/common.scss';
	ul {
		padding: pxtorem(30);
	}
	li {
		list-style-type: none;
	}
	.item {
		
	}
	.item h4 {
		font-size: pxtorem(36);
		color: #5d5c5a;
	}
	.item .detail {
		position: relative;
		margin-bottom: pxtorem(24);
		font-size: pxtorem(30);
	}
	.item .detail a {
		color: #0185cd;
		text-decoration: none;
	}
	.item .detail .nolink {
		color: #666;
	}
	.item .detail:before {
		content: '';
		display: inline-block;
		position: absolute;
		left: pxtorem(-20);
		top: pxtorem(10);
		width: pxtorem(6);
		height: pxtorem(6);
		background-color: #5d5c5a;
		border-radius: 100%;
	}
	.item .detail .qa {
		line-height: pxtorem(36);
		margin-top: pxtorem(10);
		color: #999;
	}
	.item .detail .example {
		color: #00b9fa;
	}
</style>
