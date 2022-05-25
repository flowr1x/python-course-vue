<template>
  <div class="profile-practice__block">
    <div class="profile-practice__headline">
      <div class="profile-practice__label">Практическая работа: {{ practice.title }}</div>
      <div class="profile-practice__text"><span>Тема</span>: {{ practice.text }}</div>
    </div>
    <div class="profile-practice__inputs" v-if="!isAdmin">
      <my-input-form placeholder="Ссылка на код" v-model="ref"/>
      <my-input-form placeholder="Оценка" :disabled="!isAdmin"/>
    </div>
    <div class="profile-practice__buttons">
      <my-button
        v-if="isAdmin" 
        class="profile__btn" 
        @click="$emit('remove', practice)">
        Удалить
      </my-button>
      <my-button 
        v-if="!isAdmin">
        Отправить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "practice-item",
  props: [
    "practice",
    "userPractice"
  ],
  data() {
    return {
      ref: this.userPractice?.id,
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;  
    },
  },
}
</script>
