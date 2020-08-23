<template>

<nav>
<ul>
	<router-link  class="tabbarClass"  to="/Film" tag="li" activeClass="myActiveClass">
	<i class="iconfont icon-form"></i>
	电影
	
	</router-link>
	<router-link  class="tabbarClass" to="/Cinema" tag="li" activeClass="myActiveClass">我的电影院</router-link>
	<router-link  class="tabbarClass" to="/Center" tag="li" activeClass="myActiveClass">个人中心</router-link>
</ul>

</nav>

</template>

<style type="text/css" lang="scss"  scoped="scoped">

.myActiveClass{
	color: red;
}

.tabbarClass{
	position: relative;
	float: left;
	margin-left: 20px;
	margin-top: 30px;
}


li{
	list-style: none;
}

</style>
