<template>

  <div class="box top">
   <div>
    <div class="directuser">
    <div class="username">
         user
    <div class="iconone">
    <span style="display: inline-block; transform: rotate(180deg);"><svg aria-label="Down Chevron Icon" class="_8-yf5 " fill="#262626" height="20" viewBox="0 0 48 48" width="20"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span>
    </div>
       <div class="icon">
         <svg aria-label="New Message" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>
       </div>
    </div>
    
    </div>
    
    <div class="border">
    
    </div>
    <div class="vertical">
    
    </div>
    </div>
    <div class="up">
    <div class="wrte">
   <div class="two">
          <img src="https://static.thenounproject.com/png/2796195-200.png" height="65px">
   </div>
     
    <div class="yur">Your Messages</div>
    <div class="snd">Send private photos and messages to a friend or group.</div>
   </div>
    <div class="btn">
     <button class="btn" type="button">Send Message</button>
    </div>
    </div>
   


  
  </div>
		
		

</template>
<script>
export default {
    name:"direct",
    
}
</script>
<style >
body{
      background-color: #fafafa;
    background-color: rgba(var(--b3f,250,250,250),1);
}

</style>
<style scoped>
.up{
 margin-block-start: -200px;
}
.two{
  margin-left: 138px;
  margin-block-end: 15px;
}
.yur{
    margin-left: 101px;
    margin-block-end: 15px;
      color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size: 22px;
    line-height: 26px;
}
.snd{
        color: #8e8e8e;
    color: rgba(var(--f52,142,142,142),1);
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    line-height: 18px;
    margin: -3px 0 -4px;
}
.wrte{
    margin-left: 460px;
    margin-block-start: -345px;
}
button  {
    border: 1px solid transparent;
    background-color: #0095f6;
    background-color: rgba(var(--d69,0,149,246),1);
        color: rgba(var(--i1d,38,38,38),1);
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    border-radius: 4px;
    color: #fff;
    color: rgba(var(--eca,255,255,255),1);
    position: relative;
    cursor: pointer;
    height: 30px;
    width: 110px;

}
.btn{
    margin-left: 290px;
  margin-block-start: 15px;
}
.vertical{
       border: 1px solid rgba(var(--b6a,219,219,219),1);
    height: 680px;
    margin-right: 745px;
    -webkit-margin-before: -60px;
    margin-block-start: -60px;
}
.box {
	height: 770px;
    margin: 20px;
    background-color: #fff;
    background-color: rgba(var(--d87,255,255,255),1);
	border: 1px solid rgba(var(--b6a,219,219,219),1);
    margin-left: -40px;
    width: 1010px;
    border-radius: 6px;
}





.border{
    background-color: #fff;
    background-color: rgba(var(--d87,255,255,255),1);
    border-bottom: 1px solid #dbdbdb;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    margin: 10px;
    width: 265px;
     margin-left: -2px;
    
}
.iconone{
    margin-left: 36px;
    cursor: pointer;
     margin-block-start: -25px;
}
.icon{
    margin-left: 120px;
     margin-block-start:-20px;
     cursor: pointer;
     
}
.username{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;    font-size: 16px;
    line-height: 24px;
    margin: -6px 0 -6px;
        font-weight: 600;
     color: #262626;
    color: rgba(var(--i1d,38,38,38),1);
    margin-block-start: 10px;
    cursor: pointer;
    margin-left: 90px;
    justify-content: center;
    
}


</style>