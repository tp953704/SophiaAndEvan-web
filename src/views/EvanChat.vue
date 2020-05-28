<template>
  <div class="EvanChat background_dark_nocat">
    <navigater v-bind:isFocus="btnStr"></navigater>
    <article class="cn-title">
      <span class="sm-icon icon-home"></span>
      <span class="sm-text">首頁 / 聯絡方式</span>
    </article>
    <div class="container">
      <div class="cn_content">
        <div class="content_Introduce">
          <div class="Intro_title">
            <div class="lg-text">自傳</div>
          </div>
          
          <div class="Intro_content bg-text"><span class="romantic-blue content--title">數學系怎麼會來寫程式</span>很多人曾經這樣問我
                ，我是王鳳群是目前就讀東吳數學系大四的學生，經過數學系四年的鍛鍊對數字及數據有很好的敏銳感對於抽象的東西也有很好的吸收能力，喜歡用程式解決不同的問題，有很好的自主學習意識，期望自己可以結合數學領域的知識和程式方面的能力成為特別且優秀的工程師。
          </div>
          <div class="Intro_icon">
            <div class="icon-computer bg-icon icon">
              <div class="icon__text juicy-orange">
                {{iconStr}}
              </div>
            </div>
          </div>
        </div>
        <div class="content_chatInfo">
          <div class="chatInfo_title">
            <div class="lg-text">個人資料</div>
          </div>
          <div class="chatInfo_content"><div class="md-text">姓名 : 王鳳群</div></div>
          <div class="chatInfo_content"><div class="md-text">出生 : 1997/12/09</div></div>
          <div class="chatInfo_title">
            <div class="lg-text">聯絡方式</div>
          </div>
          <div class="chatInfo_content"><div class="md-text">Phone : 0978428767</div></div>
          <div class="chatInfo_content"><div class="md-text">Email : tp953704@gmail.com</div></div>
          <div class="chatInfo_title">
            <div class="lg-text">技能</div>
          </div>
          <div class="chatInfo_content"><div class="md-text">前端 (RWD Layout) : HTML5/CSS/SCSS/RWD </div></div>
          <div class="chatInfo_content"><div class="md-text">前端 (Javascript) : Vue React navtive	jQuery AJAX&API串接</div></div>
          <div class="chatInfo_content"><div class="md-text"> 後端 :ASP.NET Core 3.1+EF Core 3.1.2+SQL Server+SSMS	</div></div>
          <div class="chatInfo_content"><div class="md-text"> 小工具:	Git / Github / Gitlab / wiki</div></div>
          <div class="chatInfo_title">
            <div class="lg-text">工作經歷</div>
          </div>
          <div class="chatInfo_content"><div class="md-text">2019年3月~至今 : 富邦人壽系統整合部 擔任實習生</div></div>
          
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>
import navigater from "../components/navigater";
export default {
  name: "EvanChat",
  data() {
    return {
      btnStr: "chat",
      iconStr: ""
    };
  },
  components: {
    navigater
  },
  created(){
    this.animate = setInterval(()=>{
      let comesoonstr = "(1,1)=>{return 2}";
      let nowstr = this.iconStr;
      console.log(nowstr.length)
      if(comesoonstr.length<=nowstr.length){
        this.iconStr="";
      }else{
        this.iconStr+=comesoonstr[nowstr.length];
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