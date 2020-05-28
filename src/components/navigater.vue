<template>
  <div class="navigater">
    <nav>
      <button
        class="nav_button"
        v-bind:class="setColor('index')"
        v-on:click="navClick('index')"
        v-on:mouseenter="mouseenterHover('index')"
        v-on:mouseleave="mouseLeave()"
      >
      <!-- v-bind:class="[{ 'nav_button--focus' : isHover == 'index'}]" -->
        首頁
      </button>
      <!-- <router-link to="/SophiaProfio"> -->
      <button
        class="nav_button"
        
        v-bind:class="setColor('profio')"
        v-on:click="navClick('profio')"
        v-on:mouseenter="mouseenterHover('profio')"
        v-on:mouseleave="mouseLeave()"
      >
        作品集
      </button>
      <!-- </router-link> -->
      <button
        class="nav_button"
        v-bind:class="setColor('chat')"
        v-on:click="navClick('chat')"
        v-on:mouseenter="mouseenterHover('chat')"
        v-on:mouseleave="mouseLeave()"
      >
        關於我
      </button>
    </nav>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex';

export default {
  props: ["isFocus"],
  name: "navigator",
  data() {
    return {
      isHover: this.isFocus,
      navButtonColor:'nav_button--focus_'+this.$store.state.user
    };
  },
  computed: {
    
  },
  methods: {
    mouseenterHover: function(str) {
      this.isHover = str;
    },
    mouseLeave: function() {
      this.isHover = this.isFocus;
    },
    navClick:function(str){
      console.log(str,this.$store.state.user)
      this.$router.push({path: '/'+this.$store.state.user+'/'+this.isHover});
    },
    setColor:function(str){
      if( this.isHover==str){
        return this.navButtonColor;
      }
    }
  }
};
</script>
