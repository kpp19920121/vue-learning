<template>

<div >



<ul>
  <router-link  class="tabbarClass" to="/Cinema" tag="div" activeClass="myActiveClass">我的电影院</router-link>
  <router-link  class="tabbarClass"  to="/Film" tag="div" activeClass="myActiveClass">电影</router-link>
	<router-link  class="tabbarClass" to="/Center" tag="div" activeClass="myActiveClass">个人中心</router-link>
</ul>

</div>

</template>

<style type="text/css" >

.myActiveClass{
	color: red;
}

.tabbarClass{
	position: relative;
	float: left;
	margin-left: 20px;
	margin-top: 30px;
}

</style>
