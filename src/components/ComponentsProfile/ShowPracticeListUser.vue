<template>
  <div class="profile__practice profile-practice">
    <h3 class="profile-practice__title">Список практические работы</h3>
    <div class="profile-practice__headline">
      <div class="profile-practice__label">{{ dataUser.info.firstName }} {{ dataUser.info.lastName }}</div>
      <div class="profile-practice__text">{{ dataUser.info.group }}</div>
    </div>
    <show-practice-item-user
      v-for="(practiceObj) in userPractice" 
      :practice="practiceObj"
      :key="practiceObj.id"
      @sendPracticeInUser="(item) => $emit('sendPracticeInUser', item)"/>
      <div class="profile-practice__error" v-if="!isEmpty(userPractice)">У данного пользователя нет индивидуальных заданий</div>
  </div> 
</template>
<script>
import ShowPracticeItemUser from "@/components/ComponentsProfile/ShowPracticeItemUser.vue";

export default {
  name: "show-practice-list-user",
  components: {
    ShowPracticeItemUser
  },
  props: [
    "userPractice",
    "dataUser"
  ],
  methods: {
    isEmpty(obj) {
      for (let item in obj) return true;
      return false
    },
  },
}
</script>
