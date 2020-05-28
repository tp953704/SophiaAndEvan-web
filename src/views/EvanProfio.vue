<template>
  <div class="EvanProfio background_dark_nocat">
    <navigater v-bind:isFocus="btnStr"></navigater>
    <article class="cn-title">
      <span class="sm-icon icon-home"></span>
      <span class="sm-text">首頁 / 作品集</span>
    </article>
    <div class="container">
      <div class="cn-content">
        <!-- <div class="card">
          <i class="md-icon icon-photo"></i>
          <article class="icon-article sm-text sadding-gray">
            攝影集 / Photography
          </article>
          <ul>
            <li class="sm-text sadding-gray">人文</li>
            <li class="sm-text sadding-gray">信仰</li>
            <li class="sm-text sadding-gray">自然</li>
            <li class="sm-text sadding-gray">光芒</li>
          </ul>
        </div> -->
        <router-link to="/Evan/Profio/Coding">
          <Card
          v-bind:isBottom="false"
          v-bind:iconArr="['md-icon', 'icon-code']"
          v-bind:article="'前端 / frontend'"
          v-bind:listArr="[
            '金融交易平台',
            '員工管理系統',
            '3D網頁小動畫',
            'Vue的初嘗試/作品集'
          ]"
        ></Card>
        </router-link>
        <router-link to="/Evan/Profio/B&GCoding">
        <Card
          v-bind:isBottom="true"
           v-bind:iconArr="['md-icon', 'icon-deskop']"
          v-bind:article="'Back-End & Machine Learning'"
          v-bind:listArr="[
            'web API 練習',
            'ML專題報告',
            comesoon,
            comesoon
          ]"
        ></Card>
        </router-link>
        <Card
           v-bind:iconArr="['smd-icon','icon-add']"
          v-bind:article="''"
          v-bind:listArr="[
            
          ]"
        ></Card>
         <Card
          v-bind:isBottom="true" 
          v-bind:iconArr="[]"
          v-bind:article="comesoon"
          v-bind:listArr="[
            
          ]"
        ></Card>
      </div>
    </div>
    
  </div>
</template>
<script>
import navigater from "../components/navigater";
import Card from "../components/card";
export default {
  name: "EvanProfio",
  data() {
    return {
      btnStr: "profio",
      comesoon:"",
    };
  },
  components: {
    navigater,
    Card
  },
  created(){
     this.animate=window.setInterval(()=>{
      let comesoonstr = "Coming soon…";
      let nowstr = this.comesoon;
      console.log(comesoonstr[nowstr.length])
      if(comesoonstr.length<=nowstr.length){
        // window.clearInterval(this.animate)
        this.comesoon="";
      }else{
        this.comesoon+=comesoonstr[nowstr.length];
      }

    },500)
  },
  destroyed(){
    window.clearInterval(this.animate);
  },
  methods: {}
};
</script>
<style lang="scss"></style>