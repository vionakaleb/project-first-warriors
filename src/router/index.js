import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages'
import Home from '@/pages/index/home'
import News from '@/pages/index/news'
import Tutorial from '@/pages/index/tutorial'
import NewsDetail from '@/pages/index/newsdetail'
import Tournament from '@/pages/index/tournament'
import FAQ from '@/pages/index/faq'
import SocialMedia from '@/pages/index/socialmedia'
import Gallery from '@/pages/index/gallery'
import Support from '@/pages/index/support'
import Rules from '@/pages/index/rules'
import Contactus from '@/pages/index/contactus'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '',
      name: '',
      component: Home
    },
    {
      path: 'home',
      name: 'Home',
      component: Home
    },
    {
      path: 'tutorial',
      name: 'Tutorial',
      component: Tutorial
    },
    {
      path: 'news',
      name: 'News',
      component: News
    },
    {
      path: 'newsdetail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: 'tournament',
      name: 'Tournament',
      component: Tournament
    },
    {
      path: 'faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: 'socialmedia',
      name: 'SocialMedia',
      component: SocialMedia
    },
    {
      path: 'gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: 'support',
      name: 'Support',
      component: Support
    },
    {
      path: 'rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: 'contactus',
      name: 'Contactus',
      component: Contactus
    }
    ]
  },
  {
    path: '/login',
    beforeEnter (to, from, next) {
      window.location = 'https://www.yamisok.com/login'
    }

  },
  {
    path: '/register',
    beforeEnter (to, from, next) {
      window.location = 'https://localhost:8080/register'
    }
  }
  ],
  mode: 'history',
  scrollBehavior () {
    document.getElementById('app').scrollIntoView({
      behavior: 'auto'
    })
  }
})
