<template>
<div >
	电影
	<hr/>
	<div style="width: 100%;height:50px">
		<router-link style="position: relative;float: left;"  to="/film/nowPlaying" tag="div">正在热映</router-link>
		<router-link style="position: relative;float: right;" to="/film/comingSoon" tag="div">即将上映</router-link>
	</div>
	<div >
	<router-view></router-view>
	</div>
</div>
</template>

