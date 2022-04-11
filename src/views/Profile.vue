<template>
  <div class="page__profile">
    <div class="profile__container">
      <div class="profile__content">
        <h2 class="profile__title">Профиль</h2>
        <div class="profile__name-user">Имя: <span>Иван</span></div>
        <div class="profile__name-user">Фамилия: <span>Иванов</span></div>
      </div>
      <a href="#" class="profile__btn btn" @click.prevent="logout">Выйти</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log("Logout");
      this.$router.push("/login?message=logout");
    }
  }
}
</script>
