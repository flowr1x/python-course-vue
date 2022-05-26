<template>
  <div class="profile-practice__block">
    <div class="profile-practice__headline">
      <div class="profile-practice__label">Практическая работа: {{ practice.title }}</div>
      <div class="profile-practice__text"><span>Тема</span>: {{ practice.text }}</div>
    </div>
    <div class="profile-practice__buttons">
      <my-button
        class="profile__btn" 
        @click="$emit('remove', practice)">
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
