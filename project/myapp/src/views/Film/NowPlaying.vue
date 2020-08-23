<template>
	<nav>
		<ul  style="display:inline">
			<li style="" v-for="data in dataList" :key="data.filmId"  @click="handlerClick(data)">
				<img  v-bind:src="data.poster">
				<h3>
					{{data.name}}
				</h3>
				<p>观众评分:{{data.grade}}</p>
				<p v-if="data.actors">主演:{{data.actors | actorFilter}}</p>
			</li>
		</ul>		
		</nav>
</template>



<script type="text/javascript">

import axios from "axios"
import Vue from "vue"


Vue.filter("actorFilter",function(data){
	console.log(data);
	var newList=data.map(item=>item.name);
	return newList.join(" ");
});





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
		axios({
			url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4181523",
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598076979863258361724930","bc":"110100"}',
				'X-Host': 'mall.film-ticket.film.list'
			}		
		}).then(res => {
			this.dataList=res.data.data.films
			console.log(res.data.data.films);
		})
	}
}
</script>


<style lang="scss" scoped>
  ul{
    li{
        padding:10px;
        overflow: hidden;
      img{
        float:left;
        width:100px;
      }
    }
  }
</style>
