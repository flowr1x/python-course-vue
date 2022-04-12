<template>
  <div class="form-login">
    <div class="form-login__body">
      <div class="form-login__title">
        <div class="form-login__subtitle">Вход</div>
        <span>|</span>
        <router-link to="/register" class="">Зарегистрироваться</router-link>
      </div>
      <form action="#" method="post" class="form-login__form" @submit.prevent="onSubmit">
        <input type="text" 
          class="form-login__input"
          placeholder="Email"
          v-model="email"
          :class="{invalid: (v$.email.$dirty && v$.email.required.$invalid) || (v$.email.$dirty && v$.email.email.$invalid)}"
          >
          <small v-if="v$.email.$dirty && v$.email.required.$invalid">Поле email пустое</small>
          <small v-else-if="v$.email.$dirty && v$.email.email.$invalid">Неправильный email</small>
        <input type="password" 
          class="form-login__input" 
          placeholder="Пароль"
          v-model="password"
          :class="{invalid: (v$.password.$dirty && v$.password.required.$invalid) || (v$.password.$dirty && v$.password.minLength.$invalid)}">
        <button type="submit" 
          class="form-login__button btn">Войти</button>
      </form>
    </div>    
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: "login",
  setup() {
    return { 
      v$: useVuelidate() 
    }
  },
  data: () => ({
    email: "",
    password: ""
  }),
  validations () {
    return {
      email: { required, email }, 
      password: { required, minLength: minLength(6) },
    }
  },
  methods: {
    onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      this.$router.push("/");
    }
  }
}
</script>
