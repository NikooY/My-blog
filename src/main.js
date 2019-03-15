// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

//配置路由，直接调用路由文件 routes.js
const router = new VueRouter({
	routes:Routes,
	mode:"history"
})

//自定义指令,全局的
// Vue.directive('rainbow',{
// 	bind(el,bingding,vnode){
// 		el.style.color = "#"+Math.random().toString(16).slice(2,8);
// 	}
// })

Vue.directive('theme',{
	bind(el,binding,vnode){
		if(binding.value=='wide'){
			el.style.maxWidth = '1260px';
		}else if(binding.value == 'narrow'){
			el.style.maxWidth = '560px';
		}else if(binding.value == 'normal'){
			el.style.maxWidth = '800px';
		}

		//v-theme:background 'background'就是传入的arg
		if(binding.arg == 'background'){
			el.style.background = "#6677cc";
			el.style.padding = "20px";
		}
	}
})

//自定义过滤器
//这里是全局的过滤器，及所有子组件都可以使用
// Vue.filter("to-uppercase",function(value){
// 	return value.toUpperCase();
// })

Vue.filter("snippet",function(value){
	return value.slice(0,100) + "...";
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
