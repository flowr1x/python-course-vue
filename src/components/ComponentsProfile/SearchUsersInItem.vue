<template>
    <div class="search-profile__item">
      <div class="search-profile__header">
        <div class="search-profile__data">{{ userData.info.firstName }} {{ userData.info.lastName }}</div>
        <div class="search-profile__data">{{ userData.info.group }}</div>
      </div>
      <div class="search-profile__btn">
        <my-button class="profile-practice__btn" @click="$emit('searchUserByUid', uid, userData)">
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
