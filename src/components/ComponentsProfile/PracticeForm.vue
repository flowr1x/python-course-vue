<template>
  <div class="profile__practice profile-practice">
    <h3 class="search-profile__title">Создание индивидуальных заданий</h3>
    <div class="search-profile__content search-profile__content_all">
      <form class="profile-practice__form form-profile" @submit.prevent>
        <div class="form-profile__item">
          <my-input-form
            class="form-profile__input"
            placeholder="Назавние индивидуального задания"
            v-model="practice.title"
            :class="{ 'form__input_invalid':(v$.practice.title.$dirty && v$.practice.title.required.$invalid) }"/>
        </div>
        <div class="form-profile__item">
          <my-input-form
            class="form-profile__input"
            placeholder="Тема индивидуального задания"
            v-model="practice.text"
            :class="{ 'form__input_invalid': (v$.practice.text.$dirty && v$.practice.text.required.$invalid) }"/>
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
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: "practice-form",
  setup() {
    return { 
      v$: useVuelidate() 
    }
  },
  data() {
    return {
      practice: {
        title: "",
        text: ""
      }
    }
  },
  validations () {
    return {
      practice: {
        title: { required }, 
        text: { required },
      }
    }
  },
  methods: {
    createPractice() {
      if (this.v$.practice.$invalid) {
        this.v$.practice.$touch();
        return;
      }

      this.$emit("createPractice", this.practice);
      this.practice = {
        title: "",
        text: ""
      }
    }
  }
}
</script>
