<template>
  <div class="SophiaProfio background_light">
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
        <Card
          v-bind:isBottom="false"
          v-bind:iconArr="['md-icon', 'icon-photo']"
          v-bind:article="'攝影集 / Photography'"
          v-bind:listArr="[
            '人文',
            '信仰',
            '自然',
            '光芒'
          ]"
        ></Card>
        <Card
          v-bind:isBottom="true"
          v-bind:iconArr="['md-icon', 'icon-3D']"
          v-bind:article="'影視 / Filmography'"
          v-bind:listArr="[
            '找礁·藻礁',
            '誰在關燈',
            '我要一個家',
            '畢業派對預告片'
          ]"
        ></Card>
        <Card
          v-bind:iconArr="['md-icon', 'icon-film']"
          v-bind:article="'模型製作 / 3D models'"
          v-bind:listArr="[
            '角色1',
            '角色2',
            '角色3',
            '角色4'
          ]"
        ></Card>
         <Card
          v-bind:isBottom="true"
          v-bind:iconArr="['md-icon', 'icon-design']"
          v-bind:article="'設計 / Design'"
          v-bind:listArr="[
            '平面設計',
            '實習',
            '網站設計',
            'logo設計'
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
  name: "SophiaProfio",
  data() {
    return {
      btnStr: "profio"
    };
  },
  components: {
    navigater,
    Card
  },
  methods: {}
};
</script>
<style lang="scss"></style>
