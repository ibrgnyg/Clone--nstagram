<template>
  <div>
    <figure class="photo">
        <img class="img" src="https://instagram.fbho1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fbho1-1.fna.fbcdn.net&amp;_nc_ohc=qr8CH9GVPs4AX8e0WBS&amp;oh=268c581301056faa4d963fae5c9ee47c&amp;oe=5FC5A70F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"   >
    </figure>
  </div>
</template>

<script>
export default {
    name:"prophoto",

}
</script>

<style scoped>
.photo {
 
  display: inline-flex;
  padding: 2px;
  border-radius: 999px;
  /*background: linear-gradient(
    219deg,
    rgba(184, 63, 140, 1) 0%,
    rgba(237, 158, 90, 1) 100%
  );*/
  
}
.img {
    border-radius: inherit;
    border: 2px solid white;
    height: 28px;
  }
</style>