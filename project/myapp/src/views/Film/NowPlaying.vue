<template>
	<nav>
		正在热映的影片如下:
		<ul>
			<li v-for="data in dataList" :key="data"  @click="handlerClick(data)">
				{{data}}			
			</li>
		</ul>		
		</nav>
</template>



<script type="text/javascript">
export default{
	data(){
		return {
			dataList:["1111","2222","3333","4444"]
		}
	},
	methods:{
		handlerClick(id){
			console.log(id);
			this.$router.push(`/film/detail/${id}`);
		}
	}
}
</script>
