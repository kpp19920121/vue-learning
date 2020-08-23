<template>
<div >
	<div>轮播</div>
	<div style="width: 100%;height:50px;text-align: center;">
		<ul style="display:inline">
			<router-link  style="display:inline;padding-right:20px" to="/film/nowPlaying" tag="li" activeClass="myActiveClass">正在热映</router-link>
			<router-link  style="display:inline;" to="/film/comingSoon" tag="li" activeClass="myActiveClass">即将上映</router-link>
		</ul>
	</div>
	<div >
	<router-view></router-view>
	</div>
</div>
</template>


<style scoped="scoped">

 .myActiveClass{
 color: red;
 }


 li{
 list-style: none;
 }
 


</style>

