<template>
  <div class="profile__practice profile-practice">
    <h3 class="profile-practice__title">Практические работы</h3>
    <practice-item 
      v-for="practice in list" 
      :practice="practice"
      :key="practice.id"
      @remove="$emit('remove', practice)"/>
    <div class="profile-practice__error" v-if="!list.length">Практических нет</div>
  </div> 
</template>
<script>
import PracticeItem from "@/components/PracticeItem.vue";

export default {
  name: "practice-list",
  components: {
    PracticeItem
  },
  props: {
    list: {
      type: Object,
      required: true,
    }
  },

}
</script>
