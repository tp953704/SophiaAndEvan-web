<template>
  <div class="EvanIndex background_dark">
    <navigater v-bind:isFocus="btnStr"></navigater>
    <div class="cantainer">
      <div class="cantainer_right">
        <div class="c_title">
          <span class="title_text title_text--blue">|</span>
          <span class="title_text">Feng chun</span>
          <span class="title_text title_text--blue">|</span>
          <span class="title_text">Portfolio</span>
          <span class="title_text title_text--blue">|</span>
        </div>
        <div class="c_context">
          <span class="context_text">Be gentle but firm.</span>
        </div>
        <div class="c_button">
          <span class="button_text">read more</span>
        </div>
      </div>
      <div class="cantainer_left">
        <div class="c_context">
          <span class="textBox">
            <span class="context_text c_name sadding-gray">王鳳群 Evan</span>
            <div class="context_text c_data sadding-gray">1997.12.09</div>
            <span class="context_text c_intro sadding-gray">積極、熱忱、努力</span>
            <span class="bg-text lemon-yellow">|</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navigater from "../components/navigater";
export default {
  name: "EvanIndex",
  data(){
    return{
      btnStr: "index"
    }
  },
  components: {
    navigater
  },
  methods:{
    
  }
};
</script>

<style lang="scss">
</style>
