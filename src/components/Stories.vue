<template>
  <div>
    <div class="box">
        <div>
        <figure class="photo">
          <img class="img" src="https://www.kindpng.com/picc/m/225-2253717_cristiano-ronaldo-juventus-circle-hd-png-download.png"   >
        </figure>
       </div>
      
        
        <div>
        <figure class="photo">
          <img class="img" src="data:image/png;base64,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"   >
        </figure>
       </div>
       <div>
        <figure class="photo">
          <img class="img" src="https://miro.medium.com/max/594/1*F1zM-rtSTzW9egR24Tl-VA.png"   >
        </figure>
        
       </div>
        <div>
        <figure class="photo">
          <img class="img" src="https://mennankose.com/content/images/2019/10/netcore.png"   >
        </figure>
        
       </div>
       <div class="right">
       <div class="username">cristiano</div>
            <div class="username">vuejs</div>
             <div class="username">c#</div>
             <div class="username">.net</div>
       </div>
       
    </div>
 
  </div>
</template>

<script>
export default {
    name:"stories",
}
</script>

<style scoped>
.right{
 
   float:left;
    margin-right: 0px;
    margin-left: -50px;
  display: inline-flex;
}
.username{
  margin-left: 63px;
  margin-block-start: -11px;
      color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
    display: block;
    font-size: 12px;
    line-height: 14px;
    max-width: 64px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    top: 68px;
    white-space: nowrap;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}
.box{
    height: 115px;
    margin: 30px;
    background-color: #fff;
    background-color: rgba(var(--d87,255,255,255),1);
  	border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 2px;
    width: 640px;
    margin-left: -2px;

}

.photo {
  float:left;
    margin-right: 12px;
    margin-left: 10px;
display: inline-flex;
  padding: 2px;
  border-radius: 999px;
  background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );
  cursor: pointer;
  
}
.img {
    border-radius: inherit;
    border: 2px solid white;
    height: 60px;
  }
</style>