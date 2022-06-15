<template>
  <div class="profile-practice__block">
    <div class="profile-practice__header">
      <div class="profile-practice__theme">Индивидуальная работа: {{ practice.title }}</div>
      <div class="profile-practice__theme">Тема: {{ practice.text }}</div>
    </div>
    <div class="form-profile__item form-profile__btn">
      <my-button
        class="profile__btn" 
        @click="$emit('remove')">
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "practice-item-admin",
  props: [
    "practice"
  ],
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;  
    },
  },
}
</script>
