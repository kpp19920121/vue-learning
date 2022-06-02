import Vue from 'vue'
import Router from 'vue-router'
import Film from "@/views/Film"
import Cinema from "@/views/Cinema"
import Center from "@/views/Center"
import NowPlaying from "@/views/Film/NowPlaying"
import ComingSoon from "@/views/Film/ComingSoon"
import Detail from "@/views/Film/Detail"
import store from './store'
import Home from '@/views/Home'

Vue.use(Router)



const router=new  Router({
	mode:"history",/*设置默认的url类似后端的跳转地址，去掉hash模式（带#符号）*/
	routes:[
		{
			path:  '/film',
			component:Film,
			children:[
				{
					path: "nowPlaying",
					component: NowPlaying
				},
				{
					path: "comingSoon",
					component: ComingSoon
				},
				{
					path:"detail/:id",
					component: Detail
				},
				{
					path:"",
					redirect: "/film/nowPlaying"
				}
				
			]
		},
		{
			path:  '/cinema',
			component:  Cinema
		},
		{
			path:'/center',
			component:  Center
		},
		{
			path:'/home',
			component:  Home
		}/*,
		{
			path: "*",
			redirect:"/"
		}*/
	]
});

export default router

router.beforeEach((to,from,next)=>{

	if(Vue.ls.get("Access-Token")){
		//如果系统中有token，则证明登录过
		alert("您已经登录，开始获取权限");

		console.log(store.getters.permissionList);


		if(store.getters.permissionList==null || store.getters.permissionList.length === 0){
			//开始获取权限集合
			console.log("开始获取所有权限集合");

			store.dispatch("GetPermissionList").then((result)=>{
				console.log("result=>",result);
			}).catch((err)=>{
				console.log(err);
			});
		}

	}else{
		//跳转到登录页面
		alert("没有登录!");
		next();

	}
});
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)
}


