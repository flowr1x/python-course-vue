<template>
  <div class="profile-practice__block">
    <div class="profile-practice__header">
      <div class="profile-practice__theme">Индивидуальная работа: {{ practice.title }}</div>
      <div class="profile-practice__theme">Тема: {{ practice.text }}</div>
    </div>
    <form class="form__profile" @submit.prevent="submitHandler">
      <div class="form-profile__item">
        <my-input-form 
          placeholder="Ссылка на код" 
          v-model="ref"/>
      </div>
      <div class="form-profile__item">
        <my-input-form 
          placeholder="Оценка" 
          v-model="mark" 
          :isDisabled="true"/>
      </div>
      <div class="form-profile__item form-profile__btn">
        <my-button 
          @submit.prevent="submitHandler">
          Отправить
        </my-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "practice-item-user",
  props: [
    "practice",
    "userPractices",
    "idPractice"
  ],
  data() {
    return {
      ref: this.userPractices?.[`${this.idPractice}`]?.ref,
      mark: this.userPractices?.[`${this.idPractice}`]?.mark,
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;  
    },
  },
  methods: {
    submitHandler() {
      const newPracticeUser = {
        name: this.idPractice,
        id: Date.now(),
        ref: this.ref,
        mark: this.mark ? this.mark : "",
        title: this.practice.title,
        text: this.practice.text
      };
      // if (this.isAdmin) newPracticeUser.mark = this.mark;
      this.$emit("sendPracticeInUser", newPracticeUser);
    },
  }
}
</script>
