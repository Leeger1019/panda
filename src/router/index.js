import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home";
import Game from "@/components/game";
import Yule from "@/components/yule";
import Xinxiu from "@/components/xinxiu";
import Ms from "@/components/ms";
import Ecy from "@/components/ecy";
import Lol from "@/components/lol";
import Detail from "@/components/detail";
import Lushi from "@/components/lushi";
import Wzny from "@/components/wzny";
import Zjgame from "@/components/zjgame";
Vue.use(Router)//安装路由功能

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/game',
      component: Game,
      children:[
        {
          path:"lol",
          component: Lol
        },
        {
          path:"lushi",
          component: Lushi
        },
        {
          path:"wzny",
          component: Wzny
        },
        {
          path:"zjgame",
          component: Zjgame
        }
      ]

    },
    {
      path: '/yule',
      component: Yule,
      children:[
        {
          path:"xinxiu",
          component: Xinxiu
        },
        {
          path:"ecy",
          component: Ecy
        },
        {
          path:"ms",
          component: Ms
        }

        ]
      

    },
    {
        path:"/detail", 
        component:Detail,
        name:"detail"
    },
    {
      path: '*',//任何路径都匹配到/home 组件中
      redirect:"/home"
    }
  ]
})
