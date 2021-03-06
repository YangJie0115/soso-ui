import Vue from 'vue'
import Router from 'vue-router'
import app from "./App.vue";
Vue.use(Router)

export const router =new Router({
        routes:[
          // 默认登录
          {
          path: '/',
          redirect: '/app'
        },
        // icon
        {
          path: '/app',
          component:app,
        },
        // {
        //   path: '/',
        //   redirect: '/icon'
        // },
        // // icon
        // {
        //   path: '/icon',
        //   component:resolve =>require(['../packages/icon/demo/icon.vue'],resolve),
        // },
        // {
        //   path: '/button',
        //   component:resolve =>require(['../packages/button/demo/button.vue'],resolve),
        // },
        // {
        //   path: '/input',
        //   component:resolve =>require(['../packages/input/demo/input.vue'],resolve),
        // },
        // {
        //   path: '/textarea',
        //   component:resolve =>require(['../packages/textarea/demo/textarea.vue'],resolve),
        // },
        // {
        //   path: '/radio',
        //   component:resolve =>require(['../packages/radio/demo/radio.vue'],resolve),
        // },
        // {
        //   path: '/checkbox',
        //   component:resolve =>require(['../packages/checkbox/demo/checkbox.vue'],resolve),
        // },
        // {
        //   path: '/table',
        //   component:resolve =>require(['../packages/table/demo/table.vue'],resolve),
        // },
        // {
        //   path: '/select',
        //   component:resolve =>require(['../packages/select/demo/select.vue'],resolve),
        // },
        // {
        //   path: '/cascader',
        //   component:resolve =>require(['../packages/cascader/demo/cascader.vue'],resolve),
        // },
        // {
        //   path: '/pagination',
        //   component:resolve =>require(['../packages/pagination/demo/pagination.vue'],resolve),
        // },
        // {
        //   path: '/sign',
        //   component:resolve =>require(['../packages/sign/demo/sign.vue'],resolve),
        // },
        // {
        //   path: '/message',
        //   component:resolve =>require(['../packages/message/demo/message.vue'],resolve),
        // },
        // {
        //   path: '/dialog',
        //   component:resolve =>require(['../packages/dialog/demo/dialog.vue'],resolve),
        // },
        // {
        //   path: '/navMenu',
        //   component:resolve =>require(['../packages/navMenu/demo/navMenu.vue'],resolve),
        // },
        // {
        //   path: '/navMenu1',
        //   component:resolve =>require(['../packages/navMenu/demo/navMenu.vue'],resolve),
        // },
        // {
        //   path: '/breadcrumb',
        //   component:resolve =>require(['../packages/breadcrumb/demo/breadcrumb.vue'],resolve),
        // },
        
        // 账号信息
        // {
        //   path:'/account',
        //   component:resolve =>require(['@/pages/account'],resolve),
        // },
        // // 分级大屏
        // {
        //   path:"/bigLung",
        //   component:resolve =>require(['@/pages/pfmsc_fenji/bigLung.vue'],resolve),
        // },
        // { path: '*', redirect: '/404', hidden: true },
        // // 统一打印页面
        // {
        //   path: '/print',
        //   component:resolve =>require(['@/pages/print.vue'],resolve),
        // },
        // // 浙大页面
        // {
        //   path: '/reportTit',
        //   component:resolve =>require(['@/pages/reportTit.vue'],resolve),
        // },
      ]
});

// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  next();
})
export default  router
// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({ y: 0 }),
//   routes: router
// })
