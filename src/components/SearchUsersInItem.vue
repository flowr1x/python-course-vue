<template>
  <div class="profile-practice__block">
    <div class="profile-practice__headline">
      <div class="profile-practice__label">{{ userData.info.firstName }} {{ userData.info.lastName }}</div>
      <div class="profile-practice__text">{{ userData.info.group }}</div>
    </div>
    <div class="profile-practice__buttons">
      <my-button class="profile-practice__btn" @click="$emit('removeUser', uid)">
        Удалить
      </my-button>
      <my-button class="profile-practice__btn" @click="$emit('sendNameUser', uid)">
        Выбрать
      </my-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "search-users-in-item",
  props: ["userData", "uid"],
}
</script>
