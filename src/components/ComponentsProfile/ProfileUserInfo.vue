<template>
  <div class="info-user">
    <div class="info-user__title">
      Информация о пользователе
    </div>
    <div class="info-user__content">
      <form class="profile__form form-profile" @submit.prevent="submitHandler">
        <div class="form-profile__item">
          <my-input-form class="form-profile__input"
            placeholder="Имя"
            v-model="info.firstName"
            :class="{'form__input_invalid':
              (v$.info.firstName.$dirty && v$.info.firstName.required.$invalid)}"
            />
        </div>
        <div class="form-profile__item">
          <my-input-form class="form-profile__input"
            placeholder="Фамилия"
            v-model="info.lastName"
            :class="{'form__input_invalid':
              (v$.info.lastName.$dirty && v$.info.lastName.required.$invalid)}"/>
        </div>
        <div class="form-profile__item" v-if="!isAdmin">
          <my-input-form class="form-profile__input"
           placeholder="Номер группы"
           v-maska="['##.##.##-#-##', '##.##.##-##-##',]"
           v-model="info.group"
           :class="{'form__input_invalid':
              (v$.info.group.$dirty && v$.info.group.required.$invalid)}"/>
        </div>
        <div class="form-profile__item form-profile__btn">
          <my-button class="form-profile__button " @submit.prevent="submitHandler">Обновить</my-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: "profile-user-info",
  props: {
    info: {
      type: Object,
      required: true,
    }
  },
  setup() {
    return { 
      v$: useVuelidate(),
    }
  },
  validations() {
    return {
      info: {
        group: { required },
        firstName: { required },
        lastName: { required },
      }
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;  
    }
  },
  methods: {
    submitHandler() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      this.$emit("submitHandler", this.info);
    }
  }
}
</script>
