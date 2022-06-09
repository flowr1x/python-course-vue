<template>
  <div class="profile__practice profile-practice">
    <practice-item-admin 
      v-for="(practiceObj, practiceName) in list" 
      :practice="practiceObj"
      :key="practiceName"
      @remove="$emit('remove', practiceName)"/>
    <div class="profile-practice__error" v-if="!isEmpty(list)">Практических нет</div>
  </div> 
</template>
<script>
import PracticeItemAdmin from "@/components/PracticeItemAdmin.vue";

export default {
  name: "practice-list-admin",
  components: {
    PracticeItemAdmin
  },
  props: [
    "list",
  ],
  methods: {
    isEmpty(obj) {
      for (let item in obj) return true;
      return false
    },
  },
}
</script>
