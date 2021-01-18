import Vue from 'vue';
import Router from 'vue-router';
import DomainList from '@/views/DomainList';
import DbList from '@/views/DbList';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DomainList',
      component: DomainList
    },
    {
      path: '/DbList',
      name: 'DbList',
      component: DbList
    }
    
  ]
});