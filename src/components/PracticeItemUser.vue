<template>
  <div class="profile-practice__block">
    <div class="profile-practice__headline">
      <div class="profile-practice__label">Практическая работа: {{ practice.title }}</div>
      <div class="profile-practice__text"><span>Тема</span>: {{ practice.text }}</div>
    </div>
    <div class="profile-practice__inputs">
      <my-input-form placeholder="Ссылка на код" v-model="ref"/>
      <my-input-form placeholder="Оценка" v-model="mark" :disabled="!isAdmin"/>
    </div>
    <div class="profile-practice__buttons">
      <my-button 
        @click="sendPracticeInUser">
        Отправить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "practice-item-user",
  props: [
    "practice",
    "userPractice",
    "idPractice"
  ],
  data() {
    return {
      ref: this.userPractice?.[`${this.idPractice}`]?.ref,
      mark: this.userPractice?.[`${this.idPractice}`]?.mark,
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;  
    },
  },
  methods: {
    sendPracticeInUser() {
      const newPracticeUser = {
        id: this.idPractice,
        ref: this.ref
      };
      if (this.isAdmin) newPracticeUser.mark = this.mark;
      this.$emit("sendPracticeInUser", newPracticeUser);
    }
  }
}
</script>
