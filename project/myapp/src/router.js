import Vue from 'vue'
import Router from 'vue-router'
import Film from "@/views/Film"
import Cinema from "@/views/Cinema"
import Center from "@/views/Center"
import NowPlaying from "@/views/Film/NowPlaying"
import ComingSoon from "@/views/Film/ComingSoon"
import Detail from "@/views/Film/Detail"


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
			path: "*",
			redirect:"/film"
		}
	]
});

export default router


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
 return originalPush.call(this, location).catch(err => err)
}
