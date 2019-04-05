import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import Admin from './components/Admin.vue';
import About from './components/about/about.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
//二级路由
import History from './components/about/History.vue';
import Contact from './components/about/Contact.vue';
import OrderingGuide from './components/about/OrderingGuide.vue';
import Delievery from './components/about/Delievery.vue';
//三级路由
import PhoneNumber from './components/about/thirdRouter/PhoneNumber.vue';
import PhonePerson from './components/about/thirdRouter/PhonePerson.vue';






//配置路由
const router=new VueRouter({
  mode:'history',
  routes:[
    {path:'/',redirect:{name:'homeLink'}},
    {name:'homeLink',path:'/home',components:{
       default:Home,
      'orderingGuide':OrderingGuide,
      'history':History,
      'delievery':Delievery
    }},
    {name:'menuLink',path:'/menu',component:Menu},
    {name:'adminLink',path:'/admin',component:Admin},
    {name:'aboutLink',path:'/about',redirect:'/about/history',component:About,children:[
      {name:'historyLink',path:'history',component:History},
      {name:'contactLink',path:'contact',redirect:'/about/contact/phoneNumber',component:Contact,children:[
        {name:'phoneNumber',path:'phoneNumber',component:PhoneNumber},
        {name:'phonePerson',path:'phonePerson',component:PhonePerson},
      ]},
      {name:'orderingGuideLink',path:'orderingGuide',component:OrderingGuide},
      {name:'delieveryLink',path:'Delievery',component:Delievery},
    ]},
    {name:'loginLink',path:'/login',component:Login},
    {name:'registerLink',path:'/register',component:Register},

    
    {path:'*',redirect:{name:'homeLink'}}
   

  ],
});

export default router;
