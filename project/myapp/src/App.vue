<template>
	<div class="box">
	<div>hello vue!</div>
	<input type="text" name="myText"   ref="myText"/>
	<button @click="handlerClick">添加</button>
	
	<ul>
		<li v-for="data in dataList" v-bind:key="data">
			{{data}}
		</li>
	
	</ul>
	<navibar>
		<button @click="isShow=!isShow">naviber-click</button>
	</navibar>	
	<sidebar v-show="isShow">
	
	</sidebar>
	
	
	
	我是路由容器
	<router-view></router-view>




<hr/>

<tabbar></tabbar>




	</div>
	
</template>


<!-- <style scoped="scoped">
	.box li{
		background-color: red;
	}
</style> -->


<script>

import sidebar from "./components/Sidebar.vue"
import navibar from "./components/Navibar"
import Vue from "vue"
import axios from "axios"
import tabbar from "@/components/Tabbar"

Vue.component("sidebar",sidebar);
//Vue.component("navibar",navibar);


export default{
	data(){
		return {
			dataList:[],
			isShow:true
		}
	},
	methods:{
		handlerClick(){
			this.dataList.push(this.$refs.myText.value);
		}
	},
	components:{
		navibar:navibar,
		tabbar:tabbar
	},
	mounted(){
		axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=DD85C1F0DFA511EA84CCC1360D39E0A43104C6445816465889497520EABBB9A2&optimus_risk_level=71&optimus_code=10").then(res=>{
			console.log(res.data);
		});
	}
}
</script>


