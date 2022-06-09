<template>
  <div class="profile__practice profile-practice">
    <h3 class="profile-practice__title">Список практические работы</h3>
    <practice-item-user
      v-for="(practiceObj, practiceName) in list" 
      :practice="practiceObj"
      :key="practiceName"
      :idPractice="practiceName"
      :userPractice="userPractice"
      @sendPracticeInUser="(item) => this.$emit('sendPracticeInUser', item)"/>
    <div class="profile-practice__error" v-if="!isEmpty(list)">Практических нет</div>
  </div> 
</template>
<script>
import PracticeItemUser from "@/components/PracticeItemUser.vue";

export default {
  name: "practice-list",
  components: {
    PracticeItemUser
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
  },
}
</script>
