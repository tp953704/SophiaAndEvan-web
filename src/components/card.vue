/* eslint-disable vue/require-v-for-key */
<template>
  <div class="card" v-bind:class="{ 'card-bottom': isBottom }">
    <i v-bind:class="iconArr"></i>
    <article class="icon-article sm-text sadding-gray">
      {{ article }}
    </article>
    <!-- <article class="icon-article bg-text sadding-gray">
      {{ BgText }}
    </article> -->
    <ul>
      <template v-for="item in listArr">
        <li class="sm-text sadding-gray" :key="item">
          {{ item }}
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["isBottom", "iconArr", "article","BgText", "listArr"],
  data() {
    return {};
  }
};
</script>
