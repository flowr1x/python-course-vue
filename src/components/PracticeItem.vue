<template>
  <div class="profile-practice__block">
    <div class="profile-practice__headline">
      <div class="profile-practice__label">Практическая работа {{ practice.title }}</div>
      <div class="profile-practice__text"><span>Тема</span>: {{ practice.text }}</div>
    </div>
    <div class="profile-practice__buttons">
      <button class="profile__btn btn" @click="$emit('remove', practice)">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "practice-item",
  props: {
    practice: {
      type: Object,
      required: true,
    }
  }
}
</script>
