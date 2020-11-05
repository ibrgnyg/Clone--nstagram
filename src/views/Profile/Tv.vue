<template>
    <div class="tv">
    <img src="https://www.getfoundquick.com/wp-content/uploads/2018/06/IGTV-Logo.jpg" height="65px">
    <h1>Upload a Video</h1>
    <div class="wrt">Videos must be between 1 and 60 minutes long.</div>
    <br>
    <button>Upload</button>
    </div>
    
</template>
<script>
export default {
    name:"Save",
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
.tv{
    text-align: center;
   margin-top: 110px;
    margin-left: -90px;
}
button{
    border: 1px solid transparent;
    background-color: #0095f6;
    background-color: rgba(var(--d69,0,149,246),1);
        border-radius: 4px;
    color: #fff;
    color: rgba(var(--eca,255,255,255),1);
    position: relative;
    height: 33px;
    width: auto;
    padding: 5px 30px;
    cursor: pointer;
    margin:10px;
}
</style>