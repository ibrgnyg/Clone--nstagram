import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Direct from "../views/Dm/Direct.vue";
import Explore from "../views/Expo/Explore.vue";
import Activity from "../views/Profile/Activity.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/activity",
    name:"activ",
    component:Activity
  },
  {
    path:"/explore",
    name:"explore",
    component:Explore

  },
  {
    path:"/direct",
    name:"direct",
    component:Direct

  },
 
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile/Index.vue"),
      children: [
        
        { path: '',name:"posts", component: ()=> import(/*webpackChunkName: "profileposts" */"../views/Profile/Posts.vue") },
        { path: 'igtv',name:"igtv", component: ()=> import(/*webpackChunkName: "profileigtv" */"../views/Profile/Tv.vue") },
        { path: 'saved',name:"saved", component: ()=> import(/*webpackChunkName: "profilesaved" */"../views/Profile/Saved.vue") },
        { path: 'tag',name:"tag", component: ()=> import(/*webpackChunkName: "profiletags" */"../views/Profile/Tags.vue") },

      ]
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
