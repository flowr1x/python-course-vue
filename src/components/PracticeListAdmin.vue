<template>
  <div class="profile__practice profile-practice">
      <practice-item-admin 
      v-for="(obj, practice) in list" 
      :practice="obj"
      :key="obj.id"
      @remove="$emit('remove', practice)"/>
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
    f(newPracticeUser) {
      this.$emit("sendPracticeInUser", newPracticeUser);
    }
  },
}
</script>
