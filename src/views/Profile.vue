<template>
  <div class="page__profile">
    <div class="profile__container">
      <div class="profile__content">
        <h2 class="profile__title">Профиль</h2>
        <form class="profile__form form-profile">
          <div class="form-profile__item">
            <my-input-form class="form-profile__input" placeholder="Имя"/>
          </div>
          <div class="form-profile__item"> 
            <my-input-form class="form-profile__input" placeholder="Фамилия"/>
          </div>
          <div class="form-profile__item">
            <my-input-form class="form-profile__input" placeholder="Номер группы"/>
          </div>
          <div class="form-profile__item">
            <my-button class="form-profile__button">Обновить</my-button>
          </div>
        </form>
      </div>
      <div class="profile__btn-exit">
        <a href="#" class="profile__btn btn" @click.prevent="logout">Выйти</a>
      </div>
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
