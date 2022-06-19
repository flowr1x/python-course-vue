<template>
  <!-- Выполненые практические работы, которые нельзя редактировать -->
  <div class="profile-practice__block">
    <div class="profile-practice__header">
      <div class="profile-practice__theme">Индивидуальная работа: {{ practice.title }}</div>
      <div class="profile-practice__theme">Тема: {{ practice.text }}</div>
    </div>
    <form class="form__profile" v-if="!isAdmin">
      <div class="form-profile__item">
        <my-input-form 
          placeholder="Ссылка на код" 
          v-model="ref"
          :isDisabled="!isAdmin"/>
      </div>
      <div class="form-profile__item">
        <my-input-form 
          placeholder="Оценка" 
          v-model="mark" 
          :isDisabled="!isAdmin"/>
      </div>
    </form>
    <form v-if="isAdmin" class="form__profile" @submit.prevent="sendPracticeInUser">
      <div class="form-profile__item">
        <my-input-form 
          placeholder="Ссылка на код" 
          v-model="ref"
          :isDisabled="true"
          :isCopy="true"/>
      </div>
      <div class="form-profile__item">
        <my-input-form 
          placeholder="Оценка" 
          v-model="mark"/>
      </div>
      <div class="form-profile__item form-profile__btn">
        <my-button
          @submit.prevent="sendPracticeInUser">
          Отправить
        </my-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name:"my-slide",
  props: ["practice"],
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
    },
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
