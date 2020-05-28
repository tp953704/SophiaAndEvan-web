<template>
  <div class="EvanProfioCoding background_dark_nocat">
    <navigater v-bind:isFocus="btnStr"></navigater>
    <article class="cn-title">
      <span class="sm-icon icon-home"></span>
      <span class="sm-text">首頁 / 作品集 / 前端作品</span>
    </article>
    <div class="container">
      <webAndPhone
        v-bind:webClass="[webPhoneObject.webClass]"
        v-bind:webStr="webPhoneObject.webStr"
        v-bind:phoneClass="[webPhoneObject.phoneClass]"
        v-bind:phoneStr="webPhoneObject.phoneStr"
        v-bind:titleStr="webPhoneObject.titleStr"
        v-bind:typeStr="webPhoneObject.typeStr"
        v-bind:contentArr="webPhoneObject.contentArr"
      ></webAndPhone>
    </div>
    <div class="projectGroup">
      <!-- class="projectGroup_item--shadow" -->
      <!-- v-on:click="IsGroupItemClick('item01')" -->
      <div v-bind:class="setIsGroupItemClick('item01')"
          v-on:click="IsGroupItemClick('item01',{
             webClass:'icon-fubon01_web01',
                phoneClass:'icon-fubon01_phone01',
                titleStr:'名稱:線上交易專案--第一階段',
                typeStr:'類型:(金融交易平台)對外網站',
                contentArr:['切版:HTML5/CSS/SCSS/RWD','前端功能: jQuery3.4.0+javascript']
          })"
      >
        <div class="projectGroup_item">
          <div class="md-text">線上交易專案 (金融交易平台)</div>
          <div class="md-text">介紹:</div>
          <div class="md-text">於2019年5月~~2019年12月</div>
          <div class="md-text"> 在 "富邦人壽" 所參與的專案</div>
        </div>
      </div>
      <div v-bind:class="setIsGroupItemClick('item02')"
            v-on:click="IsGroupItemClick('item02',{
               webClass:'icon-fubon02_web01',
                phoneClass:'',
                phoneStr:'此專案無小網需求',
                titleStr:'名稱:LOG檢核平台',
                typeStr:'類型:(員工管理系統)對內網站',
                contentArr:['切版:HTML5/CSS/SCSS/RWD','前端功能: jQuery3.4.0+javascript']
            })">
        <div class="projectGroup_item">
          <div class="md-text">LOG檢核平台(員工管理系統)</div>
          <div class="md-text">介紹:</div>
          <div class="md-text">於2020年12月~~至今</div>
          <div class="md-text"> 在 "富邦人壽" 所參與的專案</div>
        </div>
      </div>
       <div v-bind:class="setIsGroupItemClick('item03')"
             v-on:click="IsGroupItemClick('item03',{
                webClass:'icon-3Dweb_web01',
                phoneClass:'',
                phoneStr:'為了保障視覺效果 無小網',
                titleStr:'名稱:線上交易專案--第一階段',
                typeStr:'網址:https://tp953704.github.io/3Dweb/index',
                contentArr:['切版:HTML5/CSS/SCSS/Animations','前端功能: jQuery3.4.0 + javascript']
             })">
        <div class="projectGroup_item">
          <div class="md-text"> 3D網頁小動畫</div>
          <div class="md-text">介紹:</div>
          <div class="md-text">於2019年11月~~2019年12月</div>
          <div class="md-text">練習網頁動畫所做的作品之一 </div>
        </div>
      </div>
       <div v-bind:class="setIsGroupItemClick('item04')"
            v-on:click="IsGroupItemClick('item04',{
                webClass:'icon-3D',
                webStr:'即為當前位置',
                phoneClass:'icon-3D',
                phoneStr:'',
                titleStr:'名稱:Vue的初嘗試/作品集',
                typeStr:'網址:目前位子',
                contentArr:['切版:Vue/Vuex/CSS/SCSS','前端功能: ES6']
             })">
        <div class="projectGroup_item">
          <div class="md-text"> Vue的初嘗試/作品集 (即為現在這個網頁)</div>
          <div class="md-text">介紹:</div>
          <div class="md-text">於2020年3月~~至今</div>
          <div class="md-text">在課餘時間練習Vue並且整理作品集的網頁</div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import navigater from "../../components/navigater";
import webAndPhone from "../../components/webAndPhone";
export default {
  name: "EvanProfioCoding",
  data() {
    return {
      btnStr: "profio",
      comesoon:"",
      isGroupItemClick:"item01",
      webPhoneObject:{
        webClass:'icon-fubon01_web01',
        webStr:"",
        phoneClass:'icon-fubon01_phone01',
        phoneStr:"",
        titleStr:'名稱:線上交易專案--第一階段',
        typeStr:'類型:(金融交易平台)對外網站',
        contentArr:['切版:HTML5/CSS/SCSS/RWD','前端功能: jQuery3.4.0+javascript']
      }
    };
  },
  components: {
    navigater,
    webAndPhone
  },
  created(){
    
  },
  methods: {
    // 按鈕按下去要有光輝
    IsGroupItemClick:function(str,object){
      this.isGroupItemClick = str;
      this.webPhoneObject=object;
    },
    setIsGroupItemClick:function(str){
      if(this.isGroupItemClick == str){
        return 'projectGroup_item--shadow';
      }
    },
  }
};
</script>
<style lang="scss"></style>