<template>
    <div>
    <div class="tags">
      <img src="https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_tagged-512.png" height="55px">
      <h1>Photos of you</h1>
    <div class="wrt">When people tag you in photos, they'll appear here.</div>

 
    </div>
    </div>
</template>
<script>
export default {
name:"tags"
}
</script>
<style scoped>
.wrt{
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin: -3px 0 -4px;
    color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
h1{
    font-weight: 300;
    font-size: 28px;
    line-height: 32px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
.tags{
    text-align: center;
    margin-top: 110px;
    margin-left: -90px;
}

</style>