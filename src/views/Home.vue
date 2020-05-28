<template>
  <div class="Home">
    <div class="page-left">
      <!-- <router-link to="/Sophia/Index"> -->
        <div class="page_icon"  v-on:click="setUser('Sophia')"></div>
      <!-- </router-link> -->
      <div class="page_name">
        <div class="page_name--C">楊雅鈞</div>
        <div class="page_name--E">Sophia</div>
      </div>
    </div>
    <div class="page-right">
      <!-- <router-link to="/EvanIndex"> -->
        <div class="page_icon" v-on:click="setUser('Evan')"></div>
      <!-- </router-link> -->
      <div class="page_name">
        <div class="page_name--C">王鳳群</div>
        <div class="page_name--E">E v a n</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data(){
    return{
      btnStr: "index"
    }
  },
  methods :{
    setUser:function(str){
      this.$store.state.user=str;
      this.$router.push({path: '/'+this.$store.state.user+'/index'});
    }
  }
  // components: {
  //   HelloWorld
  // }
};
</script>
<style lang="scss">
</style>
