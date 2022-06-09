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
  name: "show-practice-item-user",

  props: [
    "practice",
  ],
  
  data() {
    return {
      ref: "",
      mark: "",
    }
  },
  mounted() {
    this.ref = this.practice?.ref;
    this.mark = this.practice?.mark;
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;  
    },
  },
  methods: {
    sendPracticeInUser() {
      const updatePracticeUser = this.practice;
      updatePracticeUser.mark = this.mark ? this.mark : ""
      this.$emit("sendPracticeInUser", updatePracticeUser);
    }
  }
}
</script>
