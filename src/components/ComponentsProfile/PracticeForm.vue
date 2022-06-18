<template>
  <div class="profile__practice profile-practice">
    <h3 class="search-profile__title">Создание индивидуальных заданий</h3>
    <div class="search-profile__content search-profile__content_all">
      <form class="profile-practice__form form-profile" @submit.prevent>
        <div class="form-profile__item">
          <my-input-form
            class="form-profile__input"
            placeholder="Номер практической работы"
            v-model.number="title"/>
        </div>
        <div class="form-profile__item">
          <my-input-form
            class="form-profile__input"
            placeholder="Тема практической работы"
            v-model="text"/>
        </div>
        <div class="form-profile__item form-profile__btn">
          <my-button
            class="form-profile__button"
            @click.prevent="createPractice">Создать</my-button>
        </div>
      </form>
    </div>
  </div> 
</template>
<script>
export default {
  name: "practice-form",
  data() {
    return {
      title: "",
      text: "",
    }
  },
  methods: {
    createPractice() {
      const newPost = {
        title: this.title,
        text: this.text,
      };
      this.$emit("createPractice", newPost);
      this.title = "";
      this.text = "";
    }
  }
}
</script>
