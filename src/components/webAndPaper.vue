<template>
  <div class="cn-content webAndPaper">
        <div class="cn-content_icon">
          <div class="icon-computer bg-icon icon-here">
              <div v-bind:class="webClass" class="bg-icon computer_icon">
                  <div>{{webStr}}</div>
              </div>
          </div>
          <div class="paper">
              <div v-bind:class="phoneClass" class="bg-icon phone_icon">
                  <div>{{phoneStr}}</div>
              </div>
          </div>
           <div class="cn-content_introStr">
          <div class="cn-content_introStrBox bg-text">
            <div class="content_introStr_title lg-text">
                {{titleStr}}
            </div>
            <div class="">
                {{typeStr}}
            </div>
            <div>
              負責工作:
            </div>
            <template v-for="str in contentArr">
                <div style="padding-left:2rem" :key="str">
                    {{str}}
                </div>
            </template>
          </div>
        </div>
        </div>
       
      </div>
</template>
<script>
// import { mapGetters } from 'vuex';

export default {
  props: ["webClass","webStr","phoneClass","phoneStr","titleStr","typeStr","contentArr"],
  name: "webAndPaper",
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  methods: {
    
  }
};
</script>