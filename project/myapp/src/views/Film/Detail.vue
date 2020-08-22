<template>

	<div>
		我是明细页面
	</div>

</template>

<script type="text/javascript">

export default{
	mounted(){
		console.log(this.$route.params.id)
	}
}

</script>
