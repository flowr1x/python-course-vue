<template>
  <div class="profile__practice profile-practice">
    <h3 class="profile-practice__title">Список практические работы</h3>
    <practice-item 
      v-for="(obj, practice) in list" 
      :practice="obj"
      :key="obj.id"
      :idPractice="practice"
      :userPractice="userPractice"
      @remove="$emit('remove', practice)"
      @sendPracticeInUser="f"/>
    <div class="profile-practice__error" v-if="!isEmpty(list)">Практических нет</div>
  </div> 
</template>
<script>
import PracticeItem from "@/components/PracticeItem.vue";

export default {
  name: "practice-list",
  components: {
    PracticeItem
  },
  props: [
    "list",
    "userPractice"
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
