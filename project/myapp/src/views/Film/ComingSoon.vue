<template>
	<nav>
		<ul>
			<li v-for="data in dataList" :key="data.id"  @click="handlerClick(data)">
				{{data.nm}}			
			</li>
		</ul>		
		</nav>
</template>



<script type="text/javascript">

import axios from "axios"


export default{
	data(){
		return {
			dataList:[]
		}
	},
	methods:{
		handlerClick(id){
			console.log(id);
			this.$router.push(`/film/detail/${id}`);
		}
	},
	mounted(){
		axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=DD85C1F0DFA511EA84CCC1360D39E0A43104C6445816465889497520EABBB9A2&optimus_risk_level=71&optimus_code=10").then(res=>{
			this.dataList=res.data.movieList;
			console.log(res.data.movieList);
		});
	}
}
</script>


<style>
li{
list-style: none;
}
</style>
