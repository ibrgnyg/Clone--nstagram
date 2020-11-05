<template>
  <div>
     <stories/>
    <posts/>
    <div class="content">
    <h4>Suggestions For You</h4>
    <div class="seeall">
    See All
    </div>
    <div class="userpost">
      <userpostpro/> <div class="username">userone</div><div class="follow">Follow</div>
      <userpostpro/> <div class="username">_userunknown</div><div class="follow">Follow</div>
      <userpostpro/> <div class="username">twouser</div><div class="follow">Follow</div>
      <userpostpro/> <div class="username">user_us124</div><div class="follow">Follow</div>
    </div>
    <br>
    <div class="footer">
      <a>Abou</a>. <a>Help</a>. <a>Press</a>. <a>Apı</a>. <a>Jobs</a>. <a>Privacy</a>. <a>Terms</a>.
      <br>
      <br>
      <a>Locations</a>. <a>Top Accounts</a>. <a>Hashtags</a>. <a>Langue</a>
      <br>
      <br>
      <br>
      © 2020 INSTAGRAM FROM FACEBOOK
    </div>
    </div>

  </div>
</template>

<script>
import posts from "@/components/Posts.vue";
import userpostpro from "@/components/ProPhoto.vue";
import stories from "@/components/Stories.vue";
export default {
  name:"Home",
  components:{posts,userpostpro,stories}

};
</script>




<style  >

.follow{
 margin-left: 236px;
  margin-top: -16px;
  display: block;
      font-size: 12px;
    line-height: 14px;
 color: #0095f6;
    color: rgba(var(--d69,0,149,246),1);
    cursor: pointer;
}

.username{
  margin-left: 87px;
  margin-top: -45px;
  color: #262626;
  color: rgba(var(--i1d,38,38,38),1);
  text-decoration: none;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  
}
.userpost{ 
    margin-left: -43px;
    margin-top:4px;
    cursor: pointer;
    
}
.seeall{
  display: block;
  margin-left: 190px;
  margin-top: -16px;
   color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
    font-weight: 600;
    cursor: pointer;
    font-size: 12px;
    line-height: 14px;
    
}
h4{
  color: #8e8e8e;
    color: rgba(var(--f52,142,142,142),1);
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin: -3px 0 -4px;
}
.footer{
  margin:10px;
  margin-left: -2px;
}
.footer,a{
    color: #c7c7c7;
    color: rgba(var(--edc,199,199,199),1);
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    text-transform: none;
    cursor: pointer;
}
.content{
    float: left;
    margin-left: 670px;
    max-width: 614px;
    width: 100%;
       margin-top: -4472px;
    position: fixed;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}

body{

}

</style>