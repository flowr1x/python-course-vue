<template>
  <div class="profile__practice profile-practice">
    <h3 class="profile-practice__title">Список практические работы</h3>
    <show-practice-item-user
      v-for="(practiceObj) in userPractice" 
      :practice="practiceObj"
      :key="practiceObj.id"
      @sendPracticeInUser="(item) => $emit('sendPracticeInUser', item)"/>
      <div class="profile-practice__error" v-if="!isEmpty(userPractice)">У данного пользователя нет индивидуальных заданий</div>
  </div> 
</template>
<script>
import ShowPracticeItemUser from "@/components/ShowPracticeItemUser.vue";

export default {
  name: "show-practice-list-user",
  components: {
    ShowPracticeItemUser
  },
  
  props: [
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
