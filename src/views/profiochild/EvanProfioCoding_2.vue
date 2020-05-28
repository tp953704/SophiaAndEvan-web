<template>
  <div class="EvanProfioCoding_2 background_dark_nocat">
    <navigater v-bind:isFocus="btnStr"></navigater>
    <article class="cn-title">
      <span class="sm-icon icon-home"></span>
      <span class="sm-text">首頁 / 作品集 / Back-End & Machine Learning</span>
    </article>
    <div class="container">
      <webAndPaper
        v-bind:webClass="[webPhoneObject.webClass]"
        v-bind:webStr="webPhoneObject.webStr"
        v-bind:phoneClass="[webPhoneObject.phoneClass]"
        v-bind:phoneStr="webPhoneObject.phoneStr"
        v-bind:titleStr="webPhoneObject.titleStr"
        v-bind:typeStr="webPhoneObject.typeStr"
        v-bind:contentArr="webPhoneObject.contentArr"
      ></webAndPaper>
    </div>
    <div class="projectGroup">
      <!-- class="projectGroup_item--shadow" -->
      <!-- v-on:click="IsGroupItemClick('item01')" -->
      <div v-bind:class="setIsGroupItemClick('item01')"
          v-on:click="IsGroupItemClick('item01',{
             webClass:'icon-projectApi',
             phoneClass:'icon-projectApiSQL',
                titleStr:'web API 練習',
                typeStr:'類型:RESTful API',
                contentArr:['程式:ASP.NET Core 3.1 SDK','資料庫: EF Core 3.1.2(Db first)+SQL Server +SSMS']
          })"
      >
        <div class="projectGroup_item">
          <div class="md-text">web API 練習</div>
          <div class="md-text">介紹:</div>
          <div class="md-text">於2020年2月~~2020年3月</div>
          <div class="md-text"> 以前後端分離為主架構
          </div>
        <div class="md-text">準備在2020年7月做一個工時
        </div>
            <div class="md-text">系統，而預先嘗試的練習
            </div>
            </div>
      </div>
      <div v-bind:class="setIsGroupItemClick('item02')"
            v-on:click="IsGroupItemClick('item02',{
               webClass:'icon-projectML',
                phoneClass:'icon-projectML2',
                phoneStr:'',
                titleStr:'ML專題報告--用不同分類器來辨別鳶尾花的種類',
                typeStr:'類型:校內Machine Learning課程專題',
                contentArr:['使用模組:matplotlib / Numpy Scipy / Scikit-learn','流程: ','    1. 利用 make_classification 建立模擬資料','    2. 利用 sklearn.datasets.load_digits() 來讀取內建             資料庫用線性的SVC來做分類','    3. 以8x8的影像之像素值來當作特徵(共64個特徵)','    4. 用 metrics.classification_report 來提供辨識報表']
            })">
        <div class="projectGroup_item">
          <div class="md-text"> ML專題報告 </div>
          <div class="md-text">介紹:</div>
          <div class="md-text">於2020年12月~~2020年1月</div>
          <div class="md-text"> 在學校學完Machine Learning的相關知識</div>
          <div class="md-text"> 知識後，了解python後所做的模組</div>
        </div>
      </div>
       <!-- <div v-bind:class="setIsGroupItemClick('item03')"
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
      </div> -->
    </div>
    
  </div>
</template>
<script>
import navigater from "../../components/navigater";
import webAndPaper from "../../components/webAndPaper";
export default {
  name: "EvanProfioCoding",
  data() {
    return {
      btnStr: "profio",
      comesoon:"",
      isGroupItemClick:"item01",
      webPhoneObject:{
        webClass:'icon-projectApi',
        webStr:"",
        phoneClass:'icon-projectApiSQL',
        phoneStr:"",
        titleStr:'web API 練習',
        typeStr:'類型:RESTful API',
        contentArr:['程式:ASP.NET Core 3.1 SDK','資料庫: EF Core 3.1.2(Db first)+SQL Server +SSMS']
        }
    };
  },
  components: {
    navigater,
    webAndPaper
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